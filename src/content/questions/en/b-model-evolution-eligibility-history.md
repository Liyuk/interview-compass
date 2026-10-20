---
questionId: b-model-evolution-eligibility-history
kind: question
status: published
locale: en
title: How do you explain past eligibility after the rules change?
question: >-
  A service changes eligibility from “current account status” to “account status at application time plus a
  risk-review result.” Support needs to explain historical denials, and audit must reproduce the original
  decision. How would you evolve rules and data models without conflating old and new outcomes?
intent: >-
  Assess whether you model rule changes, event-time facts, and current state separately while preserving
  historical explainability.
signals:
  - Defines rule versions, effective times, facts visible at decision time, and audit sources
  - Separates recomputing a historical decision from displaying the result recorded at that time
  - >-
    Plans compatible migration, historical replay, and sampled reconciliation, including when to retire the
    old definition
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - commercialization
  - execution
roles:
  - product
  - engineering
  - data
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
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
followUps:
  - >-
    If older applications lack the risk result available at the time, how would you represent what cannot be
    reproduced?
  - Which changes require a new rule version, and which only correct input data?
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
