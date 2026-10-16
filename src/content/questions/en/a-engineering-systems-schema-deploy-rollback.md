---
questionId: a-engineering-systems-schema-deploy-rollback
kind: question
status: published
locale: en
title: >-
  The application can be rolled back, but a database migration removed an old field and the previous version
  can no longer start. How would you redesign release order and rollback?
question: >-
  The application can be rolled back, but a database migration removed an old field and the previous version
  can no longer start. How would you redesign release order and rollback?
intent: >-
  Assess whether you understand compatibility windows across application and data changes, and why rollback
  does not restore every state.
signals:
  - Use expand-and-contract stages so old and new application versions can coexist with the schema.
  - Define when to stop rollout, disable a feature, roll back, or fix forward after a migration failure.
  - Use rehearsals and monitoring to verify rollback, data repair, and recovery paths.
  - Name the approver, risk owner, and containment boundary for irreversible changes.
  - List supported upgrade spans and data-format versions
  - Run recoverable migration on a copy or in a transaction
  - Validate constraints and critical user data before and after
  - Define failure recovery, old-version reads, and cleanup
  - Separates expansion and contraction phases
  - Considers combinations of old/new code and data shapes
  - Defines validation, cutover, and old-schema removal conditions
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
    A release changes the data model. Reverting the application is quick, but the old version cannot read
    newly written fields. How would you design rollout gates and recovery steps?
  - How would recovery work if the OS kills the app during migration?
  - How would you handle several skipped versions after a long delay?
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 C
  - attribution: original
    label: Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
relatedQuestions: []
---
