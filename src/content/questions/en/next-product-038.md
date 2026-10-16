---
questionId: next-product-038
kind: question
status: published
locale: en
title: Can an experiment still support attribution when policy changes at the same time?
question: >-
  During a randomized experiment, the platform changes pricing policy and affects treatment and control
  differently. How would you decide which conclusions the experiment still supports?
intent: Assesses intervention integrity, external changes, and limits of causal interpretation.
signals:
  - Map intervention timing and differential group exposure.
  - Check randomization, contamination, and attrition.
  - Limit the estimand and add sensitivity analysis.
  - Checks whether the randomization unit matches exposure, account merging, and cross-device behavior.
  - Looks for imbalance or contamination across channels, regions, and time.
  - States when adjustment, stratification, or a new experiment is needed and limits conclusions accordingly.
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
roles:
  - product
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - Should the experiment be paused, restarted, or analyzed by strata?
  - Which results can remain directional signals?
  - If actual exposure is not randomized, what can randomized assignment still establish?
  - How would you design cross-device identity and contamination checks before the test?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C
relatedQuestions: []
---
