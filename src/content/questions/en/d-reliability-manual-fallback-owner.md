---
questionId: d-reliability-manual-fallback-owner
kind: question
status: published
locale: en
title: How do you keep a manual fallback from becoming permanent after automation fails?
question: >-
  An automated approval service stops, and operations moves to a spreadsheet to contain user impact. Two weeks
  later the service is still down, and the spreadsheet has inconsistent access and audit records. How would
  you govern the fallback, restore automation, and set exit conditions?
intent: >-
  Assess whether you can keep emergency handling bounded while managing risk, service recovery, and retirement
  of the temporary mechanism.
signals:
  - Quantifies manual capacity, error, access, and audit risks and defines scope
  - Names the automation recovery owner, dependencies, checkpoints, and escalation conditions
  - Sets reconciliation, migration, and closure criteria and verifies no work is stranded afterward
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
followUps:
  - If restoring automation could harm users again, what low-volume validation would you use?
  - How would you reconcile spreadsheet entries that are complete, duplicated, or have unknown status?
---
