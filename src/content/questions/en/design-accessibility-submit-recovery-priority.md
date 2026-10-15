---
questionId: design-accessibility-submit-recovery-priority
kind: question
status: published
locale: en
title: How do you decide whether to release a core flow that some assistive-technology users cannot recover?
question: >-
  A new form improves overall completion, but screen-reader users cannot locate invalid fields and keyboard users
  lose entered data. The team says few people are affected. What release gate would you set?
intent: Assess whether you include task criticality, accessibility, and error recovery in release risk.
signals:
  - Verify whether users can complete the core task and recover from failure.
  - Identify affected technology combinations and data-loss risk.
  - Define blocking conditions, alternatives, and validation criteria.
primaryCapability: value-direction.product-judgment
topics:
  - accessibility
  - product-thinking
roles:
  - design
  - product
  - frontend
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
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
---
