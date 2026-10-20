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
  - 【What configuration should instances use when a feature-flag control plane fails?】When the control plane is unavailable, some services hold stale config while new instances have none. A flag controls high-risk writes. How would you define local cache, defaults, and failure behavior?
  - Which flags should not depend on live access to a central control plane?
  - How do you verify an emergency disable takes effect within its target window?
  - 【A new feature depends on a remote feature-flag service, but when its control plane is unavailable, user requests block too. How would you design defaults, caching, and an emergency kill path?】A new feature depends on a remote feature-flag service, but when its control plane is unavailable, user requests block too. How would you design defaults, caching, and an emergency kill path?
  - If one tenant must disable a risky feature immediately while others continue, how would you isolate configuration?
  - How would you verify that a config-service failure cannot block the whole site or trigger a cascade?
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
