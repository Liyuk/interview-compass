---
questionId: next-cs-003
kind: question
status: published
locale: en
title: How can business atomicity survive when a large transaction is split?
question: A migration across millions of records cannot fit in one transaction. The business cannot expose a partially completed state. How would you design batched writes, visibility, and recovery?
intent: Assesses translating database atomicity into business state, version switching, and recoverable workflows.
signals:
  - Define visible states and read rules during migration.
  - Use checkpoints, idempotent batches, and explicit rollback or roll-forward paths.
  - Verify reads and writes preserve business invariants after partial failure.
primaryCapability: professional.computer-science
topics:
  - databases
  - reliability
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
  - promotion
formats:
  - case
followUps:
  - How would you prevent old and new versions from overwriting each other during dual writes?
  - What evidence would justify switching the read path?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
