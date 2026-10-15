---
questionId: bulk-b-data-04
kind: question
status: published
locale: en
title: >-
  A store backfills historical sales. Should reports show the original record or the latest
  correction?
question: >-
  Stores may enter sales several days late and correct product attribution or amount. Reports must
  show the currently accepted result and explain what users saw on a historical date. How would you
  model this?
intent: >-
  See whether the candidate separates event time, arrival time, and business-recognition time to
  support different query purposes.
signals:
  - Distinguishes occurrence time, ingestion time, and correction effective time
  - Preserves revision history and defines how the current accepted value is derived
  - Explains when historical restatement and as-of snapshots answer different questions
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - operations
roles:
  - data
  - operations
  - product
  - engineering
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
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：数据质量与变化记录主题
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
