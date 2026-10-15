---
questionId: design-accessibility-submit-recovery-priority
kind: question
status: published
locale: en
title: How do you decide whether to release a core flow that some assistive-technology users cannot recover?
question: >-
  A new form improves overall completion, but screen-reader users cannot locate invalid fields and keyboard users lose
  entered data. The team says few people are affected. What release gate would you set?
intent: Assess whether you include task criticality, accessibility, and error recovery in release risk.
signals:
  - "Check whether users can complete the core task across abilities, devices, and workflow stages."
  - "Assess failure impact, recoverability, and which users the evidence represents."
  - "Compare a fix, staged release, or goal change, and state who bears any remaining exclusion risk."
  - "Define release blockers, alternate paths, and retest criteria."
primaryCapability: value-direction.product-judgment
topics:
  - accessibility
  - product-thinking
  - risk-management
roles:
  - design
  - product
  - frontend
  - engineering
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
  - case
  - planning
followUps:
  - How do you balance automated audits with tests by real users?
  - How should a rare but impossible critical task be evaluated?
  - >-
    A checkout redesign improves average completion speed but makes the task harder for keyboard and screen-reader
    users. The team says the affected share is small and reverting will delay the quarterly goal. How would you assess
    the issue, choose an option, and explain priority?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
---
