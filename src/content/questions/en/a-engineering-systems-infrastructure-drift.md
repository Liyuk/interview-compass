---
questionId: a-engineering-systems-infrastructure-drift
kind: question
status: published
locale: en
title: "How do you safely restore production when live configuration differs from code?"
question: >-
  Some production resources differ from their declared configuration, including undocumented emergency fixes. How would
  you distinguish intentional changes from unexplained differences, assess the risk of overwriting state, restore trust, and
  prevent recurrence?
intent: >-
  Examines how you compare live production settings with their declared configuration and understand why they differ while
  avoiding a second failure during recovery.
signals:
  - >-
    Compares declarations, actual state, and history to distinguish expected, emergency, and unknown
    changes.
  - Assesses overwrite effects on data and service before defining risk and stop conditions.
  - Compares import, correction, and gradual removal with costs and rollback evidence.
  - >-
    Verifies resource and service results and assigns detection, approval, and emergency write-back
    duties.
primaryCapability: professional.engineering-systems
topics:
  - devops
  - reliability
  - engineering-systems
roles:
  - engineering
  - backend
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
  - debugging
  - case
followUps:
  - What evidence would show that a difference was intentional?
  - How would non-rebuildable data change the order of import, repair, or removal?
  - After an emergency manual change, how would you reconcile declarations, approvals, and audit records?
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: DevOps Interview Questions：基础设施即代码
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
---
