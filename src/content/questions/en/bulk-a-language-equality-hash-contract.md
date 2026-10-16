---
questionId: bulk-a-language-equality-hash-contract
kind: question
status: published
locale: en
title: Equality and Hashing Contracts
question: >-
  An object overrides equality but keeps the default hash implementation, causing failed lookups in
  a hash collection. Explain the equality/hash contract and how you would test it.
intent: Tests object contracts and correct use of hash-based collections.
signals:
  - States the consistent-hash requirement for equal objects
  - Identifies risks from mutable keys
  - Proposes equality, inequality, and collection round-trip tests
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - data-structures
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
scenarios:
  - interview
  - campus
  - hiring
formats:
  - knowledge
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
