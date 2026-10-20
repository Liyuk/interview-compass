---
questionId: wave16-domain-021
kind: question
status: published
locale: en
title: How should refund fees and their payer appear in the transaction model?
question: A payment channel charges a fee on partial refunds, and the contract assigns it to the merchant, but reports combine refund amount and fee. How would you model this?
intent: Assesses money flows, responsibility attribution, and ledger representation.
signals:
  - Separate refunded principal, fees, reversals, and net settlement.
  - Trace every amount to contract and channel rules.
  - Reconcile customer, merchant, and finance views.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - commercialization
roles:
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
  - How can original transactions be reproduced after a provider changes its fee?
  - How should one refund be allocated across multiple payment channels?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
