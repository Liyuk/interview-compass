---
questionId: d-reliability-manual-fallback-owner
kind: question
status: published
locale: en
title: After an automated service fails, how do you retire the temporary manual process?
question: >-
  An automated approval service stops working, so the operations team temporarily switches to a spreadsheet and
  limits user impact. Two weeks later, the service is still down, and the spreadsheet has inconsistent permissions
  and records. How would you manage the temporary process, restore automated approvals, and decide when to shut it down?
intent: >-
  Assess whether you can keep emergency handling bounded while managing risk, service recovery, and retirement
  of the temporary mechanism.
signals:
  - Quantifies manual capacity, error, access, and audit risks and defines scope
  - Names the automation recovery owner, dependencies, checkpoints, and escalation conditions
  - Sets reconciliation, migration, and closure criteria and verifies no work is stranded afterward
  - Collects frequency, impact, triggers, risk, and handling variation.
  - Clarifies the business rule and authorization boundary behind each exception.
  - Compares standardization, system changes, and human review by benefit and misclassification risk.
primaryCapability: delivery.operational-execution
topics:
  - operations
  - reliability
  - risk-management
roles:
  - operations
  - engineering
  - pmo
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C/D
followUps:
  - If restoring automation could harm users again, what low-volume validation would you use?
  - How would you reconcile spreadsheet entries that are complete, duplicated, or have unknown status?
relatedQuestions: []
---
