---
questionId: bulk-a-language-compiler-optimization-observable
kind: question
status: published
locale: en
title: Compiler Optimizations and Observable Behavior
question: "Choose a programming language and memory model you know. A compiler may reorder or eliminate code: which program behavior may it change, and which externally observable behavior must it preserve? Explain with a concurrency or I/O example."
intent: Tests compiler-optimization boundaries and awareness of language memory models.
signals:
  - "Names the language and the relevant language-defined observable semantics or memory-model rules."
  - "Uses a concrete concurrency or side-effect example to show which transformations are allowed and which would change the program’s observable behavior."
  - "Distinguishes source order from machine-instruction order and avoids claiming that one language’s guarantees apply to all languages."
primaryCapability: professional.computer-science
topics:
  - compiler-design
  - programming-languages
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
formats:
  - knowledge
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
