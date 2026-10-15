---
questionId: a-coding-abstraction-streaming-validation
kind: question
status: published
locale: en
title: >-
  A very large CSV must be validated without loading the whole file into memory. On malformed rows,
  the tool should report line numbers and continue checking. How would you design the parser
  interface?
question: >-
  A very large CSV must be validated without loading the whole file into memory. On malformed rows,
  the tool should report line numbers and continue checking. How would you design the parser
  interface?
intent: >-
  Assess whether you balance memory, error aggregation, partial results, and caller responsibilities
  in a streaming design.
signals:
  - Defines line iteration, fatal versus recoverable errors, and whether partial results are usable.
  - Preserves accurate diagnostics such as line number, field error, and input encoding.
  - >-
    Uses large files, truncated input, malformed rows, and cancellation to verify memory bounds and
    cleanup.
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
followUps:
  - If a rule needs neighboring rows, how can you avoid reloading all input?
  - If the caller cancels mid-read, who closes the underlying file or network resource?
---
