---
questionId: bulk-a-language-async-cancellation
kind: question
status: published
locale: en
title: Propagation of Asynchronous Cancellation
question: >-
  A request starts several parallel tasks, but downstream work continues consuming resources after the client
  disconnects. Explain how cancellation should propagate and which resources need cooperative cleanup.
intent: Tests async-runtime cancellation semantics and resource lifecycles.
signals:
  - Distinguishes a cancellation request from forced termination
  - Traces parent/child task or cancellation-token propagation
  - Accounts for cleanup and operations that cannot be cancelled
  - Explain cancellation propagation boundaries and task ownership.
  - Set deadlines, isolation, and cleanup for operations that ignore cancellation.
  - Verify that cancellation leaves no leaks or duplicate side effects.
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - concurrency
  - reliability
roles:
  - engineering
  - backend
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - knowledge
  - debugging
  - behavioral
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - >-
    【How do you prevent work from running forever when cancellation signals are lost?】A request starts several parallel
    tasks. The client disconnects, but some downstreams ignore cancellation. How would you design timeouts, cleanup, and
    resource reclamation?
  - How should cancellation be represented if an external write completed but its response did not return?
  - How would you prove cleanup covers abnormal exits?
---
