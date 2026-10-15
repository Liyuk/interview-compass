---
questionId: wave16-delivery-069
kind: question
status: published
locale: en
title: What if an external outage is resolved but customer data may still be incomplete?
question: A third-party service has recovered, but callbacks may have been lost during the outage. Customer-visible state differs from the platform record. How would you confirm impact and communicate?
intent: Assesses dependency recovery, data compensation, and customer communication.
signals:
  - Reconcile event IDs and time ranges across both sides.
  - Build replay, reconciliation, and manual-confirmation paths.
  - State affected customers, recovery progress, and remaining uncertainty.
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - communication
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
  - How do you guard against duplicate effects during replay?
  - When can data recovery be declared complete?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
---
