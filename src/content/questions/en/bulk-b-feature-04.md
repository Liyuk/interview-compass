---
questionId: bulk-b-feature-04
kind: question
status: published
locale: en
title: >-
  A real-time feature will move from seconds to minutes. How would you judge whether the impact is
  acceptable?
question: >-
  An upstream dependency change will increase refresh latency for a costly feature set from seconds
  to ten minutes. How would you determine which decisions are affected, which features must remain
  real time, and when a fallback value is acceptable?
intent: >-
  Assess whether the candidate treats freshness as a business contract, balancing decision
  timeliness, reliability, and maintenance cost.
signals:
  - Maps feature consumers, decision cadence, and actual consequences of stale data
  - Sets freshness requirements by business impact rather than one technical standard
  - Defines fallback, alerting, and recovery conditions
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - metrics
  - risk-management
roles:
  - data
  - ai-engineer
  - product
  - operations
  - engineering
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：特征新鲜度、成本与业务价值
    url: https://github.com/dataskew-io/data-engineering-interview-questions
perspective: interviewer
perspectiveReview: inferred
qualityTier: extended
---
