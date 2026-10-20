---
questionId: a-coding-abstraction-streaming-validation
kind: question
status: published
locale: en
title: >-
  A very large CSV must be validated without loading the whole file into memory. On malformed rows, the tool
  should report line numbers and continue checking. How would you design the parser interface?
question: >-
  A very large CSV must be validated without loading the whole file into memory. On malformed rows, the tool
  should report line numbers and continue checking. How would you design the parser interface?
intent: >-
  Assess whether you balance memory, error aggregation, partial results, and caller responsibilities in a
  streaming design.
signals:
  - >-
    Defines streaming input, memory limits, error classes, and partial results, comparing continuation
    with termination.
  - Preserves record and field locations, encoding, and input links, including quoted newlines.
  - Separates parsing, validation, and consumption with cancellation, backpressure, errors, and cleanup.
  - >-
    Tests large inputs, split characters, truncation, malformed records, and cancellation against
    diagnostic and space limits.
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - engineering-systems
  - reliability
roles:
  - backend
  - data
  - engineering
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
  - coding
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - "If a CSV field or quoted record spans input chunks, how would the parser preserve correctness and line numbers?"
  - "When should the parser continue after a malformed row, and how should it report what it skipped?"
  - "If the caller cancels or compressed input expands unexpectedly, how do you release resources and cap memory and CPU?"
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
