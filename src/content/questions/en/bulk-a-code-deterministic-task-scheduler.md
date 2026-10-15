---
questionId: bulk-a-code-deterministic-task-scheduler
kind: question
status: published
locale: en
title: A Deterministic Task Scheduler
question: >-
  Implement a small task queue with concurrent workers, cancellation, and retries; tests must not
  depend on real sleeps. How would you design the scheduling interface and state transitions?
intent: Tests concurrent task abstraction, state machines, and testable design.
signals:
  - Defines transitions among queued, running, succeeded, failed, and cancelled states
  - Isolates the clock and scheduler so tests can control them
  - Specifies deterministic rules when retries and cancellation race
primaryCapability: professional.coding-abstraction
topics:
  - concurrency
roles:
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - coding
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
