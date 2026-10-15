---
questionId: bulk-a-debug-clock-skew
kind: question
status: published
locale: en
title: Out-of-order cross-service events
question: >-
  A reconciliation job finds that events for one business object are occasionally out of order,
  while logs span several regions. How would you distinguish clock skew, asynchronous delay, and a
  business-ordering rule?
intent: Explore how physical time, processing time, and business order are distinguished and diagnosed.
signals:
  - Checks the source of event, receipt, and processing timestamps
  - Looks for clock-sync skew and cross-service correlation identifiers
  - Explains which version or causal metadata should represent business order
primaryCapability: professional.debugging
topics:
  - debugging
  - distributed-systems
  - databases
roles:
  - backend
  - data
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: System Design Primer：分布式系统时序问题
    url: https://github.com/donnemartin/system-design-primer
---
