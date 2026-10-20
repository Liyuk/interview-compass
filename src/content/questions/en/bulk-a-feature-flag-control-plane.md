---
questionId: bulk-a-feature-flag-control-plane
kind: question
status: published
locale: en
title: Feature-flag control plane
question: Several services read feature flags and audience rules on request paths. How would you design the control plane and local evaluation so behavior remains predictable when the control service fails?
intent: Explore the relationship between control-plane updates, data-plane evaluation, and emergency changes.
signals:
  - Separates rule publication from request-time evaluation and their failure domains
  - Explains how propagation delay and defaults are chosen according to risk
  - Considers rule versions, auditability, rollback, and high-cardinality audiences
primaryCapability: professional.system-design
topics:
  - system-design
  - reliability
  - devops
  - security
roles:
  - backend
  - engineering
  - product
  - frontend
  - mobile
  - ai-engineer
  - data
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
  - operations-review
formats:
  - system-design
  - case
source:
  - attribution: inspired
    label: System Design Primer：缓存、可用性与故障隔离
    url: https://github.com/donnemartin/system-design-primer
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - "For a high-risk write flag, what should an existing instance and a new instance do when the control plane is unavailable?"
  - "Which flag types can safely use stale local configuration, and which require fail-closed behavior?"
  - "How would you verify an emergency disable reaches every relevant instance within its target window?"
  - "How can one tenant disable a risky feature without blocking unaffected tenants or the whole request path?"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
