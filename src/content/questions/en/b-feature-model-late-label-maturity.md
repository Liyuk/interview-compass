---
questionId: b-feature-model-late-label-maturity
kind: question
status: published
locale: en
title: How do you avoid treating immature labels as negative examples?
question: >-
  A risk model uses later default as its training label, but many transactions have no final outcome
  before the observation window ends. How would you handle label maturity, sample inclusion, and
  retrospective evaluation?
intent: >-
  Assess whether you distinguish true negatives from unobserved outcomes and align training data
  with evaluation windows.
signals:
  - Defines the target event, observation window, label-maturity period, and right-censored samples.
  - Splits train and validation data by time without assigning immature labels prematurely.
  - Checks whether changing mature-sample coverage introduces population or business-selection bias.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - risk-management
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
formats:
  - case
followUps:
  - If release timing is shorter than label maturity, how would you evaluate early impact?
  - >-
    If labels are corrected later, how would you preserve training-data versions and published
    metrics?
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
