---
questionId: a-coding-abstraction-performance-pitfalls
kind: question
status: published
locale: en
title: When writing code and reviewing it, what habits do you have to avoid performance pitfalls?
question: When writing code and reviewing it, what checks have become habit for avoiding performance problems such as querying a database inside a loop or holding large objects too long? How do you know they actually work?
intent: See whether you have turned common performance traps into your own habits of checking and can verify them with data rather than optimizing by feel.
signals:
  - Lists concrete checkpoints, such as queries inside loops, batching and paging, object lifetime, and caching
  - Says which specific past problem each habit came from, not only a generic list
  - Says how they are caught in review and testing, for example by looking at query counts and load tests
  - Knows when not to optimize early and can say on what basis
primaryCapability: professional.coding-abstraction
topics: [backend, databases, programming-languages]
roles:
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [behavioral, case]
followUps:
  - Roughly what are the daily requests, the peak, and the average response time of the module you own?
  - After a table grows tenfold, what do you worry about first?
source:
  - attribution: original
    label: "The author's leveled interview framework, mid-level engineer"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
