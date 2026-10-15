---
questionId: b-commercial-rules-credit-expiry
kind: question
status: published
locale: en
title: >-
  A partner prepays credits that expire, and a customer uses or refunds them in several batches
  around the expiry date. How would you represent credits, consumption, expiry, and refunds in
  settlement?
question: >-
  A partner prepays credits that expire, and a customer uses or refunds them in several batches
  around the expiry date. How would you represent credits, consumption, expiry, and refunds in
  settlement?
intent: >-
  Assess whether you model balance changes as traceable events and clarify precedence across
  period-spanning refunds and expiry rules.
signals:
  - >-
    Separates the meaning and balance treatment of prepaid, consumed, expired, and refundable
    amounts.
  - >-
    Explains which rule applies when refunds, cancellations, and expiry occur at different times,
    and what evidence establishes its effective date.
  - >-
    Uses partial use, repeated refunds, and cross-period refunds to verify balance conservation and
    reproducibility.
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - risk-management
roles:
  - product
  - operations
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - >-
    If the contract does not say whether a refund restores credits or returns cash, whom would you
    ask and what would you clarify?
  - >-
    If old statements used a different rule, how would you preserve facts and handle the
    discrepancy?
---
