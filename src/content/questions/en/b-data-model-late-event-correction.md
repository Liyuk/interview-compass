---
questionId: b-data-model-late-event-correction
kind: question
status: published
locale: en
title: >-
  Mobile events may arrive days late, while reports must reflect event time. How would you model and process
  late, corrected, and duplicate events?
question: >-
  Mobile events may arrive days late, while reports must reflect event time. How would you model and process
  late, corrected, and duplicate events?
intent: >-
  Assess whether you distinguish event time from processing time and account for replay, deduplication, and
  historical correction.
signals:
  - Records client event time, receipt time, stable IDs, and timestamp confidence separately.
  - Explains deduplication and linkage under offline repetition, reordering, and device changes.
  - Defines late windows, corrections, reversals or replacements, and recalculation scope.
  - Compares revised and frozen reports, marking versions and stability conditions.
  - Reconciles multi-day uploads, duplicates, and corrections against reported results.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - engineering-systems
roles:
  - data
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - case
followUps:
  - If device clocks are substantially skewed, which ordering conclusions remain reliable?
  - How would you prevent offline events from triggering irreversible side effects after account deactivation?
source:
  - attribution: inspired
    label: Dataskew 数据工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
relatedQuestions: []
---
