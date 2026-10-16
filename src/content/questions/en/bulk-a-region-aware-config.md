---
questionId: bulk-a-region-aware-config
kind: question
status: published
locale: en
title: Region-aware configuration and data boundaries
question: >-
  A global service must enable different features and retention rules by region while headquarters
  still needs an overall operational view. How would you divide configuration, enforcement, and
  aggregation?
intent: >-
  Examine coordination among regional differences, configuration governance, data residency, and
  global observability.
signals:
  - Identifies data that must stay regional versus operational metrics that can be aggregated
  - Explains configuration sources, change authority, and regional activation timing
  - Considers defaults and audit responsibility during cross-region failures
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - security
roles:
  - backend
  - engineering
  - product
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - multiple-teams
  - organization
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
    label: System Design Primer：跨区域系统设计
    url: https://github.com/donnemartin/system-design-primer
---
