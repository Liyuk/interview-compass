---
questionId: a-engineering-systems-credential-rotation
kind: question
status: published
locale: en
title: >-
  A long-lived credential is shared by several services. Security requires prompt rotation, but all dependents
  cannot be stopped at once. How would you proceed?
question: >-
  A long-lived credential is shared by several services. Security requires prompt rotation, but all dependents
  cannot be stopped at once. How would you proceed?
intent: See whether you map dependencies and plan an overlap period, verification, and revocation.
signals:
  - Inventories credential holders, permission scope, call paths, and last-used time
  - Plans a brief overlap, staged cutover, and verification sequence for old and new credentials
  - Revokes the old credential only after consumers have migrated and checks for residual use
  - Distinguishes routine rotation from emergency rotation after a leak and prepares recovery or containment
primaryCapability: professional.engineering-systems
topics:
  - devops
  - security
  - reliability
roles:
  - engineering
  - backend
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - planning
  - case
followUps:
  - If some consumers cannot upgrade together, how would you stage migration and set the revocation gate?
  - If a credential is known to be exposed, which steps should happen in parallel or earlier?
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: DevOps Interview Questions：安全与基础设施管理
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
relatedQuestions: []
---
