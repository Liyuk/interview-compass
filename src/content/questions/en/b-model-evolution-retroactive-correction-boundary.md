---
questionId: b-model-evolution-retroactive-correction-boundary
kind: question
status: published
locale: en
title: >-
  A business rule is corrected retroactively. Reports need corrected results, while decision-makers
  also need the results available at the time. How would you manage both historical views?
question: >-
  A business rule is corrected retroactively. Reports need corrected results, while decision-makers
  also need the results available at the time. How would you manage both historical views?
intent: >-
  Assess whether you distinguish valid facts, later corrections, and decision-time snapshots while
  clarifying recomputation and audit boundaries.
signals:
  - Separates event time, rule-effective time, record time, and correction time.
  - Defines the relationship and use cases among original, recomputed, and decision-time results.
  - Provides audit records for versions, reasons for differences, and affected scope.
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - risk-management
  - metrics
roles:
  - data
  - product
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - >-
    If a correction affects only some customers or periods, how would you avoid changing unrelated
    history through a full recomputation?
  - >-
    Which users should default to the latest value, and which must retain the version they saw at
    the time?
---
