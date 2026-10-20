---
questionId: wave16-domain-024
kind: question
status: published
locale: en
title: Can default values hide a feature-collection outage?
question: >-
  A missing risk feature is automatically set to zero. Latency and error rates are stable, but denial rates
  changed significantly. How would you judge whether the default is safe?
intent: Assesses missing-value semantics, distribution monitoring, and outcome guardrails.
signals:
  - Separate true zero, unknown, and collection failure.
  - Monitor missingness, default rates, and segment impact.
  - Set thresholds for fallback, human review, or model pause.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - metrics
roles:
  - data
  - engineering
  - backend
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
followUps:
  - How should defaults be represented in training and evaluation?
  - When should prediction be rejected instead of imputed?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
