---
questionId: bulk-a-code-concurrent-expiring-map
kind: question
status: published
locale: en
title: A Concurrent Expiring Map
question: >-
  Implement a map with concurrent reads and writes, per-entry expiration, and expired-entry cleanup. How would you
  define expiration semantics, synchronization boundaries, and deterministic tests?
intent: Tests concurrent data structures, time abstraction, and testability.
signals:
  - Defines visibility when reading an expired entry
  - Prevents races between the shared map and cleanup worker
  - Uses an injected clock for tests without real-time waiting
  - Forms testable technical hypotheses from inputs, mechanisms, and failure symptoms
  - Compares implementation paths and their correctness, performance, security, or maintenance cost
  - Names tests or operational measures that cover edge cases
primaryCapability: professional.coding-abstraction
topics:
  - concurrency
  - programming-languages
  - backend
  - frontend
  - data-structures
roles:
  - engineering
  - backend
  - frontend
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
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
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - >-
    If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit
    first?
  - >-
    If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit
    date?
  - If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
  - >-
    If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you
    define?
  - >-
    If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the
    trade-offs?
  - >-
    Should reading an expired entry renew it? How would you define observable behavior when deletion races with expiry
    cleanup?
---
