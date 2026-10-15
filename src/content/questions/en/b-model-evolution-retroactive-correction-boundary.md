---
questionId: b-model-evolution-retroactive-correction-boundary
kind: question
status: published
locale: en
title: A business rule is corrected retroactively. Reports need corrected results, while decision-makers also need the results available at the time. How would you manage both historical views?
question: A business rule is corrected retroactively. Reports need corrected results, while decision-makers also need the results available at the time. How would you manage both historical views?
intent: Assess whether you distinguish valid facts, later corrections, and decision-time snapshots while clarifying recomputation and audit boundaries.
signals:
  - Distinguish event time, rule effective time, record time, and correction time.
  - Preserve original, corrected, and as-known-at-the-time results, with each use made explicit.
  - Record versions, correction reasons, impact scope, and downstream dependencies for replay and audit.
  - Backfill in slices and verify differences, resource impact, rollback, and downstream notification.
  - Defines effective time, discovery time, and affected scope
  - Supports replay by historical version while retaining correction rationale and approval evidence
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - risk-management
  - metrics
  - reliability
  - feature-modeling
  - ai-engineering
  - databases
  - engineering-systems
roles:
  - data
  - product
  - operations
  - backend
  - ai-engineer
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
  - individual
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
  - hiring
  - promotion
formats:
  - case
  - planning
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: inspired
    label: Dataskew 数据工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
followUps:
  - If a correction affects only some customers or periods, how would you avoid changing unrelated history through a full recomputation?
  - Which users should default to the latest value, and which must retain the version they saw at the time?
  - An upstream fix corrects an error affecting the past two years of data, and the business wants corrected results quickly. How would you backfill without disrupting current production reports?
  - After a feature definition is fixed, the modeling team wants a historical backfill. Training reproducibility requires the original version, while business reports want corrected values. How would you design both views?
  - A tax configuration error is discovered. Finance wants corrected historical reports, while support must explain invoices as customers saw them. How would you preserve restated and as-was views?
---
