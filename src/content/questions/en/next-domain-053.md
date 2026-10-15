---
questionId: next-domain-053
kind: question
status: published
locale: en
title: When should one transaction count as an order, revenue, and cash?
question: Payment is authorized but not captured, and goods are not fulfilled. The business report counts an order, while finance records no revenue yet. How would you design cross-domain metric semantics?
intent: Assesses boundaries and mappings between business events and financial recognition.
signals:
  - Separate intent, order, payment, fulfillment, and recognized-revenue events.
  - Define purpose and timing for each report.
  - Reconcile cross-domain aggregates instead of forcing identical values.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
roles:
  - data
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
followUps:
  - How should partial fulfillment or refunds be represented?
  - Who maintains change history for cross-domain definitions?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
---
