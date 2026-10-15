---
questionId: b-product-model-service-level-entitlement
kind: question
status: published
locale: en
title: How do you model service commitments with separate response and resolution clocks?
question: >-
  Enterprise contracts specify first response, service restoration, and final resolution times, each with different
  pause conditions. Support tracks one SLA timer, causing disputes. How would you model this?
intent: >-
  Assess whether you decompose service commitments into events, state machines, timing rules, and auditable
  evidence.
signals:
  - Separate response, restoration, and resolution commitments and their start/stop events.
  - Define pauses for customer wait, maintenance windows, and team handoffs.
  - Preserve policy versions, clock basis, and every state transition.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - commercialization
  - product-thinking
roles:
  - product
  - operations
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps:
  - If several commitments breach at once, how do you set escalation level?
  - How do you handle a customer challenge to a paused clock?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
---
