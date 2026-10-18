---
layout: post
title: "Heart-Disease Classification with Public Data: An Experiment"
date: 2025-05-30
description: A public-dataset learning exercise and a reflection on why unusually strong validation results require scrutiny.
tags: [machine learning, classification, experimentation]
author: Clifford
comments: true
portfolio_archive: true
---

This was a public-dataset machine-learning exercise, not a clinical prediction
system. It explored how a few standard classifiers behaved on a dataset of 1,025
anonymised records with 13 clinical features. It should not be interpreted as
medical advice, a diagnostic model, or evidence of clinical performance.

## The exercise

I worked through a familiar workflow: exploratory analysis, preprocessing,
comparison of logistic regression, random forest, K-nearest neighbours, and an
RBF-kernel support-vector machine, followed by evaluation using classification
metrics and cross-validation.

## Why the result needs caution

The original experiment reported a very high random-forest score of roughly
99.7%. A score that strong on a small, public benchmark is a reason to inspect
the experiment carefully—not a reason to assume real-world usefulness. Potential
sources of over-optimism include duplicate or related records, leakage between
training and evaluation data, the split strategy, limited representativeness, or
choices made during preprocessing and tuning.

I do not treat that figure as evidence that the approach would generalise to a
clinical setting. Medical use would require much stronger evidence, including
appropriate data governance, external validation, prospective evaluation, and
clinical oversight.

## What I would do differently

If revisiting the work, I would make data provenance and the evaluation protocol
the centre of the write-up. I would test for duplicates and leakage before model
selection, keep a genuinely untouched test set, report uncertainty rather than a
single score, and discuss how error costs differ for real users.

The value of the exercise is the lesson: an attractive metric is a prompt for
deeper evaluation, especially when a model could be mistaken for a high-stakes
decision tool.

The original project materials are available in the
[heart-disease-prediction repository](https://github.com/cliffordEmmanuel/heart-disease-prediction).
