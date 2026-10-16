---
questionId: bulk-a-code-deterministic-task-scheduler
kind: question
status: published
locale: en
title: A Deterministic Task Scheduler
question: >-
  Implement a small task queue with concurrent workers, cancellation, and retries; tests must not depend on real sleeps.
  How would you design the scheduling interface and state transitions?
intent: Tests concurrent task abstraction, state machines, and testable design.
signals:
  - "Define queued, running, succeeded, failed, cancelled, and closed states and valid transitions."
  - "Handle races between cancellation and start, and between retry and shutdown."
  - "Explain concurrency limits, backpressure, error propagation, and resource cleanup."
  - "Isolate the clock and scheduler so tests are repeatable without real waiting."
primaryCapability: professional.coding-abstraction
topics:
  - concurrency
  - data-structures
  - programming-languages
roles:
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - coding
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - >-
    Design and implement a task pool that caps concurrency, supports cancellation, and does not abandon work already
    started during shutdown.
---
