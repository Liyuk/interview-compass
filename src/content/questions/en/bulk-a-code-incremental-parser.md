---
questionId: bulk-a-code-incremental-parser
kind: question
status: published
locale: en
title: Boundary design for an incremental parser and large log streams
question: >-
  Implement an incremental UTF-8 log parser that receives chunks which may split multibyte characters, reorder
  fields, contain multiple records, or include an exceptionally long line. Define parser state, error
  recovery, and memory limits, then implement repeatable core logic.
intent: Examines incremental parsing, state modeling, error recovery, and resource-boundary design.
signals:
  - Defines parser state retained across chunks and handling for reordered fields
  - Correctly handles character boundaries, multiple records, and end-of-input
  - Sets justified resource limits and a recovery strategy for oversized lines
  - Covers empty chunks, truncation, malformed input, and repeated calls with deterministic tests
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - compiler-design
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
  - coding
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
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
