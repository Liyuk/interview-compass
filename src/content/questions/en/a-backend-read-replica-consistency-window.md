---
questionId: a-backend-read-replica-consistency-window
kind: question
status: published
locale: en
title: "What API contract should handle stale reads from replicas after a write?"
question: >-
  A user updates account settings and refreshes immediately, but a read replica returns the old value. Reading from the
  primary adds load, while waiting for replication may time out. How would you design the experience?
intent: Assess whether you choose consistency windows, routing, and degraded behavior based on business read/write semantics.
signals:
  - Defines read-your-writes, monotonic reads, and tolerated staleness by user action.
  - Compares affinity, version tokens, primary reads, and explicit waits by cost and latency.
  - Makes unsynchronized or failed states understandable rather than silently showing old values.
  - Tests replication lag, primary failures, and cross-client access against guarantees.
primaryCapability: professional.system-design
topics:
  - databases
  - distributed-systems
  - reliability
roles:
  - backend
  - data
  - engineering
  - frontend
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
  - promotion
formats:
  - system-design
  - debugging
  - case
followUps:
  - "How can version tokens prevent stale reads without hiding concurrent updates?"
  - "Which reads can accept eventual consistency, and what user action makes that acceptable?"
  - "How would you bound waiting and handle cross-device reads when session affinity is insufficient?"
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
