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
  - Defines line iteration, fatal versus recoverable errors, and whether partial results are usable.
  - Preserves accurate diagnostics such as line number, field error, and input encoding.
  - Uses large files, truncated input, malformed rows, and cancellation to verify memory bounds and cleanup.
  - Retain source spans and expansion relationships for values.
  - Separate syntax, reference, and type errors.
  - Map diagnostics back to original user input.
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - engineering-systems
  - reliability
roles:
  - backend
  - data
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
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - If a rule needs neighboring rows, how can you avoid reloading all input?
  - If the caller cancels mid-read, who closes the underlying file or network resource?
  - If the compressed input expands unexpectedly, how do you cap CPU and disk use?
  - How should parsing support cancellation, timeouts, and backpressure?
  - How do you prevent recursive overflow on long reference chains?
  - How should diagnostics show values derived from multiple sources?
relatedQuestions: []
---
