---
questionId: bulk-a-debug-data-drift
kind: question
status: published
locale: en
title: Aggregates drift from detail records
question: >-
  Monthly aggregates initially match detail reports, but the gap grows over several weeks. How would
  you narrow the cause among definition changes, late data, duplicate processing, and historical
  backfills?
intent: >-
  See whether the candidate traces a reproducible sample and its lineage instead of patching the
  aggregate first.
signals:
  - Pins down discrepant samples and traces source events to aggregate output
  - Compares processing watermarks, deduplication keys, and definition versions
  - Explains how to backfill and verify that the affected scope has not expanded
primaryCapability: professional.debugging
topics:
  - debugging
  - data-modeling
  - reliability
roles:
  - data
  - backend
  - engineering
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
  - debugging
source:
  - attribution: original
    label: 原创：数据质量与生产问题定位
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
