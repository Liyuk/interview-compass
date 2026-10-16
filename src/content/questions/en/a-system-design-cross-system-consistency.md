---
questionId: a-system-design-cross-system-consistency
kind: question
status: published
locale: en
title: "How do you handle partial failure when syncing a database with a cache or message consumer?"
question: "The local database has updated, but syncing the cache or sending a downstream message fails. How would you make the systems converge and handle retries, compensation, or manual recovery?"
intent: See how you actually handle cross-system consistency and whether you can state the preconditions and costs of each approach rather than reciting names.
signals:
  - Explains the chosen approach and its preconditions, such as write-then-publish order, transactional messages, or a local message table
  - Explains retries, idempotency, and compensation on failure, and how inconsistency is found and repaired
  - Points out in which extreme case the approach still fails and whether that is acceptable
  - Uses a concrete example they wrote or met, not only concepts
primaryCapability: professional.system-design
topics: [system-design, distributed-systems, databases, backend]
roles: [backend, engineering]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [case, system-design]
followUps:
  - You used Redis for a distributed lock, and on a primary-replica switch the lock was lost. Did you consider that case?
  - The downstream receives a duplicate message. How do you make sure it is not processed twice?
source:
  - attribution: original
    label: "The author's leveled interview framework, mid-level engineer"
---
