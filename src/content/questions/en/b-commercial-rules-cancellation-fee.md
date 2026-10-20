---
questionId: b-commercial-rules-cancellation-fee
kind: question
status: published
locale: en
title: How should a system explain refunds when cancellation policies conflict?
question: >-
  A customer cancels before service begins, but the contract, product page, and support system
  describe the cancellation fee differently. How would you determine the refund and make future
  orders follow a consistent rule?
intent: >-
  Assess whether you identify policy authority, applicable versions, and transaction state, then
  clarify the execution boundary for refunds and fees.
signals:
  - Separates refund entitlement, delivered service, cancellation fees, and non-refundable charges.
  - >-
    Determines which policy is authoritative, which customers or orders it covers, and when it took
    effect.
  - >-
    Defines escalation, customer explanation, accounting adjustment, and validation after a rule is
    revised.
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - risk-management
roles:
  - product
  - operations
  - engineering
  - frontend
  - backend
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
formats:
  - case
followUps:
  - If the policy changed after the customer ordered, which version should apply?
  - >-
    How would you detect discrepancies among support promises, product UI, and settlement
    implementation?
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
