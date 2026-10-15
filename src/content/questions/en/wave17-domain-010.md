---
questionId: wave17-domain-010
kind: question
status: published
locale: en
title: How do you ensure one business event affects several ledgers only once?
question: >-
  Orders, inventory, and loyalty points are owned by separate services; messages may be duplicated, reordered, or
  delayed. How would you define event identity, idempotency boundaries, and compensation records?
intent: >-
  Assesses whether the candidate defines cross-service facts and local transaction boundaries without assuming
  exactly-once delivery.
signals:
  - Defines stable event IDs, consumer state, and duplicate handling
  - Explains audit trails for partial success, reordering, and compensation
primaryCapability: domain-modeling.model-evolution
topics:
  - databases
  - engineering-systems
roles:
  - backend
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
---
