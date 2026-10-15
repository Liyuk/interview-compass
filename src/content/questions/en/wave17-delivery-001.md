---
questionId: wave17-delivery-001
kind: question
status: published
locale: en
title: How should a plan reflect capacity when one role has a single owner?
question: A release depends on the only engineer familiar with billing, who also carries incident duty. How would you model capacity, buffer, and knowledge risk?
intent: Assesses whether the candidate includes single-owner and interruption risk instead of planning from nominal headcount.
signals:
  - Accounts for non-parallel expertise, on-call load, and handoff cost
  - Provides backup, buffer, or scope-adjustment options for the dependency
  - Clarifies the facts, stakeholders, and ownership boundaries involved in backup readiness and rehearsal for single-owner expertise.
  - Uses verifiable examples to explain the reasoning, outcome, and relevant learning.
primaryCapability: delivery.capacity-planning
topics:
  - resource-allocation
  - planning
  - execution
roles:
  - pmo
  - engineering
  - manager
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
  - planning
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
  - attribution: original
    label: Interview Compass coverage-led original expansion batch 2026-10-17 C
followUps:
  - One engineer owns the only release script and must support other projects. How would you plan rehearsal, documentation, and operational backup?
---
