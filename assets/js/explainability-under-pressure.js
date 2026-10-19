/*
 * Explainability Under Pressure: an interactive toy model.
 *
 * Story: an analyst sees an alert and its top reason. Three questions:
 *   1. Ask the same question 20 times: is the reason the same each time?
 *   2. Change the event very slightly, 30 times: does the reason hold?
 *   3. Let an attacker try: can they change the reason but keep the alert?
 *
 * Under the hood: a small logistic model with two interaction terms.
 * Reasons are Shapley values of the risk score against a quiet reference event.
 * "Careful" enumerates all feature coalitions (exact). "Quick" samples five
 * feature orderings, as approximate explainers do, so it varies between runs.
 * All randomness uses a seeded generator, so each page load is reproducible.
 */
(() => {
  "use strict";

  const lab = document.querySelector("[data-xai-lab]");
  if (!lab) {
    return;
  }

  // ---------------------------------------------------------------- model

  const FEATURES = [
    { id: "logins", label: "Failed logins" },
    { id: "access", label: "Login at an unusual time" },
    { id: "outbound", label: "Data leaving the network" },
    { id: "scans", label: "Service scans" },
    { id: "novelty", label: "New or unknown device" },
  ];
  const N = FEATURES.length;
  const EVENT = [6, 4, 8, 3, 5];
  const REFERENCE = [1, 1, 1, 1, 1];
  const TARGET = 2; // "data leaving the network": the original top reason
  const BUDGET = 1;
  const HIGH = 0.7;
  const REVIEW = 0.4;
  const QUICK_SAMPLES = 5;

  const INTERCEPT = -6.0;
  const WEIGHTS = [0.22, 0.06, 0.2, 0.39, 0.08];
  const OUTBOUND_X_NOVELTY = 0.44;
  const ACCESS_X_LOGINS = 0.54;

  const risk = (x) => {
    const z =
      INTERCEPT +
      x.reduce((sum, value, i) => sum + WEIGHTS[i] * value, 0) +
      (OUTBOUND_X_NOVELTY * x[2] * x[4]) / 10 +
      (ACCESS_X_LOGINS * x[1] * x[0]) / 10;
    return 1 / (1 + Math.exp(-z));
  };

  const level = (p) => (p >= HIGH ? "High risk" : p >= REVIEW ? "Needs review" : "Low risk");

  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
  const popcount = (mask) => {
    let count = 0;
    for (let m = mask; m; m >>= 1) count += m & 1;
    return count;
  };
  const blend = (x, mask) => x.map((value, i) => (mask & (1 << i) ? value : REFERENCE[i]));

  const exactReasons = (x) => {
    const phi = new Array(N).fill(0);
    for (let mask = 0; mask < 1 << N; mask += 1) {
      const size = popcount(mask);
      const fBase = risk(blend(x, mask));
      for (let i = 0; i < N; i += 1) {
        if (!(mask & (1 << i))) {
          const weight = (factorial(size) * factorial(N - size - 1)) / factorial(N);
          phi[i] += weight * (risk(blend(x, mask | (1 << i))) - fBase);
        }
      }
    }
    return phi;
  };

  const quickReasons = (x, rng) => {
    const phi = new Array(N).fill(0);
    for (let s = 0; s < QUICK_SAMPLES; s += 1) {
      const order = [...Array(N).keys()];
      for (let i = N - 1; i > 0; i -= 1) {
        const j = Math.floor(rng() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      const current = [...REFERENCE];
      let previous = risk(current);
      order.forEach((i) => {
        current[i] = x[i];
        const next = risk(current);
        phi[i] += next - previous;
        previous = next;
      });
    }
    return phi.map((value) => value / QUICK_SAMPLES);
  };

  // mulberry32: small, seeded, reproducible
  const seeded = (seed) => () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const topIndex = (phi) => phi.reduce((best, value, i) => (value > phi[best] ? i : best), 0);
  const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
  const pct = (p) => `${Math.round(p * 100)}%`;
  const $ = (selector) => lab.querySelector(selector);
  const lower = (i) => FEATURES[i].label.toLowerCase();

  const countOf = (tops, i) => tops.filter((t) => t === i).length;

  const tally = (tops) =>
    FEATURES.map((_, i) => i)
      .filter((i) => tops.includes(i))
      .sort((a, b) => countOf(tops, b) - countOf(tops, a))
      .map((i) => `<li class="${i === TARGET ? "is-target" : ""}"><strong>${countOf(tops, i)}</strong> ${FEATURES[i].label}</li>`)
      .join("");

  const describeChange = (from, to) =>
    FEATURES.map((_, i) => (from[i] === to[i] ? null : `${lower(i)} ${from[i]} → ${to[i]}`))
      .filter(Boolean)
      .join(", ");

  // -------------------------------------------------- the analyst's screen

  const renderScreen = (target, x, baselineTop) => {
    const p = risk(x);
    const phi = exactReasons(x);
    const top = topIndex(phi);
    const total = phi.reduce((sum, value) => sum + Math.max(value, 0), 0);
    const largest = Math.max(...phi);
    const share = (value) => (total > 0 ? Math.max(value, 0) / total : 0);
    const moved = baselineTop !== undefined && top !== baselineTop;

    target.querySelector("[data-level]").textContent = level(p);
    target.querySelector("[data-score]").textContent = pct(p);
    target.querySelector("[data-top]").textContent = FEATURES[top].label;
    target.classList.toggle("is-moved", moved);
    const order = FEATURES.map((_, i) => i).sort((a, b) => phi[b] - phi[a]);
    target.querySelector("[data-reasons]").innerHTML = order.map((i) => {
      const feature = FEATURES[i];
      return `
        <li class="${i === top ? "is-top" : ""}">
          <span class="xai-reason-label">${feature.label}</span>
          <span class="xai-reason-track" aria-hidden="true"><span style="width: ${largest > 0 ? (Math.max(phi[i], 0) / largest) * 100 : 0}%"></span></span>
          <span class="xai-reason-value">${Math.round(share(phi[i]) * 100)}%</span>
        </li>`;
    }).join("");
    return { p, top };
  };

  const original = renderScreen($("[data-screen-original]"), EVENT);
  $("[data-screen-original-copy]").innerHTML = $("[data-screen-original]").innerHTML;

  // ---------------------------------------------- question 1: same question

  const ASKS = 20;
  let askSeed = 101;

  const renderTiles = (target, outcomes) => {
    target.innerHTML = outcomes
      .map(
        (o, i) =>
          `<li class="${o.className}" title="${o.title}"><span class="xai-sr">${i + 1}: ${o.title}</span></li>`
      )
      .join("");
  };

  const runAsk = () => {
    const careful = $('input[name="xai-method"]:checked').value === "careful";
    const rng = seeded(askSeed);
    askSeed += 1;
    const tops = Array.from({ length: ASKS }, () => topIndex(careful ? exactReasons(EVENT) : quickReasons(EVENT, rng)));
    const different = tops.filter((t) => t !== original.top).length;

    renderTiles(
      $("[data-ask-tiles]"),
      tops.map((t) => ({
        className: t === original.top ? "is-same" : "is-different",
        title: `Top reason: ${FEATURES[t].label}`,
      }))
    );

    $("[data-ask-tally]").innerHTML = tally(tops);

    const others = FEATURES.map((_, i) => i)
      .filter((i) => i !== original.top && tops.includes(i))
      .map((i) => `${lower(i)} (${tops.filter((t) => t === i).length})`);

    $("[data-ask-answer]").textContent =
      different === 0
        ? `Same answer all ${ASKS} times: ${lower(original.top)}.`
        : `A different top reason ${different} times out of ${ASKS}, with nothing changed.`;
    $("[data-ask-detail]").textContent =
      different === 0
        ? careful
          ? `All ${ASKS} answers named ${lower(original.top)}. The careful calculation works the reason out exactly, so it never changes when the event does not change.`
          : `This time all ${ASKS} quick estimates happened to name ${lower(original.top)}. Ask again.`
        : `${ASKS - different} answers named ${lower(original.top)}. The rest named ${others.join(" and ")}. On those runs, an analyst would be sent to look at the wrong thing.`;
  };

  // ------------------------------------------- question 2: slight changes

  const NUDGES = 30;
  let nudgeSeed = 7;

  const runNudges = () => {
    const rng = seeded(nudgeSeed);
    nudgeSeed += 1;
    const outcomes = Array.from({ length: NUDGES }, () => {
      const x = EVENT.map((value) => clamp(value + Math.floor(rng() * 3) - 1, 0, 10));
      const p = risk(x);
      const top = topIndex(exactReasons(x));
      if (level(p) !== level(original.p)) {
        return { kind: "alert", className: "is-alert", title: `Alert changed to ${level(p).toLowerCase()}`, x, top, p };
      }
      if (top !== original.top) {
        return { kind: "different", className: "is-different", title: `Top reason changed to ${lower(top)}`, x, top, p };
      }
      return { kind: "same", className: "is-same", title: "Same alert, same top reason", x, top, p };
    });
    renderTiles($("[data-nudge-tiles]"), outcomes);

    const count = (kind) => outcomes.filter((o) => o.kind === kind).length;
    const different = count("different");
    $("[data-nudge-answer]").textContent =
      `The reason held ${count("same")} times. It flipped ${different} ${different === 1 ? "time" : "times"} while the alert stayed the same.`;
    const flips = outcomes.filter((o) => o.kind === "different");
    const flippedTo = [...new Set(flips.map((o) => o.top))].map(
      (i) => `${lower(i)} (${flips.filter((o) => o.top === i).length})`
    );
    const alertNote =
      count("alert") > 0 ? ` In ${count("alert")} more, the change was big enough to move the alert level itself.` : "";
    $("[data-nudge-detail]").textContent = flips.length
      ? `When it flipped, the top reason became ${flippedTo.join(" and ")}.${alertNote}`
      : `The top reason stayed ${lower(original.top)} every time the alert level held.${alertNote}`;
    $("[data-nudge-example]").textContent = flips.length
      ? `One example: ${describeChange(EVENT, flips[0].x)}. The alert stayed ${level(flips[0].p).toLowerCase()} (${pct(flips[0].p)}), but the top reason became ${lower(flips[0].top)}.`
      : "";
  };

  // ---------------------------------------------- question 3: the attacker

  const offsets = new Array(N).fill(0);
  const attacked = () => EVENT.map((value, i) => clamp(value + offsets[i], 0, 10));

  const bestAttack = () => {
    const free = FEATURES.map((_, i) => i).filter((i) => i !== TARGET);
    const total = 3 ** free.length;
    const hits = [];
    for (let code = 0; code < total; code += 1) {
      const candidate = new Array(N).fill(0);
      let rest = code;
      free.forEach((i) => {
        candidate[i] = (rest % 3) - 1;
        rest = Math.floor(rest / 3);
      });
      const x = EVENT.map((value, i) => clamp(value + candidate[i], 0, 10));
      const phi = exactReasons(x);
      const top = topIndex(phi);
      if (level(risk(x)) === level(original.p) && top !== TARGET) {
        hits.push({ candidate, gap: phi[top] - phi[TARGET] });
      }
    }
    hits.sort((a, b) => b.gap - a.gap);
    return { total, hits };
  };

  const renderAttack = () => {
    const x = attacked();
    const result = renderScreen($("[data-screen-attacked]"), x, original.top);
    const changed = offsets.some((o) => o !== 0);

    $("[data-changes]").innerHTML = FEATURES.map((feature, i) => {
      if (i === TARGET) {
        return `<li class="is-locked"><span>${feature.label}</span><span>${EVENT[i]} &rarr; ${EVENT[i]} <small>unchanged</small></span></li>`;
      }
      const marker = offsets[i] === 0 ? "" : offsets[i] > 0 ? " (+1)" : " (&minus;1)";
      return `
        <li>
          <span id="xai-chg-${feature.id}">${feature.label}</span>
          <span class="xai-stepper" role="group" aria-labelledby="xai-chg-${feature.id}">
            <button type="button" data-step="${i}" data-dir="-1" aria-label="Lower ${feature.label}" ${offsets[i] <= -BUDGET ? "disabled" : ""}>&minus;</button>
            <span class="xai-stepper-value">${EVENT[i]} &rarr; <strong>${x[i]}</strong>${marker}</span>
            <button type="button" data-step="${i}" data-dir="1" aria-label="Raise ${feature.label}" ${offsets[i] >= BUDGET ? "disabled" : ""}>+</button>
          </span>
        </li>`;
    }).join("");

    $("[data-attack-changes]").innerHTML = changed
      ? FEATURES.map((feature, i) => {
          const same = x[i] === EVENT[i];
          const note = i === TARGET ? " <small>(still stealing the same data)</small>" : same ? " <small>(unchanged)</small>" : "";
          return `<li class="${same ? "is-same" : "is-changed"}"><span>${feature.label}</span><span>${EVENT[i]} → <strong>${x[i]}</strong>${note}</span></li>`;
        }).join("")
      : "";
    $("[data-attack-changes-wrap]").hidden = !changed;

    const answer = $("[data-attack-answer]");
    const detail = $("[data-attack-detail]");
    const sameAlert = level(result.p) === level(original.p);
    if (!changed) {
      answer.textContent = "Nothing changed yet.";
      detail.textContent = "Press the button to let the attacker search, or try it yourself below.";
    } else if (!sameAlert) {
      answer.textContent = `The alert dropped to ${level(result.p).toLowerCase()}.`;
      detail.textContent = "That breaks the rule of this game. Here the alert must stay the same, and only the reason may change. Try another combination.";
    } else if (result.top !== original.top) {
      answer.textContent = `Still ${level(result.p).toLowerCase()}. Same data leaving. But the top reason now says “${FEATURES[result.top].label}”.`;
      detail.textContent = `The analyst would now investigate ${lower(result.top)} and could miss the data theft. Only small changes were needed, and the stolen data did not change at all.`;
    } else {
      answer.textContent = `The top reason still says “${FEATURES[result.top].label}”.`;
      detail.textContent = "This combination does not hide the data theft. Most combinations do not. Keep trying, or let the attacker search.";
    }
    $("[data-attack-answer-wrap]").classList.toggle("is-moved", changed && sameAlert && result.top !== original.top);
  };

  // --------------------------------------------------------------- wiring

  lab.querySelectorAll('input[name="xai-method"]').forEach((input) => input.addEventListener("change", runAsk));
  $("[data-run-ask]").addEventListener("click", runAsk);
  $("[data-run-nudges]").addEventListener("click", runNudges);

  $("[data-run-attack]").addEventListener("click", () => {
    const { total, hits } = bestAttack();
    if (hits.length) {
      hits[0].candidate.forEach((value, i) => {
        offsets[i] = value;
      });
    }
    renderAttack();
    $("[data-attack-search]").textContent = `The attacker tried all ${total} possible combinations of small changes. ${hits.length} of them work. Random changes rarely find one; a deliberate search always does.`;
  });

  $("[data-reset-attack]").addEventListener("click", () => {
    offsets.fill(0);
    $("[data-attack-search]").textContent = "";
    renderAttack();
  });

  $("[data-changes]").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-step]");
    if (!button) return;
    const i = Number(button.dataset.step);
    offsets[i] = clamp(offsets[i] + Number(button.dataset.dir), -BUDGET, BUDGET);
    $("[data-attack-search]").textContent = "";
    renderAttack();
    const again = $(`button[data-step="${i}"][data-dir="${button.dataset.dir}"]`);
    (again && !again.disabled ? again : $(`button[data-step="${i}"]:not([disabled])`))?.focus();
  });

  runAsk();
  runNudges();
  renderAttack();
})();
