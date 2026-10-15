---
questionId: next-cs-010
kind: question
status: published
title: Why can scaling out make connection-pool exhaustion worse?
question: >-
  After adding application instances, total database connections exceed the limit and queues and timeouts rise together.
  How would you redesign connection budgets and overload behavior?
intent: Assesses evaluating per-instance resource settings against global capacity and feedback loops.
signals:
  - Calculate a global connection budget from instance count, concurrency, and downstream capacity.
  - Compare queuing, rejection, rate limiting, and connection reuse.
  - Verify scale-up and scale-down do not create oscillation.
primaryCapability: professional.computer-science
topics:
  - computer-networks
  - reliability
roles:
  - backend
  - engineering
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
  - How should tenants share the connection budget?
  - What metric should trigger rejection of new requests?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
locale: en
---
