---
layout: post
title: "Heart-Disease Classification: SVC vs Random Forest"
date: 2025-01-06
description: A public-dataset comparison of support-vector and random-forest classifiers; not a clinical model.
tags: [machine learning, classification, experimentation]
author: Clifford
comments: true
---

This was a learning exercise in comparing classifiers on a public heart-disease
dataset. It is not a clinical model, a diagnostic tool, or evidence that either
approach is suitable for medical decision-making.

## The dataset and question

The dataset contained 303 patient records with features such as age, blood
pressure, cholesterol, ECG results, exercise-induced angina, and maximum heart
rate. The narrow question was how two common classifiers behaved on this dataset
under the same experimental setup.

## The comparison

I compared:

1. **Support Vector Classifier (SVC, RBF kernel)** — a classifier that finds a
   decision boundary between classes.
2. **Random Forest Classifier** — an ensemble of decision trees that can model
   non-linear relationships and provide model-based feature-importance signals.

I recorded accuracy, precision, recall, and F1-score. In this experiment, the
SVC performed better across the reported aggregate metrics: 87% accuracy,
compared with 80% for the random forest. The random forest showed slightly
stronger recall for positive cases, but weaker precision.

## What the result does—and does not—say

The comparison is a result from one public dataset and one modelling setup. It
does not establish clinical usefulness, generalisation to another population, or
the cost of false positives and false negatives in practice. Those questions
would need stronger data, appropriate study design, external validation, and
clinical expertise.

For me, the useful lesson was methodological: model selection needs more than a
single headline metric. The task, error costs, data quality, and interpretation
needs should shape the evaluation.

## Next steps

If I extended the exercise, I would test the sensitivity of results to different
splits and preprocessing choices, document data provenance more fully, and add
explanation methods only as a complement to—not a substitute for—robust
evaluation.

The original project materials are available in the
[classification-comparison repository](https://github.com/cliffordEmmanuel/classification-comparison).
