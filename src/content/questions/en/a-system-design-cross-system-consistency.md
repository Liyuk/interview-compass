---
questionId: a-system-design-cross-system-consistency
kind: question
status: published
locale: en
title: After updating the local database you must also sync a cache or message downstream. How do you keep both sides consistent, and what is the fallback if one step fails?
question: In one task, after updating the local database you must also sync a cache or send a message downstream. How do you ensure the two operations end up consistent, and how do you fall back and compensate when network jitter makes one step fail?
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
