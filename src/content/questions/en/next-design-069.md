---
questionId: next-design-069
kind: question
status: published
title: How do you decide when to extend a rigid design-system component?
question: >-
  Several product teams override shared component styles with CSS, causing frequent regressions after
  upgrades. How would you choose between adding configuration, splitting the component, or keeping exceptions?
intent: Assesses shared-abstraction boundaries, usage evidence, and maintenance cost.
signals:
  - Count real variants and common reasons for overrides.
  - Compare configuration complexity with component-fork cost.
  - Validate governance through upgrade cost and consistency outcomes.
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - engineering-systems
roles:
  - design
  - frontend
  - engineering
  - mobile
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
formats:
  - case
followUps:
  - Which needs should remain at the product layer?
  - How can you detect an API that only serves one exception?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
locale: en
---
