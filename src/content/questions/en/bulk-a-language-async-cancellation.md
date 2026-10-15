---
questionId: bulk-a-language-async-cancellation
kind: question
status: published
locale: en
title: Propagation of Asynchronous Cancellation
question: >-
  A request starts several parallel tasks, but downstream work continues consuming resources after
  the client disconnects. Explain how cancellation should propagate and which resources need
  cooperative cleanup.
intent: Tests async-runtime cancellation semantics and resource lifecycles.
signals:
  - Distinguishes a cancellation request from forced termination
  - Traces parent/child task or cancellation-token propagation
  - Accounts for cleanup and operations that cannot be cancelled
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - concurrency
roles:
  - engineering
  - backend
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
