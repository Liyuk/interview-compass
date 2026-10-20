---
questionId: a-system-design-cross-system-consistency
kind: question
status: published
locale: en
title: "How do you handle partial failure when syncing a database with a cache or message consumer?"
question: "The local database has updated, but syncing the cache or sending a downstream message fails. How would you make the systems converge and handle retries, compensation, or manual recovery?"
intent: See how you actually handle cross-system consistency and whether you can state the preconditions and costs of each approach rather than reciting names.
signals:
  - Defines dual-write failure windows and business invariants along commit-send timelines.
  - Compares outbox, transactional messages, retries, and compensation by prerequisites and cost.
  - Explains reconciliation, deduplication, recovery, and remaining stop or manual paths.
  - >-
    Experience claims need personal evidence; hypothetical cases state assumptions and validation without
    invented experience.
primaryCapability: professional.system-design
topics: [system-design, distributed-systems, databases, backend]
roles:
  - backend
  - engineering
  - ai-engineer
  - data
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [case, system-design]
followUps:
  - You used Redis for a distributed lock, and on a primary-replica switch the lock was lost. Did you consider that case?
  - The downstream receives a duplicate message. How do you make sure it is not processed twice?
source:
  - attribution: original
    label: "The author's leveled interview framework, mid-level engineer"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
