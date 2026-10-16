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
  - Separate sales packaging, subscription state, and runtime entitlement.
  - Define server-side authority and cache refresh rules.
  - Cover upgrades, downgrades, trial expiry, and manual exceptions.
  - Separates feature existence, visibility, executable permission, and usage quota.
  - Defines precedence among plan defaults, trial windows, and contractual exceptions.
  - Can explain why a user has or lacks a capability at a given time.
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
  - How should an offline client respond to entitlement changes?
  - How should contract exceptions be audited?
  - >-
    If a feature is retired but an old contract still promises it, how should product status differ from
    authorization?
  - How would you keep front-end visibility consistent with server-enforced permissions?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
relatedQuestions: []
---
