---
questionId: bulk-a-gc-pause-latency
kind: question
status: published
locale: en
title: Garbage Collection and Tail Latency
question: >-
  A service has stable average latency but periodic p99 spikes near allocation peaks. How would you determine
  whether garbage collection is responsible and distinguish it from other pauses?
intent: Tests runtime memory management and tail-latency evidence analysis.
signals:
  - Relates allocation rate, collection cycles, and pause records
  - Does not treat temporal correlation as proof of causation
  - Proposes evidence that separates GC from scheduling, I/O, or lock waits
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - backend
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
  - case
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
relatedQuestions: []
---
