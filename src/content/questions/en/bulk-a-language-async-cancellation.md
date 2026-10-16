---
questionId: bulk-a-language-async-cancellation
kind: question
status: published
locale: en
title: How do you stop async work after a client disconnects?
question: >-
  A request starts several async tasks. After the client disconnects or the request times out, some downstream
  work still uses threads and connections. How would you propagate cancellation and release those resources?
intent: Assess understanding of asynchronous cancellation, task ownership, and resource-cleanup boundaries.
signals:
  - Distinguishes timeout, cancellation, and normal task completion.
  - Explains how cancellation propagates through parent tasks and service calls.
  - Identifies boundaries such as shared work, non-interruptible operations, and completed side effects.
  - Explains cleanup and how to verify cancellation leaves no leaked work or repeated side effects.
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - concurrency
  - reliability
roles:
  - engineering
  - backend
  - mobile
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
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
followUps:
  - If a downstream operation ignores cancellation, how would you limit the resources it can keep using?
  - If an external write completed but its response was lost, what should cancellation mean?
  - How would you verify cleanup also runs after abnormal exits?
relatedQuestions: []
---
