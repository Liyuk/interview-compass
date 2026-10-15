---
questionId: a-programming-languages-ownership-transfer-async
kind: question
status: published
locale: en
title: >-
  After an async task starts, the caller immediately mutates an input object, and results sometimes
  change. How would you determine whether this is shared mutable state, copy semantics, or an
  ownership issue?
question: >-
  After an async task starts, the caller immediately mutates an input object, and results sometimes
  change. How would you determine whether this is shared mutable state, copy semantics, or an
  ownership issue?
intent: >-
  Assess whether you can explain how the runtime handles references across async boundaries and
  define clear state ownership.
signals:
  - Explains whether objects are copied by value, shared by reference, or transferred by ownership.
  - Locates race windows caused by concurrent reads and writes, closure capture, or lifetimes.
  - Compares immutable snapshots, deep copies, ownership transfer, and synchronization costs.
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - concurrency
  - debugging
roles:
  - mobile
  - backend
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
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - If the object is large and deep copying is expensive, what alternatives are available?
  - How can an API contract make clear who may mutate the object after the call?
---
