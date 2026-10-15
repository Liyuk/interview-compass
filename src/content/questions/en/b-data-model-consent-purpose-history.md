---
questionId: b-data-model-consent-purpose-history
kind: question
status: published
locale: en
title: After consent is withdrawn, how do you prove data is used only for permitted purposes?
question: >-
  A user consented to product analytics, then withdrew consent. Derived metrics already reached reports,
  experiments, and model-training data. How would you model consent state, purpose scope, and propagation?
intent: >-
  Assess whether you treat consent as a time- and purpose-scoped domain fact and track responsibility for derived
  data.
signals:
  - Distinguish the user, consent object, purpose, effective time, and withdrawal time.
  - Track lineage from source records to derived features, reports, and training sets.
  - Define deletion, recomputation, isolation, and escalation when data cannot be recalled.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - security
  - product-thinking
roles:
  - data
  - backend
  - product
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
  - behavioral
followUps:
  - How do you distinguish anonymous aggregates from derived data still linkable to a person?
  - How can you prove downstream systems completed disposition after withdrawal?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
---
