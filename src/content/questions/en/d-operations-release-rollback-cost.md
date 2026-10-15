---
questionId: d-operations-release-rollback-cost
kind: question
status: published
locale: en
title: How do you plan release containment when rollback could lose user data?
question: >-
  A release changes the data model. Reverting the application is quick, but the old version cannot read newly
  written fields. How would you design rollout gates and recovery steps?
intent: Assess whether you plan code rollback together with data compatibility, write isolation, and recovery ownership.
signals:
  - Analyze read/write compatibility while old and new versions coexist.
  - Define options to stop rollout, disable the feature, reverse migration, or repair data.
  - Validate recovery drills, monitoring signals, and decision ownership.
primaryCapability: delivery.operational-execution
topics:
  - operations
  - reliability
  - risk-management
roles:
  - operations
  - engineering
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps:
  - Which migrations require a staged expand-and-contract approach?
  - If lossless rollback is impossible, how do you obtain explicit business risk acceptance?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 C
---
