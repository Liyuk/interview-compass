---
questionId: bulk-a-feature-flag-control-plane
kind: question
status: published
locale: en
title: Feature-flag control plane
question: >-
  Several services read feature flags and audience rules on request paths. How would you design the
  control plane and local evaluation so behavior remains predictable when the control service fails?
intent: >-
  Explore the relationship between control-plane updates, data-plane evaluation, and emergency
  changes.
signals:
  - Separates rule publication from request-time evaluation and their failure domains
  - Explains how propagation delay and defaults are chosen according to risk
  - Considers rule versions, auditability, rollback, and high-cardinality audiences
primaryCapability: professional.system-design
topics:
  - system-design
  - reliability
  - devops
roles:
  - backend
  - engineering
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：缓存、可用性与故障隔离
    url: https://github.com/donnemartin/system-design-primer
---
