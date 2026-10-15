---
questionId: next-cs-007
kind: question
status: published
locale: en
title: When does floating-point error become a business failure?
question: A service accumulates monetary values with floating-point numbers, and reconciliation drift grows over time. How would you identify the source and redesign calculations while migrating historical data?
intent: Assesses the relationship between numeric representation, rounding rules, and business invariants.
signals:
  - Identify accumulated error and rounding boundaries across systems.
  - Choose fixed-point or integer units and define currency precision.
  - Design historical recomputation, reconciliation, and gradual cutover.
primaryCapability: professional.computer-science
topics:
  - programming-languages
roles:
  - engineering
  - backend
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
  - How would you reproduce an invoice when tax or exchange rates change?
  - When should you retain original inputs instead of only the result?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
