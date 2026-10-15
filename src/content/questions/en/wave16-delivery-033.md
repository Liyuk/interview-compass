---
questionId: wave16-delivery-033
kind: question
status: published
locale: en
title: How should automated recovery be guarded when it might worsen an incident?
question: Monitoring automatically restarts unhealthy services, but this incident originates in a shared data layer and mass restarts could amplify connection storms. How would you bound automation?
intent: Assesses automation scope, feedback loops, and human takeover.
signals:
  - Identify failure classes that can be automated versus requiring judgment.
  - Limit action concurrency, rate, and repeat count.
  - Provide circuit breakers, pause controls, and drills.
primaryCapability: delivery.operational-execution
topics:
  - operations
  - reliability
roles:
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - How should automation report an unconfirmed result?
  - How do you prevent multiple controllers from repairing simultaneously?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
