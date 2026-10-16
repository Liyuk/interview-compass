---
questionId: next-domain-027
kind: question
status: published
title: Should a feature backfill use the new or original definition?
question: >-
  After a feature definition is fixed, the modeling team wants a historical backfill. Training reproducibility requires
  the original version, while business reports want corrected values. How would you design both views?
intent: Assesses feature versioning, point-in-time semantics, and historical recomputation boundaries.
signals:
  - Retain feature-definition versions and original generated values.
  - Distinguish values available at the time from later corrections.
  - Specify which version training, inference, and reporting consume.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - ai-engineering
roles:
  - data
  - ai-engineer
  - engineering
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - When should an old model remain bound to an old feature version?
  - How do you prevent duplicate historical backfills?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
locale: en
---
