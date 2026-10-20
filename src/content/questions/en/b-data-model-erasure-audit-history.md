---
questionId: b-data-model-erasure-audit-history
kind: question
status: published
locale: en
title: >-
  A user asks to have personal data deleted, while finance must retain transaction records for audit. How
  would you define the boundary among deletion, anonymization, and traceability?
question: >-
  A user asks to have personal data deleted, while finance must retain transaction records for audit. How
  would you define the boundary among deletion, anonymization, and traceability?
intent: >-
  Assess whether you express data purpose, sensitivity, retention basis, and deletion propagation rather than
  treating deletion as one database operation.
signals:
  - >-
    Classifies identity, transaction, derived, and audit data by purpose, sensitivity, and verified
    retention grounds.
  - Compares erasure, anonymization, and restricted retention without universal assumptions.
  - Traces cache, analytical, backup, and downstream handling with owners, timing, and recovery.
  - >-
    Verifies completed scope, pending copies, and exceptions while preventing unauthorized restoration or
    reuse.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - security
  - risk-management
  - databases
  - distributed-systems
roles:
  - data
  - engineering
  - product
  - backend
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - multiple-teams
  - organization
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
  - operations-review
formats:
  - case
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - "If backups cannot be rewritten immediately, how would you prevent restored data from returning to production?"
  - "What evidence would show that anonymized records cannot be reidentified through linked data?"
  - "How would you track deletion completion across source data, caches, analytics, and downstream copies?"
  - "Which verified retention requirements justify retaining a restricted transaction record, and for how long?"
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
