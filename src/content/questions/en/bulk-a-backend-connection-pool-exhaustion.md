---
questionId: bulk-a-backend-connection-pool-exhaustion
kind: question
status: published
locale: en
title: Diagnosing Connection-Pool Exhaustion
question: >-
  API latency rises while database CPU remains low, and application logs show connection waits. How
  would you distinguish connection leaks, an undersized pool, and slow transactions holding
  connections?
intent: Tests connection-pool lifecycle knowledge and cross-layer diagnosis.
signals:
  - Inspects active/idle connections and wait time
  - Checks connection-return paths and transaction duration
  - Uses load and pool metrics to tell whether increasing capacity would mask the cause
primaryCapability: professional.debugging
topics:
  - backend
  - databases
roles:
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
  - debugging
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
