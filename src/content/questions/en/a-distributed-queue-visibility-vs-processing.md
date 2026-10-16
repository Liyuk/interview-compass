---
questionId: a-distributed-queue-visibility-vs-processing
kind: question
status: published
locale: en
title: How do you locate a lost-event boundary when a queue shows acknowledgment but no result?
question: >-
  Producer logs show an event published and the broker acknowledged it. The consumer has no visible error, but
  the business object did not change. How would you distinguish acknowledgment semantics, dead letters,
  filters, deserialization, and duplicate handling?
intent: >-
  Assess whether you trace evidence through the message lifecycle and distinguish broker acknowledgment from
  business commit.
signals:
  - Correlate stable event IDs across production, broker, consumption, and business commit.
  - Check consumer offsets, dead letters, filters, and deserialization failures.
  - Clarify when acknowledgment occurs and verify replay is idempotent.
primaryCapability: professional.system-design
topics:
  - distributed-systems
  - reliability
  - operations
roles:
  - backend
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - debugging
followUps:
  - What happens if the consumer crashes after the business transaction but before offset commit?
  - How do you safely replay a years-old backlog?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
relatedQuestions: []
---
