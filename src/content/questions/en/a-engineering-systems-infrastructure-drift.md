---
questionId: a-engineering-systems-infrastructure-drift
kind: question
status: published
locale: en
title: Investigating and safely recovering from infrastructure drift
question: >-
  Some production resources differ from their declared configuration, including undocumented emergency fixes.
  How would you distinguish intentional changes from unknown drift, assess the risk of overwriting state,
  restore trust, and prevent recurrence?
intent: >-
  Examines how you reconnect live state, configuration sources, change rationale, and operational ownership
  while avoiding a second failure during recovery.
signals:
  - Separates intentional changes, emergency fixes, and unknown drift
  - Avoids blindly overwriting resources that may hold important data
  - Reconciles verified state into code and assesses impact
  - Improves approval, detection, and emergency change capture
primaryCapability: professional.engineering-systems
topics:
  - devops
  - reliability
  - engineering-systems
roles:
  - engineering
  - backend
responsibilityScopes:
  - team
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
---
