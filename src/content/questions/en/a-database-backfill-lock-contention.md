---
questionId: a-database-backfill-lock-contention
kind: question
status: published
locale: en
title: How do you plan a safe backfill when it creates production lock contention?
question: >-
  A new field must be backfilled across hundreds of millions of rows. The first run increases lock waits and
  replication lag. How would you decide whether to pause, batch, throttle, or use an online migration?
intent: >-
  Assess whether you manage database migration, service objectives, stop conditions, and recovery as one
  operational change.
signals:
  - Measure lock waits, replication lag, query load, and batch duration.
  - Use small resumable batches with throttling and concurrency limits.
  - Define automatic pause thresholds, progress checks, and rollback or compensation.
primaryCapability: professional.system-design
topics:
  - databases
  - reliability
  - operations
roles:
  - backend
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
  - operations-review
formats:
  - system-design
  - case
followUps:
  - How do you make repeated runs safe for rows already processed?
  - How should application code support old and new records during migration?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
---
