---
questionId: next-delivery-096
kind: question
status: published
locale: en
title: How do you set continuity goals when a critical vendor has no SLA?
question: The business depends on a third-party API with no formal SLA and inconsistent support. How would you set internal continuity goals and fallback options?
intent: Assesses dependency risk, internal controls, and vendor governance.
signals:
  - Set internal availability and recovery goals based on business impact.
  - Assess caching, degradation, alternate workflows, and data compensation.
  - Use incident evidence in contract and vendor decisions.
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - risk-management
roles:
  - engineering
  - operations
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
  - promotion
formats:
  - case
followUps:
  - Which operations must stop instead of using stale information?
  - How should data reconciliation be tested after vendor recovery?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
