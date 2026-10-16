---
questionId: b-model-evolution-retroactive-correction-boundary
kind: question
status: published
locale: en
title: >-
  A business rule is corrected retroactively. Reports need corrected results, while decision-makers also need
  the results available at the time. How would you manage both historical views?
question: >-
  A business rule is corrected retroactively. Reports need corrected results, while decision-makers also need
  the results available at the time. How would you manage both historical views?
intent: >-
  Assess whether you distinguish valid facts, later corrections, and decision-time snapshots while clarifying
  recomputation and audit boundaries.
signals:
  - Separates event, ingestion, rule-effective, discovery, and correction times and affected periods.
  - Preserves original results, as-known snapshots, and restatements with explicit reader purposes.
  - >-
    Records versions, reasons, approval grounds, differences, and dependencies without rewriting decision
    evidence.
  - >-
    Recalculates in batches with difference checks, resource limits, rollback, external-action
    protection, and notices.
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
  - senior-manager
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
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：数据质量与变化记录主题
    url: https://github.com/dataskew-io/data-engineering-interview-questions
followUps:
  - >-
    If a correction affects only some customers or periods, how would you avoid changing unrelated history
    through a full recomputation?
  - Which users should default to the latest value, and which must retain the version they saw at the time?
  - >-
    An upstream fix corrects an error affecting the past two years of data, and the business wants corrected
    results quickly. How would you backfill without disrupting current production reports?
  - >-
    After a feature definition is fixed, the modeling team wants a historical backfill. Training
    reproducibility requires the original version, while business reports want corrected values. How would you
    design both views?
  - >-
    A tax configuration error is discovered. Finance wants corrected historical reports, while support must
    explain invoices as customers saw them. How would you preserve restated and as-was views?
  - If old results were materially wrong, how would you balance historical authenticity and correction?
  - How should later trend analysis select a version and remain comparable?
relatedQuestions: []
---
