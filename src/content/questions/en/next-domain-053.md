---
questionId: next-domain-053
kind: question
status: published
locale: en
title: When should one transaction count as an order, revenue, and cash?
question: "Payment is authorized but not captured, and goods are not fulfilled. The business report counts an order, while finance records no revenue yet. How would you define and reconcile order, payment, revenue, and cash metrics across domains?"
intent: Assesses boundaries and mappings between business events and financial recognition.
signals:
  - "Separates order intent, payment authorization, capture or charge, settlement, fulfillment, and recognized revenue as distinct events."
  - "Defines which event and timing each metric represents, making clear that authorization is not cash received."
  - "Documents status transitions, partial fulfillment, refunds, and reconciliation rules for business and finance reports."
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
roles:
  - data
  - product
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
  - How should partial fulfillment or refunds be represented?
  - Who maintains change history for cross-domain definitions?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
