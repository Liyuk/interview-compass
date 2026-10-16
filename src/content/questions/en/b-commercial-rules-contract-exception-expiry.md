---
questionId: b-commercial-rules-contract-exception-expiry
kind: question
status: published
locale: en
title: >-
  A major customer has a special rate in its contract, but the exception may end at renewal. How would systems
  and operations avoid keeping the old exception indefinitely?
question: >-
  A major customer has a special rate in its contract, but the exception may end at renewal. How would systems
  and operations avoid keeping the old exception indefinitely?
intent: >-
  Assess whether you model the scope, effective period, approval, and expiry of commercial exceptions in the
  operating process.
signals:
  - Distinguishes default rates and exceptions by customer, product, transaction, and validity.
  - Preserves approval grounds, owners, versions, and notices, including renewal treatment.
  - >-
    Compares default reversion, pause, and manual review rather than assuming automatic fallback is
    always correct.
  - >-
    Tests expiry and renewal cases for misuse detection, customer explanation, and historical
    reconciliation.
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - risk-management
  - planning
roles:
  - product
  - operations
  - engineering
  - backend
responsibilityScopes:
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
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
followUps:
  - If the customer orders during renewal negotiations, what determines which rate applies?
  - How would you detect special configurations that are expired but still active?
  - If an exception needs renewal but its business owner cannot confirm in time, what should the system do?
  - How would you discover historical customer-specific branches scattered through code?
relatedQuestions: []
---
