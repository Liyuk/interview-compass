---
questionId: a-monorepo-cyclic-dependency-boundary
kind: question
status: published
locale: en
title: >-
  Two product packages form a dependency cycle, and splitting them creates a need to share domain types. How
  would you change the boundaries without hiding the cycle in a new shared package?
question: >-
  Two product packages form a dependency cycle, and splitting them creates a need to share domain types. How
  would you change the boundaries without hiding the cycle in a new shared package?
intent: >-
  Assesses whether you can identify dependency direction and domain ownership, and verify that an abstraction
  is genuinely stable.
signals:
  - Trace runtime and type dependencies in the cycle
  - Identify which business context owns shared types
  - Compare inversion, interface packages, or merging boundaries
  - Add static rules that prevent cycles from returning
  - Analyzes responsibilities through reasons for change and ownership
  - Explains testing and release problems created by dependency cycles
  - Proposes stable interfaces or evidence for redrawing boundaries
primaryCapability: professional.engineering-systems
topics:
  - monorepo
  - engineering-systems
  - devops
roles:
  - engineering
  - frontend
  - backend
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
  - When is merging two packages better than splitting further?
  - How would you stop a shared package from becoming an unbounded dumping ground?
source:
  - attribution: original
    label: Interview Compass 原创主题补充批次：Monorepo
  - attribution: inspired
    label: System Design Primer — requirements, constraints, and trade-offs
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
relatedQuestions: []
---
