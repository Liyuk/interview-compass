---
questionId: bulk-a-atomic-memory-ordering
kind: question
status: published
locale: en
title: Atomics and Memory Visibility
question: "Assume C++20: one thread writes a non-atomic payload and then stores `ready = true` with `memory_order_relaxed`; another thread observes `ready` with a relaxed load and reads the payload. Why is the atomic flag alone insufficient, and what synchronization would make the handoff safe?"
intent: "Assess whether the respondent distinguishes atomicity from inter-thread ordering and can explain the language-level rule that makes the payload write visible."
signals:
  - "Explains that relaxed atomic operations make the flag access atomic but do not create a synchronizes-with or happens-before relation for the payload."
  - "Identifies the unsynchronized non-atomic payload access as a data race under the stated C++ scenario."
  - "Proposes a correct release-store/acquire-load handoff or a mutex protecting both publication and reading."
  - "Explains how a concurrency test or sanitizer can help find errors while noting that test success alone does not prove correctness."
primaryCapability: professional.computer-science
topics:
  - concurrency
  - programming-languages
roles:
  - engineering
  - backend
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
formats:
  - knowledge
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
