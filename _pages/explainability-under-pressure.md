---
layout: page
title: Explainability Under Pressure
permalink: /lab/explainability-under-pressure/
description: A security system gives an alert and a reason. Can you trust the reason? Three short, hands-on tests.
nav: false
---

<p class="eyebrow">Interactive Lab · Toy model</p>

A security system raises an alert and tells the analyst why. The analyst trusts
that reason and investigates it. **But can the reason be trusted?** Try three
quick tests below.

<section class="xai-lab" data-xai-lab>

  <section class="xai-panel" aria-labelledby="xai-start-title">
    <p class="xai-step">The starting point</p>
    <h2 id="xai-start-title">This is what the analyst sees</h2>
    <p>Someone may be stealing data. The system flags the event and lists the reasons, largest first.</p>

    <div class="xai-screen" data-screen-original>
      <div class="xai-screen-head">
        <span class="xai-screen-level"><span data-level>High risk</span> · <span data-score>86%</span></span>
        <span class="xai-screen-top">Top reason: <strong data-top>Data leaving the network</strong></span>
      </div>
      <ol class="xai-reasons" data-reasons aria-label="Reasons for the alert"></ol>
    </div>
  </section>

  <section class="xai-panel" aria-labelledby="xai-q1-title">
    <p class="xai-step">Test 1 of 3</p>
    <h2 id="xai-q1-title">Ask the same question 20 times. Do you get the same answer?</h2>
    <p>
      Nothing about the event changes. We only ask the system “why?” again.
      Many real tools save time by making a quick estimate instead of a careful
      calculation.
    </p>
    <div class="xai-controls">
      <fieldset class="xai-segmented">
        <legend>How the reason is worked out</legend>
        <label><input type="radio" name="xai-method" value="quick" checked> Quick estimate</label>
        <label><input type="radio" name="xai-method" value="careful"> Careful calculation</label>
      </fieldset>
      <button class="btn-portfolio" type="button" data-run-ask>Ask 20 more times</button>
    </div>
    <ol class="xai-tiles" data-ask-tiles aria-label="Top reason for each of 20 questions"></ol>
    <div class="xai-key" aria-hidden="true">
      <span><i class="xai-tile is-same"></i> Said “data leaving the network”</span>
      <span><i class="xai-tile is-different"></i> Said something else</span>
    </div>
    <p class="xai-tally-label">What the 20 answers said</p>
    <ul class="xai-tally" data-ask-tally></ul>
    <div class="xai-answer" aria-live="polite">
      <p class="xai-answer-main" data-ask-answer></p>
      <p data-ask-detail></p>
    </div>
    <p class="xai-research"><strong>In my research:</strong> KernelSHAP, a widely used estimating tool, passed a small check but gave unstable answers at full scale. LIME varied so much on its own that any effect of an attack was hidden inside that variation.</p>
  </section>

  <section class="xai-panel" aria-labelledby="xai-q2-title">
    <p class="xai-step">Test 2 of 3</p>
    <h2 id="xai-q2-title">Change the event very slightly. Does the reason hold?</h2>
    <p>
      Real events are never identical. Each try below moves every signal up or
      down by at most one step, at random. The careful calculation is used, so
      any change comes from the event itself.
    </p>
    <div class="xai-controls">
      <button class="btn-portfolio" type="button" data-run-nudges>Try 30 more</button>
    </div>
    <ol class="xai-tiles" data-nudge-tiles aria-label="Outcome of each of 30 small changes"></ol>
    <div class="xai-key" aria-hidden="true">
      <span><i class="xai-tile is-same"></i> Same alert, same reason</span>
      <span><i class="xai-tile is-different"></i> Same alert, different reason</span>
      <span><i class="xai-tile is-alert"></i> The alert itself changed</span>
    </div>
    <div class="xai-answer" aria-live="polite">
      <p class="xai-answer-main" data-nudge-answer></p>
      <p data-nudge-detail></p>
      <p data-nudge-example></p>
    </div>
    <p class="xai-research"><strong>In my research:</strong> on real intrusion data, TreeSHAP explanations changed a great deal under standard small-change attacks, far more than in this toy.</p>
  </section>

  <section class="xai-panel xai-panel-feature" aria-labelledby="xai-q3-title">
    <p class="xai-step">Test 3 of 3</p>
    <h2 id="xai-q3-title">Can an attacker change the reason on purpose?</h2>
    <p>
      The attacker is still stealing the same amount of data, so the alert stays
      high. But they can make small changes to the other signals. Their goal is
      to make the analyst look somewhere else.
    </p>
    <div class="xai-controls">
      <button class="btn-portfolio btn-portfolio-primary" type="button" data-run-attack>Let the attacker try</button>
      <button class="btn-portfolio" type="button" data-reset-attack>Reset</button>
    </div>

    <div class="xai-compare">
      <div>
        <p class="xai-compare-label">Before</p>
        <div class="xai-screen" data-screen-original-copy aria-hidden="true"></div>
      </div>
      <div>
        <p class="xai-compare-label">After the attacker's changes</p>
        <div class="xai-screen" data-screen-attacked>
          <div class="xai-screen-head">
            <span class="xai-screen-level"><span data-level>High risk</span> · <span data-score>86%</span></span>
            <span class="xai-screen-top">Top reason: <strong data-top>Data leaving the network</strong></span>
          </div>
          <ol class="xai-reasons" data-reasons aria-label="Reasons after the attacker's changes"></ol>
        </div>
      </div>
    </div>

    <div class="xai-attack-changes" data-attack-changes-wrap hidden>
      <p class="xai-tally-label">What the attacker changed</p>
      <ul class="xai-changes-list" data-attack-changes></ul>
    </div>

    <div class="xai-answer" data-attack-answer-wrap aria-live="polite">
      <p class="xai-answer-main" data-attack-answer></p>
      <p data-attack-detail></p>
      <p data-attack-search></p>
    </div>

    <details class="xai-try">
      <summary>Try it yourself: the attacker's changes</summary>
      <p>Each signal can move one step up or down. Data leaving the network is fixed.</p>
      <ul class="xai-changes" data-changes></ul>
    </details>
    <p class="xai-research"><strong>In my research:</strong> a targeted attack pushed the top reason out of the top ten in about one in five network flows on one dataset, with the alert unchanged. On the other dataset, the same attack barely worked.</p>
  </section>

  <noscript><p>This lab needs JavaScript to run.</p></noscript>
</section>

## What the three tests show

1. **A quick estimate can give a different reason every time you ask,** even
   when nothing has changed. Before you read meaning into a reason, check how
   much it varies on its own.
2. **Tiny, random changes usually leave the reason alone, but not always.**
3. **A deliberate attacker can change the reason while the alert stays the
   same.** Random changes rarely do this. A targeted search does.

These are three different weaknesses. A system can pass one test and fail
another, so each one needs its own check. That was the central finding of my
MSc research, which tested real explanation tools (SHAP and LIME) on real
intrusion-detection data.

<div class="lab-disclosure" role="note">
  <strong>What this is, and is not:</strong> a small, fully visible toy model
  with one made-up event. It runs entirely in your browser. It shows the ideas
  from my research at a small scale. It does not reproduce the research results,
  and it is not a real security system.
</div>

<details class="xai-details">
  <summary>For the technical reader</summary>

  <p><strong>Model.</strong> Risk = logistic(−6.0 + 0.22·logins + 0.06·unusual time + 0.20·data leaving + 0.39·scans + 0.08·new device + 0.044·data leaving·new device + 0.054·unusual time·logins), with every signal on a 0 to 10 scale. High risk is 70% or above; needs review is 40% to 69%.</p>
  <p><strong>Reasons.</strong> Shapley values of the risk score, measured against a quiet reference event with every signal at 1. The percentages are each signal's share of the positive contributions. “Careful calculation” is exact (all 32 coalitions), as with TreeSHAP. “Quick estimate” uses permutation sampling with 5 samples, which behaves like the sampling in KernelSHAP and LIME.</p>
  <p><strong>Test 2.</strong> Each signal moves by −1, 0 or +1, chosen at random.</p>
  <p><strong>Test 3.</strong> The attacker may move each signal except data leaving by at most one step. An exhaustive search of all 81 combinations finds 3 that keep the alert high and change the top reason. The interaction terms make this possible: the same data volume gets less of the credit when the device signal drops and the login signals rise.</p>
  <p><strong>Reproducibility.</strong> All random draws use a fixed seed, so the page gives the same sequence of results each time it loads.</p>
  <p><strong>Limits.</strong> The attacker here knows the full model. My research used an attacker who could only send inputs and read the outputs. Real network signals cannot always change freely.</p>
</details>

Read the [research case study]({% link _projects/05-xai-tamper-resistance.md %}) and the [benchmark write-up]({% link _posts/2026-10-19-when-explanation-is-the-target.md %}) for the real experiments and findings.

<script src="{{ '/assets/js/explainability-under-pressure.js' | relative_url }}" defer></script>
