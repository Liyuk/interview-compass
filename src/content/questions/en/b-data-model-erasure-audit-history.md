---
questionId: b-data-model-erasure-audit-history
kind: question
status: published
locale: en
title: >-
  A user asks to have personal data deleted, while finance must retain transaction records for
  audit. How would you define the boundary among deletion, anonymization, and traceability?
question: >-
  A user asks to have personal data deleted, while finance must retain transaction records for
  audit. How would you define the boundary among deletion, anonymization, and traceability?
intent: >-
  Assess whether you express data purpose, sensitivity, retention basis, and deletion propagation
  rather than treating deletion as one database operation.
signals:
  - >-
    Separates identity data, transaction facts, derived data, and audit evidence by purpose and
    sensitivity.
  - >-
    Explains how deletion or anonymization propagates to caches, analytical sets, backups, and
    downstream copies.
  - >-
    Defines evidence that deletion completed and data cannot re-enter production for an unauthorized
    purpose.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - security
  - risk-management
roles:
  - data
  - engineering
  - product
responsibilityScopes:
  - multiple-teams
  - organization
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
    If backups cannot be rewritten item by item immediately, how would you prevent restored data
    from returning to production?
  - How would you demonstrate that anonymized records cannot be reidentified through linked data?
---
