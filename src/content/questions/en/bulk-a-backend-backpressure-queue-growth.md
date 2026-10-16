---
questionId: bulk-a-backend-backpressure-queue-growth
kind: question
status: published
locale: en
title: Queue Growth and Backpressure
question: >-
  Consumers are slower than producers, so the message queue keeps growing while upstream requests
  still succeed. Where would you apply backpressure, and how would you protect recovery capacity?
intent: Tests queue stability, overload propagation, and backpressure mechanisms.
signals:
  - Explains queue growth through arrival and service rates
  - Identifies latency and memory risks of unbounded queues
  - Defines when to limit, reject, degrade, or scale consumers
primaryCapability: professional.system-design
topics:
  - backend
  - concurrency
roles:
  - backend
  - engineering
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
  - system-design
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
