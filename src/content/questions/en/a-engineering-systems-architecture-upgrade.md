---
questionId: a-engineering-systems-architecture-upgrade
kind: question
status: published
locale: en
title: Why upgrade an architecture, and what challenges came up during the upgrade?
question: Tell me about an architecture upgrade. Why did it have to be upgraded rather than patched further, what challenges came up during migration, how did you keep the business running, and did the benefit materialize?
intent: See whether you can give a concrete motive and cost for an upgrade and manage risk during migration, rather than changing for the sake of novelty.
signals:
  - States the specific bottleneck of the existing architecture and why further patching was not enough
  - Describes staged migration, gray release, rollback, and running old and new in parallel
  - Explains how data consistency and business continuity were kept during migration
  - Checks afterwards whether the benefit materialized and is candid about what did not
primaryCapability: professional.engineering-systems
topics: [engineering-systems, system-design, risk-management]
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - manager
  - ai-engineer
  - data
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion, hiring]
formats: [behavioral, case]
followUps:
  - Halfway through you find the direction is wrong. How do you decide to continue or turn back?
  - How do you get the business to wait for an upgrade that adds no visible feature?
source:
  - attribution: original
    label: "The author's interview sequence, architecture upgrades"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
