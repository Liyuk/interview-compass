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
  Assess whether you treat consent as a time- and purpose-scoped domain fact and track responsibility for
  derived data.
signals:
  - >-
    Models subjects, purposes, grounds, validity, and withdrawal rather than permanent all-purpose
    consent.
  - Traces raw records to reports, features, training sets, and consumers.
  - >-
    Applies verified policies to stopping processing, deletion, recalculation, or isolation, with owners
    and escalation.
  - >-
    Verifies execution through downstream queries, logs, and consumer confirmation, stating unrecoverable
    limits.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - security
  - product-thinking
roles:
  - data
  - backend
  - product
  - engineering
  - frontend
  - mobile
  - ai-engineer
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
  - behavioral
followUps:
  - "How would you distinguish anonymous aggregates from derived data that can still be linked to a person?"
  - "What evidence would prove that each downstream consumer completed the required action after withdrawal?"
  - "How should aggregates created before withdrawal be handled when their purpose or re-identification risk differs?"
  - "How should the system represent unknown consent separately from explicit denial?"
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
