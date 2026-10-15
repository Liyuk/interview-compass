---
questionId: bulk-a-cache-coherence-sharing
kind: question
status: published
locale: en
title: CPU Cache Coherence and Shared Writes
question: >-
  In a multicore program, two threads update different fields yet performance falls as core count
  rises. Explain how cache-line sharing could cause this and how you would verify it in code.
intent: Tests the relationship between hardware cache coherence and concurrent performance.
signals:
  - Recognizes cache lines as a common coherence granularity rather than individual fields
  - Identifies false sharing as a cause of repeated invalidation
  - Proposes layout changes or performance-counter evidence
primaryCapability: professional.computer-science
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
  - knowledge
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
---
