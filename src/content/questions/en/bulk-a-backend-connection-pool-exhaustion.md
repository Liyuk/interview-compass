---
questionId: bulk-a-backend-connection-pool-exhaustion
kind: question
status: published
locale: en
title: Diagnosing Connection-Pool Exhaustion
question: >-
  API latency rises while database CPU remains low, and application logs show connection waits. How would you
  distinguish connection leaks, an undersized pool, and slow transactions holding connections?
intent: Tests connection-pool lifecycle knowledge and cross-layer diagnosis.
signals:
  - Aligns latency, connection waits, active and idle connections, and transaction duration.
  - >-
    Tests acquisition, release, and long transactions against competing leak, capacity, and query
    hypotheses.
  - >-
    Budgets total connections against downstream capacity and compares pool growth, limiting, queueing,
    and lifecycle fixes.
  - >-
    Uses controlled load and scaling to verify waits, errors, and downstream safety beyond temporary
    recovery.
primaryCapability: professional.debugging
topics:
  - backend
  - databases
  - computer-networks
  - reliability
roles:
  - backend
  - engineering
  - ai-engineer
  - data
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
  - >-
    【Why can scaling out make connection-pool exhaustion worse?】After adding application instances, total
    database connections exceed the limit and queues and timeouts rise together. How would you redesign
    connection budgets and overload behavior?
  - How should tenants share the connection budget?
  - What metric should trigger rejection of new requests?
relatedQuestions: []
---
