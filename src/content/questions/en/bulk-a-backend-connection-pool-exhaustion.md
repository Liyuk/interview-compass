---
questionId: bulk-a-backend-connection-pool-exhaustion
kind: question
status: published
locale: en
title: Diagnosing Connection-Pool Exhaustion
question: API latency rises while database CPU remains low, and application logs show connection waits. How would you distinguish connection leaks, an undersized pool, and slow transactions holding connections?
intent: Tests connection-pool lifecycle knowledge and cross-layer diagnosis.
signals:
  - Inspects active/idle connections and wait time
  - Checks connection-return paths and transaction duration
  - Uses load and pool metrics to tell whether increasing capacity would mask the cause
primaryCapability: professional.debugging
topics:
  - backend
  - databases
  - computer-networks
  - reliability
roles:
  - backend
  - engineering
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
  - debugging
  - case
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - 【Why can scaling out make connection-pool exhaustion worse?】After adding application instances, total database connections exceed the limit and queues and timeouts rise together. How would you redesign connection budgets and overload behavior?
  - How should tenants share the connection budget?
  - What metric should trigger rejection of new requests?
---
