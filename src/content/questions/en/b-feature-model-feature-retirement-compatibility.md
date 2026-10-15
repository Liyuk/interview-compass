---
questionId: b-feature-model-feature-retirement-compatibility
kind: question
status: published
locale: en
title: >-
  A model feature will be retired, but several online models and historical reports still depend on
  it. How would you plan retirement and replacement?
question: >-
  A model feature will be retired, but several online models and historical reports still depend on
  it. How would you plan retirement and replacement?
intent: >-
  Assess whether you connect feature lifecycle, downstream dependencies, historical reproducibility,
  and migration acceptance into a controlled process.
signals:
  - Maps consumers, training and serving contexts, historical dependencies, and ownerless use.
  - >-
    Defines parallel comparison, quality checks, cutover windows, and rollback conditions for old
    and new features.
  - Distinguishes when computation stops, serving stops, and historical snapshots are retained.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - risk-management
roles:
  - data
  - ai-engineer
  - engineering
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - >-
    If the replacement is equivalent only for some populations, how would you choose a gradual
    rollout scope?
  - How would you detect implicit downstream dependencies beyond searching source repositories?
---
