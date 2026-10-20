---
questionId: bulk-a-incremental-data-migration
kind: question
status: published
locale: en
title: Online data-model migration
question: >-
  A high-traffic service must move a critical table to a new model without pausing reads or writes.
  How would you organize the migration stages and verify a safe cutover?
intent: Examine compatibility, data consistency, rollback windows, and completion criteria.
signals:
  - Breaks old/new read-write compatibility into observable stages
  - Explains how discrepancies are detected and repaired during dual writes or backfills
  - Defines evidence needed to cut over, roll back, and retire the old path
primaryCapability: professional.system-design
topics:
  - system-design
  - databases
  - distributed-systems
roles:
  - backend
  - engineering
  - data
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：数据迁移与演进
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
