---
questionId: a-quality-data-retention-deletion-proof
kind: question
status: published
locale: en
title: >-
  A user requests deletion of personal data, but some records have reached backups, analytics warehouses, and
  downstream systems. How would you design a verifiable deletion process?
question: >-
  A user requests deletion of personal data, but some records have reached backups, analytics warehouses, and
  downstream systems. How would you design a verifiable deletion process?
intent: >-
  Assesses whether you can trace copies and dependencies through the data lifecycle and prove deletion within
  policy boundaries.
signals:
  - Map sources, derived copies, processors, and retention exceptions
  - Distinguish live deletion, backup expiry, anonymization, and required retention
  - Track request state, retries, and downstream acknowledgements
  - Design sample audits and overdue escalation
  - Maps data flows and derived copies, distinguishing deletion from anonymization.
  - Defines explainable timelines and exceptions for backup expiry, legal retention, and asynchronous jobs.
  - Verifies completion while detecting failures, replays, and paths that can recreate deleted data.
primaryCapability: professional.quality-security-safety
topics:
  - security
  - databases
  - risk-management
roles:
  - backend
  - data
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - planning
followUps:
  - How would you balance deletion with disaster recovery and explain the trade-off?
  - How would you detect queryable downstream copies left after deletion?
  - >-
    If analytics data cannot be deleted row by row, how would you reduce identifiability and state the
    boundary?
  - How would you prevent delayed events from recreating data for a deleted user?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A/B
relatedQuestions: []
---
