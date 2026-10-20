---
questionId: d-pmo-correlated-dependency-escalation
kind: question
status: published
locale: en
title: When should shared platform dependencies trigger a portfolio decision?
question: >-
  Five projects flag the same platform dependency as a possible delay, yet each remains green. What evidence
  would tell you to change the portfolio instead of following up project by project?
intent: Assess whether you aggregate shared dependency risk and turn it into resource and decision actions.
signals:
  - "Maps the shared dependency, projects’ critical-path dates, and confidence in each delivery estimate."
  - "Quantifies correlated portfolio exposure—value at risk, shared capacity, and which outcomes fail together."
  - "Sets an observable trigger for portfolio action, such as dependency slippage or aggregate capacity shortfall, and names the decision owner."
  - "Compares reprioritization or scope options and records the impact, owners, and review checkpoints."
primaryCapability: delivery.project-management
topics:
  - planning
  - execution
  - risk-management
roles:
  - pmo
  - manager
  - product
  - engineering
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
formats:
  - case
  - planning
followUps: ["How can a shared status table avoid hiding that projects use different estimation methods?","Which dependency dates or effort estimates are most uncertain?","If a dependency slips, which projects need portfolio-level reprioritization?"]
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
