---
questionId: bulk-a-code-incremental-parser
kind: question
status: published
locale: en
title: Boundary design for an incremental parser and large log streams
question: >-
  Implement an incremental UTF-8 log parser that receives chunks which may split multibyte characters, reorder fields,
  contain multiple records, or include an exceptionally long line. Define parser state, error recovery, and memory
  limits, then implement repeatable core logic.
intent: Examines incremental parsing, state modeling, error recovery, and resource-boundary design.
signals:
  - Defines cross-block state, field order, character decoding, and record-end contracts.
  - Handles split multibyte characters, multiple records, empty chunks, and end-of-input.
  - Compares termination and recovery with bounded long-line and buffer costs.
  - >-
    Tests chunk variations, truncation, malformed records, and repeated calls for consistent results and
    locations.
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - compiler-design
  - backend
  - frontend
  - concurrency
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
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - "How should the parser handle a multibyte UTF-8 character split across chunks and report its source position?"
  - "When a malformed or truncated record is found, what recovery rule preserves later records without inventing data?"
  - "What limit should apply to an unusually long line, and how should cancellation release buffers and the input resource?"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
