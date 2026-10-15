---
questionId: bulk-a-code-bounded-retry-policy
kind: question
status: published
locale: en
title: Bounded retry policy with a deadline and cancellation
question: >-
  Implement a configurable retry wrapper with a maximum attempt count, backoff, an overall deadline,
  cancellable waits, and error-based retry classification. Explain what happens when cancellation races with
  the next attempt, and how tests avoid real waiting.
intent: >-
  Examines function abstraction, retry boundaries, deadline and cancellation semantics, and deterministic
  verification.
signals:
  - Defines whether the initial call counts as an attempt
  - Explains whether the deadline includes execution time and backoff waits
  - Prevents an unintended call when cancellation races with the next attempt
  - Controls backoff through an injectable clock or scheduler and defines the final error behavior
primaryCapability: professional.coding-abstraction
topics:
  - backend
roles:
  - engineering
  - backend
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
followUps:
  - >-
    If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you
    revisit first?
  - >-
    If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define
    an exit date?
  - >-
    If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you
    add first?
  - >-
    If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would
    you define?
  - >-
    If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance
    the trade-offs?
---
