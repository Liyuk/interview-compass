---
questionId: next-domain-024
kind: question
status: published
locale: en
title: What is authoritative when a snapshot disagrees with its event log?
question: A service rebuilds state from an event log, but the live snapshot differs and responders cannot tell which to repair. How would you define authority and the repair process?
intent: Assesses event sourcing, derived-state validation, and repair governance.
signals:
  - Clarify authority among appended events, snapshots, and external side effects.
  - Provide repeatable replay and divergence detection.
  - Audit manual corrections and protect rebuilds.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - operations
roles:
  - backend
  - data
  - engineering
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
  - How should out-of-order events be recovered?
  - How do you prevent external side effects from running again during replay?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
