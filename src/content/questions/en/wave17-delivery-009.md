---
questionId: wave17-delivery-009
kind: question
status: published
locale: en
title: Rollback restores service but may lose newly written data. How do you choose?
question: >-
  A release breaks reads, but the previous version cannot read the new data format. How would you contain impact and
  compare rollback, forward fix, and a compatibility layer?
intent: Assesses whether the candidate makes an explicit choice across recovery speed, data integrity, and migration risk.
signals:
  - Evaluates format compatibility, writes, and recovery time
  - States containment, verification, and irreversible risks
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - risk-management
roles:
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
---
