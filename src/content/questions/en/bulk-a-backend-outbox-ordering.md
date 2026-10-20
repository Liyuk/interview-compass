---
questionId: bulk-a-backend-outbox-ordering
kind: question
status: published
locale: en
title: Transactional Outbox and Message Ordering
question: >-
  After writing an order to a database, a service must publish an event downstream; the process may
  crash at either step. How would you design durable publication and handle duplicates and ordering?
intent: Tests consistency design across databases and messaging systems.
signals:
  - Identifies the dual-write window and crash boundaries
  - Proposes a transactional outbox or equivalent durable coordination
  - Defines the scope of downstream deduplication and ordering guarantees
primaryCapability: professional.system-design
topics:
  - backend
  - databases
  - distributed-systems
roles:
  - backend
  - engineering
  - ai-engineer
  - data
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
