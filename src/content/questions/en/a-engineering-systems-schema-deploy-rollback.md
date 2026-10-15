---
questionId: a-engineering-systems-schema-deploy-rollback
kind: question
status: published
locale: en
title: >-
  The application can be rolled back, but a database migration removed an old field and the previous version can no
  longer start. How would you redesign release order and rollback?
question: >-
  The application can be rolled back, but a database migration removed an old field and the previous version can no
  longer start. How would you redesign release order and rollback?
intent: >-
  Assess whether you understand compatibility windows across application and data changes, and why rollback does not
  restore every state.
signals:
  - "Use expand-and-contract stages so old and new application versions can coexist with the schema."
  - "Define when to stop rollout, disable a feature, roll back, or fix forward after a migration failure."
  - "Use rehearsals and monitoring to verify rollback, data repair, and recovery paths."
  - "Name the approver, risk owner, and containment boundary for irreversible changes."
primaryCapability: professional.engineering-systems
topics:
  - devops
  - databases
  - reliability
  - operations
  - risk-management
roles:
  - engineering
  - backend
  - data
  - operations
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
  - system-design
  - case
  - behavioral
followUps:
  - >-
    A release changes the data model. Reverting the application is quick, but the old version cannot read newly written
    fields. How would you design rollout gates and recovery steps?
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 C
---
