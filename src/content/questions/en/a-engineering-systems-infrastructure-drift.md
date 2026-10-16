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
  - Separates intentional changes, emergency fixes, and unexplained configuration differences
  - Avoids blindly overwriting resources that may hold important data
  - Reconciles verified state into code and assesses impact
  - Improves approval, detection, and emergency change capture
  - Compares declared state, live state, and change records
  - Assesses whether overwriting drift could cause a second outage
  - Explains how to import, repair, or deliberately remove discrepancies
primaryCapability: professional.engineering-systems
topics:
  - devops
  - reliability
  - engineering-systems
roles:
  - engineering
  - backend
  - operations
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
