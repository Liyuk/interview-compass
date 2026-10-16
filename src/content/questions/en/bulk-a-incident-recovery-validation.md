---
questionId: bulk-a-incident-recovery-validation
kind: question
status: published
locale: en
title: Validating recovery after an incident
question: >-
  A data-write incident has stopped and service metrics look normal, but users still report missing records. How would
  you organize recovery validation and follow-up communication?
intent: Examine ownership for data integrity, user impact, and recovery evidence after containment.
signals:
  - "Distinguish service restoration, data repair, and resolution of affected user cases."
  - "Use reconciliation, sampling, or replay to verify data integrity and repair scope."
  - "Communicate affected users, known facts, unknowns, and the update cadence."
  - "Assign owners, deadlines, and verification evidence to recurrence-prevention work."
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - operations
  - risk-management
  - execution
roles:
  - engineering
  - operations
  - manager
  - pmo
  - frontend
  - backend
  - mobile
  - ai-engineer
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
  - promotion
  - operations-review
formats:
  - case
  - behavioral
source:
  - attribution: original
    label: 原创：事故恢复验证与用户影响闭环
  - attribution: derived
    label: 'Management retrospective: eight judgments from execution to systems'
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/management-retrospective/zh.md
  - attribution: derived
    label: 'Use your own product: building a real feedback loop'
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/05/use-your-own-product-feedback-loop/zh.md
  - attribution: inspired
    label: Engineering Decision Skills (eng-reporting method)
    url: https://github.com/Liyuk/engineering-decision-skills
followUps:
  - >-
    An incident is resolved. How do you confirm the risk of recurrence really dropped, rather than just that a fix was
    made?
---
