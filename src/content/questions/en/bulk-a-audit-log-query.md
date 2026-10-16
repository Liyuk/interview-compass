---
questionId: bulk-a-audit-log-query
kind: question
status: published
locale: en
title: Audit-log query system
question: >-
  An admin console must retain operation records that cannot be casually altered, support queries by
  actor and object, and handle years of growth. How would you design writes, indexes, and retention?
intent: Examine trade-offs among audit semantics, query paths, storage cost, and tamper resistance.
signals:
  - Clarifies which actions must be recorded and what the record needs to establish
  - Separates append-only writes, query indexes, and long-term archival responsibilities
  - Discusses access control, integrity checks, retention windows, and export load
primaryCapability: professional.system-design
topics:
  - system-design
  - databases
  - security
roles:
  - backend
  - engineering
  - ai-engineer
  - data
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
    label: System Design Primer：数据存储与访问模式
    url: https://github.com/donnemartin/system-design-primer
---
