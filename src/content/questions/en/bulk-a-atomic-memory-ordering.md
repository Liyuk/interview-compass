---
questionId: bulk-a-atomic-memory-ordering
kind: question
status: published
locale: en
title: Atomics and Memory Visibility
question: >-
  Two threads use a flag to signal that data is ready. Why might declaring only the flag atomic
  still fail to guarantee visibility of the data?
intent: Tests whether atomicity is distinguished from memory ordering and synchronization.
signals:
  - Separates atomic access from ordering across variables
  - Mentions happens-before or an equivalent synchronization relation
  - Explains the need for matching release/acquire semantics or a lock
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
