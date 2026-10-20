---
questionId: bulk-a-virtual-memory-isolation
kind: question
status: published
locale: en
title: Virtual Memory and Process Isolation
question: >-
  Two processes both access address 0x1000. Why do they usually not read or write the same physical
  memory? Explain the address translation and operating-system responsibilities.
intent: >-
  Tests whether the candidate can connect virtual addresses, page tables, and process isolation as
  one mechanism.
signals:
  - Distinguishes virtual from physical addresses
  - Explains the role of page tables or address translation
  - Identifies hardware and the operating system as joint maintainers of isolation
primaryCapability: professional.computer-science
topics:
  - operating-systems
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
