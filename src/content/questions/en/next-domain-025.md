---
questionId: next-domain-025
kind: question
status: published
locale: en
title: How should pricing rules work across effective time zones?
question: A promotion starts at local midnight, services run in UTC, and customers may move regions. How would you represent effective time and handle boundary invoices?
intent: Assesses time semantics, rule versions, and reproducible billing.
signals:
  - Separate absolute time, business time zone, and date boundaries.
  - Persist the region and rule version used for application.
  - Test daylight-saving transitions, migration, and replay.
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
roles:
  - product
  - product
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
  - How should an existing cycle behave when a customer changes region?
  - How would you explain an invoice difference caused by one hour?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
