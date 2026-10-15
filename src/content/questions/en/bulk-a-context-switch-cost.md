---
questionId: bulk-a-context-switch-cost
kind: question
status: published
locale: en
title: Context-Switching Costs
question: >-
  A service increases its worker threads from 16 to 256, but throughput does not improve and CPU use
  rises. How could context switching contribute, and what evidence would you use to verify it?
intent: Tests understanding of scheduling, saved execution state, and performance evidence.
signals:
  - Explains that switching saves and restores execution state
  - Distinguishes waiting threads from runnable contention
  - Names observable scheduling or performance evidence
primaryCapability: professional.computer-science
topics:
  - operating-systems
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
  - case
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
---
