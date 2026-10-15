---
questionId: next-domain-028
kind: question
status: published
locale: en
title: How do you avoid duplicating plan and feature-entitlement rules?
question: Product, sales, and engineering separately maintain plan descriptions, feature flags, and account permissions. After an upgrade, a feature appears in the UI but the API denies it. How would you establish a unified model?
intent: Assesses domain boundaries, authorization sources, and frontend/backend consistency.
signals:
  - Separate sales packaging, subscription state, and runtime entitlement.
  - Define server-side authority and cache refresh rules.
  - Cover upgrades, downgrades, trial expiry, and manual exceptions.
primaryCapability: domain-modeling.product-project-model
topics:
  - product-thinking
  - data-modeling
roles:
  - product
  - engineering
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
  - How should an offline client respond to entitlement changes?
  - How should contract exceptions be audited?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
