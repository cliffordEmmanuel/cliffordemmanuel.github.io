---
layout: page
title: Can an Attacker Rewrite an AI Explanation?
description: MSc research. A reproducible benchmark that tests whether SHAP and LIME explanations in ML intrusion detection stay reliable under attack.
importance: 1
category: "Independent Research"
featured: true
featured_order: 2
kicker: "Research · MSc · Cybersecurity"
cta: Read case study
---

> **MSc dissertation, graded and accepted. Degree award expected November 2026. Not peer reviewed or formally published. All results apply only to the tested conditions.**

## The problem

Security teams use machine-learning intrusion detection systems (IDS) to flag malicious network traffic. Some teams add an explanation layer, such as SHAP or LIME, so that an analyst can see why the model raised an alert.

The explanation layer is also an attack surface. An attacker can try to change the explanation and keep the alert the same. The analyst then sees a correct alert with a misleading reason. This can send an investigation in the wrong direction.

My research asked one question: **how much can an attacker move these explanations, and how do we measure it reliably?**

## What I built

I designed and built [`xai-ids-robustness`](https://github.com/cliffordEmmanuel/xai-ids-robustness), a configuration-driven benchmark framework in Python.

- **Models and explainers:** TreeSHAP on XGBoost, LIME on XGBoost, and LIME on a multi-layer perceptron (MLP).
- **Datasets:** CICIDS2017 and UNSW-NB15, two standard IDS benchmarks.
- **Threat model:** black-box. The attacker can query model probabilities and explanations. The attacker has no gradient access.
- **Two attack strands:**
  - _Fragility._ FGSM-style and PGD-style perturbations at three budgets. These measure how far an explanation moves as a side effect of an attack on the model.
  - _Targeted tampering._ An attack that reduces the importance of the top-ranked feature in the explanation and keeps the prediction fixed.
- **One attack method for all models.** A gradient-free estimator (SPSA) applies the same attack to the neural network and to the tree ensemble.

## How I kept the evidence honest

I treated reproducibility and claim control as engineering requirements, not as a final step.

- **Frozen release.** All final runs use one tagged code revision and versioned YAML specifications.
- **Validation gates.** Every result row records provenance, per-flow audit data and model-quality metrics. A row enters analysis only if attack-class recall and F1 are at least 0.80.
- **Noise floors.** LIME is stochastic. I measured its benign run-to-run variation and compared every attack result with that baseline.
- **Pre-set reliability limits.** KernelSHAP passed a small calibration test but failed the stability gate at full scale, with 500 flows per run (7 of 9 completed rows exceeded the 0.05 cosine-drift limit between repeated explanations). I did not relax the limit after I saw the result. I reported the failure as a finding and excluded those rows from the robustness analysis.
- **Final evidence base:** 126 validated condition-level rows across 2 datasets, 3 model–explainer pairs and 3 repeatability seeds, with bootstrap confidence intervals.

## What I found

All results apply only to the tested pipeline and conditions.

1. **TreeSHAP explanations were highly fragile.** Mean cosine drift under standard perturbations was 0.95 on CICIDS2017 and 0.72 on UNSW-NB15. A value of 0 means no change; a value near 1 means the explanation became unrelated to the original.
2. **LIME's low drift does not prove robustness.** In all 72 LIME fragility conditions, the attack drift could not be separated from LIME's own benign run-to-run noise.
3. **LIME stability differed by model.** With LIME held constant, rank stability was higher on the MLP than on XGBoost (mean Spearman 0.55 and 0.91 on the two datasets, versus 0.00 and 0.27). This is an association in the tested conditions, not a causal claim.
4. **Targeted tampering worked, but only in some conditions.** For TreeSHAP on UNSW-NB15, the attack pushed the originally top-ranked feature out of the top 10 in 20.3% of flows (95% CI 18.3–22.3%) and the prediction did not change. On CICIDS2017, the same attack had almost no effect (0.1%). LIME showed some movement, but it could not be separated from LIME's noise.
5. **Three properties are separate.** Numerical reliability, accidental fragility and targeted tamperability did not move together. A team must test each one before it trusts explanations in a security workflow.

## Recommendations for practitioners

- Test the explainer at the scale you will deploy it. A small calibration sample can hide instability.
- Compare stochastic explanations, such as LIME, with a measured noise floor.
- Do not assume that a stable explanation is a tamper-resistant explanation.
- Test the explainer on the model family that you will use in production.

## Limitations

- The attacker can query explanations. Some deployments do not expose them.
- The perturbed inputs are normalised feature vectors. They are not always valid network flows.
- SHAP results apply only to TreeSHAP on XGBoost.
- Two datasets and three seeds do not support population-level claims.

## My role and skills

I completed this work independently as my MSc dissertation at the University of Wolverhampton, under the supervision of Dr Ajmal Shahbaz. I defined the research questions and threat model, built the framework and its test suite, ran and audited the experiments, and wrote the analysis.

**Tools:** Python, uv, XGBoost, scikit-learn, PyTorch, SHAP, LIME, pytest, bootstrap statistics, LaTeX.

## Further reading

- **Code:** [xai-ids-robustness on GitHub](https://github.com/cliffordEmmanuel/xai-ids-robustness). The README explains how to reproduce the analysis.
- **Article:** [When the explanation is the target: building a reproducible XAI robustness benchmark]({% link _posts/2026-10-19-when-explanation-is-the-target.md %})
