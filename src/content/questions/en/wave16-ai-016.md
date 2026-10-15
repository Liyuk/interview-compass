---
questionId: wave16-ai-016
kind: question
status: published
locale: en
title: What if deleted passages remain retrievable after vector-store deletion succeeds?
question: A user requests document deletion. Primary storage confirms it, but asynchronous indexes and caches still return old passages. How would you design deletion propagation and completion state?
intent: Assesses multi-replica deletion, visibility promises, and proof of asynchronous cleanup.
signals:
  - Inventory source, chunks, vectors, caches, and backups.
  - Separate request acceptance, retrieval suppression, and complete erasure.
  - Design retryable deletion events and sampled verification.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - data-modeling
roles:
  - ai-engineer
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
  - How can answers avoid citing old material during cleanup?
  - How should failed downstream deletion be alerted and compensated?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
