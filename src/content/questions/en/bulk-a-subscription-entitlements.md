---
questionId: bulk-a-subscription-entitlements
kind: question
status: published
locale: en
title: Subscription entitlements
question: >-
  A subscription product includes trials, renewals, grace periods, refunds, and family sharing. How
  would you design entitlement checks so several services receive consistent, traceable results?
intent: >-
  See whether commercial rules, state changes, and downstream reads can be mapped into a clear
  model.
signals:
  - Separates subscription facts, payment facts, and the current entitlement projection
  - Explains sources, ordering, and historical traceability of state changes
  - Considers product behavior during brief inconsistency in caches or asynchronous projections
primaryCapability: professional.system-design
topics:
  - system-design
  - databases
  - commercialization
roles:
  - backend
  - product
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：数据模型与业务系统设计
    url: https://github.com/donnemartin/system-design-primer
---
