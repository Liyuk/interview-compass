---
questionId: bulk-a-language-compiler-optimization-observable
kind: question
status: published
locale: en
title: Compiler Optimizations and Observable Behavior
question: >-
  A compiler may reorder or eliminate code. Which program behavior may it change, and which
  externally observable behavior must it preserve? Explain with a concurrency or I/O example.
intent: Tests compiler-optimization boundaries and awareness of language memory models.
signals:
  - Explains that optimization must preserve language-defined observable semantics
  - Uses a concurrency or side-effect example to explain the boundary
  - Does not equate source order with machine-instruction order
primaryCapability: professional.computer-science
topics:
  - compiler-design
  - programming-languages
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
