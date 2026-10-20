---
questionId: d-incident-first-hour
kind: question
status: published
locale: en
title: The first hour of a widespread outage
question: A production service suddenly fails widely. In what order do you act during the first hour?
intent: See how you contain first and diagnose second under incomplete information, and keep decision makers informed.
signals:
  - >-
    Verify impact and safety boundaries, mitigating reversibly within authority or guidance; escalate
    promptly when unauthorized or uncertain.
  - >-
    Preserve evidence and investigate in parallel without delaying necessary containment for an
    explanation or equating containment with blind rollback.
  - >-
    Separate facts, hypotheses, and unknowns, confirming coordination, technical execution, business
    risk, and communication responsibilities.
  - >-
    Update affected parties on an explicit cadence, explaining options, costs, and deadlines needing
    authorized decisions.
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - risk-management
  - communication
  - debugging
roles:
  - engineering
  - backend
  - mobile
  - ai-engineer
  - pmo
  - frontend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
  - debugging
source:
  - attribution: derived
    label: 'Management retrospective: eight judgments from execution to systems'
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/management-retrospective/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
