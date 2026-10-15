---
questionId: bulk-a-incident-recovery-validation
kind: question
status: published
locale: en
title: Validating recovery after an incident
question: >-
  A data-write incident has stopped and service metrics look normal, but users still report missing
  records. How would you organize recovery validation and follow-up communication?
intent: Examine ownership for data integrity, user impact, and recovery evidence after containment.
signals:
  - Separates service recovery, data repair, and user-issue closure
  - Defines sampling, reconciliation, or replay to establish data completeness
  - Explains audiences, update cadence, and remaining unknowns
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - operations
  - risk-management
roles:
  - engineering
  - operations
  - manager
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: 原创：事故恢复验证与用户影响闭环
---
