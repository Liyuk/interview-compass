---
questionId: wave18-design-005
kind: question
status: published
locale: en
title: How would you decide whether a shared component should expand or fork?
question: A shared component already has many variants, and a new use case requests another special state. How would you weigh reuse, complexity, accessibility, and maintenance?
intent: Assess how the response evaluates component boundaries and design-system governance costs, makes constraints explicit, and uses evidence to justify a decision.
signals:
  - "Reviews how many variants exist, how often each is used, and whether requests represent stable needs or one-off exceptions."
  - "Compares extending the shared component with a separate component by API complexity, accessibility behavior, and testing burden."
  - "Checks whether current consumers can adopt a change safely and whether a fork would duplicate maintenance or block needed variation."
  - "Sets a reuse or complexity threshold and names who will review component health and migration cost over time."
primaryCapability: delivery.decomposition
topics:
  - product-thinking
  - execution
roles:
  - design
  - product
  - engineering
  - frontend
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
source:
  - attribution: original
    label: Interview Compass coverage-led original expansion batch 2026-10-17 C
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
