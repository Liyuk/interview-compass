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
  - Defines event ID, event time, and ingestion time
  - Explains lateness windows, idempotent writes, and recomputation scope
  - Handles corrections by replacing or reversing prior records
  - States when reports stabilize and how revisions are marked
  - Records client occurrence time, server receipt time, and the trust source for each.
  - Assigns stable identity for offline ordering, duplicate submission, and device provenance.
  - >-
    Defines whether offline actions before or after an authorization change are accepted, rejected, or
    reviewed.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - engineering-systems
roles:
  - data
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
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
