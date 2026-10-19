---
layout: post
title: "When the Evidence Answers a Smaller Question Than You Asked"
date: 2026-10-19
published: false
description: Two weeks before my MSc deadline, it became clear my hypothesis would not be fully supported. This is what I did next, and what I learned from it.
tags: [research, explainable ai, reflection, trustworthy ai]
author: Clifford
comments: true
featured: false
---

Two weeks before my dissertation deadline, I knew my hypothesis was not going
to be fully supported.

I had spent months building a benchmark to test whether attackers can
manipulate AI explanations in intrusion detection systems. The framework worked.
The experiments ran. The results were real. But they did not answer the question
I had set out to answer, at least not in full.

I was very disappointed. For a while, I had believed I was onto something
groundbreaking. This post is about what happened next, and what I would tell
anyone who finds themselves in the same position.

## The question I started with

My research proposal, shaped with my supervisor, set up a clean comparison. Two
explanation methods, SHAP and LIME. Two model families, a tree ensemble
(XGBoost) and a neural network (MLP). Two standard adversarial attacks. One of
my research questions asked whether model architecture moderates the robustness
of explanations.

The expected outcome was ambitious: evidence on whether adversarial
susceptibility is driven by the explanation method, the model architecture, or
their interaction. A full two-by-two picture.

That picture was what I thought would make the work stand out.

## How the picture came apart

It did not fall apart in one moment. It came apart in pieces.

**The pipeline had to be rebuilt.** My first full set of results looked
complete. Then I found problems in my own pipeline, including a preprocessing
step on one dataset that learned from test data it should never have seen. I
kept those results as a legacy record, fixed the issues, and started again. My
results went through four versions before the final one.

**One explainer could not be trusted as a measuring tool.** SHAP on a neural
network needs an approximate estimator called KernelSHAP. It samples, so it
gives slightly different answers each time. Before trusting it, I set a limit on
how much its explanations could vary between repeated runs on the same input. On
the neural network, it failed that check during calibration.

That single failure removed half of my clean comparison. Without a reliable SHAP
explanation for the neural network, I could not compare SHAP across the two
architectures fairly.

**The backup plan failed too.** I tried to rescue the comparison with a
control: run KernelSHAP on XGBoost as well, and check that it agreed with the
exact TreeSHAP method. It passed a small 12-flow smoke test. Then, at full
scale, with 500 flows per run, seven of the nine completed runs broke the same
stability limit.

**The other explainer turned out to be noise-limited.** LIME's explanations
barely moved under attack. At first that looked like robustness. Then I compared
the attack results with LIME's own run-to-run variation, measured with no attack
at all. In every condition I tested, the attack effect could not be separated
from that background noise. LIME was not proven robust. It was too noisy for me
to tell.

By this point the deadline was about two weeks away.

## The dilemma

I was confused, and I could see several ways forward.

I could keep trying other methods until something stuck: another estimator,
more samples, a different configuration. Any of these might eventually have
produced a passing run.

I could relax the stability limit. The KernelSHAP runs that failed were not
wildly off. A slightly looser threshold would have let them through.

Or I could accept what the evidence said and report it as it was.

The first option worried me for two reasons. The practical reason was time.
There was no way to redo the research properly in two weeks. The deeper reason
was that "try things until one works" is exactly how a researcher fools
themselves. If I kept changing the method until I got the answer I wanted, the
final result would tell readers more about my persistence than about the
explainer.

The second option was worse. I had set that limit before seeing the production
results. Moving it afterwards would have turned a measuring rule into a
decoration.

So I chose the third option. Part of that was the deadline. Part of it was that
I could not see an honest version of the other two.

## What reporting faithfully looked like

I did not hide the failures. I wrote them down.

- KernelSHAP is reported as an **explainer-reliability finding**, not as
  evidence about robustness. Its failed runs are kept as an audit record, not
  deleted.
- SHAP results are confined to the one place they are reliable: TreeSHAP on
  XGBoost.
- The architecture comparison is carried by LIME alone, because only LIME was
  used on both models. Even then, I describe it as an association within the
  tested conditions, not a cause.
- LIME's small drift is reported alongside its noise floor, with a clear
  statement that low drift is not evidence of robustness.

In practice, faithful reporting was not one big confession. It was hundreds of
small wording choices. "Pre-specified", not "preregistered". "Within the tested
conditions", not "in general". "Could not be separated from noise", not
"robust".

## What the smaller answer turned out to be worth

Here is the part I did not expect.

Once I stopped trying to force the original grid, a different finding became
clear. Three properties that people often treat as one thing behaved
independently in my experiments:

1. **Numerical reliability.** Does the explainer give the same answer twice?
2. **Fragility.** How far does the explanation move when the input is
   perturbed?
3. **Tamperability.** Can an attacker deliberately redirect the explanation
   while keeping the prediction fixed?

TreeSHAP was numerically exact, yet highly fragile. On one dataset, its
explanations moved a great deal under ordinary attacks but barely moved under
the targeted one. On the other dataset, the targeted attack pushed the top
feature out of the top ten in about one flow in five, without changing the
prediction. KernelSHAP looked stable in a small test and failed at scale.

None of these properties predicted the others. That became the central
contribution of the dissertation: before an explanation is trusted in a security
workflow, each property needs its own test.

It is not the groundbreaking result I imagined at the start. It is narrower. But
it is true within its limits, and I think it is more useful to a practitioner
than a dramatic claim that would not survive a second look.

## What I would tell someone in the same position

**Set your pass and fail rules before you see the results.** This was the single
most important decision I made, and I made it before the crisis. When the
results came in, the rules decided for me. Without them, I would have been
negotiating with myself under deadline pressure.

**Test at the scale you will report.** My KernelSHAP smoke test passed with 12
flows. The real run had 500. A small test shows that the code works. It does
not show that the method is stable.

**Keep the failures.** Every superseded result set is still in my repository,
labelled and versioned. They are not embarrassing. They are the evidence that
the final results were not chosen from many attempts.

**Separate the disappointment from the result.** The disappointment was real,
and I do not want to pretend otherwise. But a hypothesis that is not fully
supported is not a failed project. The project was to find out. I found out.

**Let the question shrink.** The evidence answered a smaller question than I
asked. Reporting that smaller answer accurately turned out to be the most
defensible thing in the whole dissertation.

---

For the technical design of the benchmark, see
[When the Explanation Is the Target]({% link _posts/2026-10-19-when-explanation-is-the-target.md %}).
The code and versioned results are on
[GitHub](https://github.com/cliffordEmmanuel/xai-ids-robustness).
