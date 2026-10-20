---
questionId: a-engineering-systems-credential-rotation
kind: question
status: published
locale: en
title: >-
  A long-lived credential is shared by several services. Security requires prompt rotation, but all dependents cannot be
  stopped at once. How would you proceed?
question: >-
  A long-lived credential is shared by several services. Security requires prompt rotation, but all dependents cannot be
  stopped at once. How would you proceed?
intent: See whether you map dependencies and plan an overlap period, verification, and revocation.
signals:
  - >-
    Inventories holders, permissions, paths, and usage, distinguishing routine rotation from suspected
    compromise.
  - >-
    Compares overlapping credentials, staged migration, and immediate revocation with risk and business
    costs.
  - Defines issuance, acceptance, migration, and revocation using actual usage evidence.
  - >-
    Tests lagging clients, emergency blocking, and failure recovery without re-enabling compromised
    credentials.
primaryCapability: professional.quality-security-safety
topics:
  - devops
  - security
  - reliability
  - engineering-systems
roles:
  - engineering
  - backend
  - ai-engineer
  - data
responsibilityScopes:
  - multiple-teams
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - planning
  - case
followUps:
  - "If a credential is confirmed compromised, which rotation steps should happen immediately, even before the full migration plan?"
  - "How would clock skew or delayed clients affect the overlap window and revocation gate?"
  - "What evidence proves every consumer switched, and what safe recovery remains if one does not?"
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: DevOps Interview Questions：安全与基础设施管理
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
