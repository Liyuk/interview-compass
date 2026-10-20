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
  - Defines expiry, read visibility, and ordering among updates and cleanup.
  - >-
    Compares synchronization or partitioning by correctness, throughput, and maintenance with explicit
    invariants.
  - Uses controlled clocks and scheduling to test expiry-update and cleanup races.
  - Checks reclamation, shutdown, and actual memory bounds.
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
  - ai-engineer
responsibilityScopes:
  - individual
  - team
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
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - "Should reading an expired entry renew it, and how would callers observe an entry that expires during a read?"
  - "What should happen when deletion races with expiration cleanup, and which invariant would your test assert?"
  - "How would you demonstrate that expired entries are eventually reclaimed and memory remains bounded under sustained writes?"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
