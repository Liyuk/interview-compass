---
questionId: next-delivery-047
kind: question
status: published
locale: en
title: What if a runbook step has opposite effects in different regions?
question: The same remediation command has different effects in two regions, but the runbook describes only the default topology. Responders may use it in the wrong environment. How would you revise and prevent recurrence?
intent: Assesses applicability, safeguards, and verification for procedural operations.
signals:
  - Mark environment prerequisites and potential impact.
  - Add preflight checks, permission confirmation, and safe aborts.
  - Exercise the procedure across actual topologies.
primaryCapability: delivery.operational-execution
topics:
  - operations
  - risk-management
roles:
  - operations
  - engineering
  - backend
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - Which steps should be automated to reduce human selection errors?
  - How can local differences be preserved without forking the runbook?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
