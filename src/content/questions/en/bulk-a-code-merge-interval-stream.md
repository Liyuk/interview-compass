---
questionId: bulk-a-code-merge-interval-stream
kind: question
status: published
locale: en
title: Dynamic and streaming interval merging
question: >-
  Implement a data structure that continuously receives closed intervals, merges overlapping or adjacent intervals, and
  supports queries for the current interval count and ordered result. Input may be partially ordered, exceed memory, and
  arrive slightly late. How would you define merge rules, lateness bounds, memory limits, and query consistency?
intent: >-
  Assesses whether you can turn dynamic updates, out-of-order input, bounded memory, and query requirements into
  explicit invariants and a verifiable implementation.
signals:
  - Defines whether adjacent intervals merge and clarifies endpoint semantics
  - Defines a lateness bound or watermark for partially ordered input and behavior beyond it
  - Maintains ordered, non-overlapping state and explains memory bounds
  - Tests empty input, nesting, overlap, late arrivals, and query consistency
  - Forms testable technical hypotheses from inputs, mechanisms, and failure symptoms
  - Compares implementation paths and their correctness, performance, security, or maintenance cost
  - Names tests or operational measures that cover edge cases
primaryCapability: professional.coding-abstraction
topics:
  - data-structures
  - programming-languages
  - backend
  - frontend
  - concurrency
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
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - If late data can arrive arbitrarily far in the past, how would you change the online merge and query contract?
  - When a memory limit is reached, which results would you retain or where would you persist state?
  - >-
    If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit
    first?
---
