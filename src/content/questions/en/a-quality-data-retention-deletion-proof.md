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
  - Maps sources, derived data, processors, and copies under verified deletion-retention policies.
  - Distinguishes erasure, anonymization, backup expiry, and restricted retention with timing and owners.
  - >-
    Tracks requests, retries, and confirmations while preventing replay or rewrites from restoring erased
    content.
  - Verifies completed and pending scope through queries, logs, and audits, escalating overdue work.
primaryCapability: professional.quality-security-safety
topics:
  - security
  - databases
  - risk-management
roles:
  - backend
  - data
  - product
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
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
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
