---
questionId: bulk-a-debug-after-schema-rollout
kind: question
status: published
locale: en
title: Intermittent downstream failures after a schema rollout
question: >-
  After a database field change, only some downstream jobs fail intermittently. How would you
  identify consumers still using the old contract and decide between rollback and a compatibility
  fix?
intent: >-
  Examine contract dependency discovery, failure-sample localization, and evidence about
  reversibility.
signals:
  - Traces field consumers through queries, consumer inventories, or schema registries
  - Checks whether failures cluster in older jobs, caches, or backfills
  - Defines safe rollback conditions and how a compatibility fix would be verified
primaryCapability: professional.debugging
topics:
  - debugging
  - databases
  - reliability
roles:
  - backend
  - data
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: original
    label: 原创：渐进式数据库变更诊断
---
