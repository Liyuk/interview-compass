---
questionId: bulk-a-backend-idempotency-key-scope
kind: question
status: published
locale: en
title: Scope and Lifetime of Idempotency Keys
question: >-
  A payment-creation API must support safe client retries. How would you define the idempotency-key scope,
  retention period, and conflict behavior to avoid duplicate charges without suppressing valid requests?
intent: Tests boundary design for API idempotency semantics.
signals:
  - Defines the key scope across callers and business operations
  - Accounts for concurrent requests and result replay semantics
  - Specifies behavior for expiry, conflicts, or key reuse with a different request body
primaryCapability: professional.system-design
topics:
  - backend
  - distributed-systems
roles:
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
