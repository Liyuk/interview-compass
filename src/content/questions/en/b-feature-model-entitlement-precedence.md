---
questionId: b-feature-model-entitlement-precedence
kind: question
status: published
locale: en
title: When a user has a plan, trial, and manual grant, which entitlement wins?
question: >-
  An account may hold a base plan, temporary trial, campaign benefit, and support credit. Systems implement
  precedence differently, so access sometimes flips. How would you define eligibility and conflict rules?
intent: Assess whether you model entitlement source, validity, precedence, revocation, and explainability.
signals:
  - List benefit sources, subject scope, and effective and expiry times.
  - Define stacking, override, mutual exclusion, and revocation precedence.
  - Keep decisions explainable and traceable, with combination tests for consistency.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - commercialization
roles:
  - product
  - backend
  - operations
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
  - If the entitlement service is unavailable, should the system fail open or closed?
  - How can support find why a user gained or lost an entitlement?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
---
