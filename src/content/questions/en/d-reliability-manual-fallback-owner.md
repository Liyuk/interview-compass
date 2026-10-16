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
  - >-
    Define the temporary manual scope, capacity limits, permissions, and record ownership against current
    user impact.
  - >-
    Confirm technical recovery owners, dependencies, checkpoints, and escalation so the workaround does
    not become indefinite.
  - >-
    Reconcile temporary data, duplicate handling, and pending tasks, comparing automation recovery with
    continued manual work.
  - >-
    Close the workaround only after data migration, access removal, task takeover, and user validation
    leave no orphaned work.
primaryCapability: delivery.operational-execution
topics:
  - operations
  - reliability
  - risk-management
roles:
  - operations
  - engineering
  - pmo
  - frontend
  - backend
  - mobile
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
