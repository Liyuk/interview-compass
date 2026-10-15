---
questionId: bulk-b-model-evolution-01
kind: question
status: published
locale: en
title: A service changes from a free trial to a conditional refund. How should old orders be interpreted?
question: >-
  The commercial rule for a service changes from a free trial to a refund after conditions are met,
  while historical orders were signed under the old terms. How would you evolve the model and
  workflow so both old and new transactions remain explainable?
intent: >-
  See how the candidate handles the relationship among changing domain rules, historical facts, and
  current execution logic.
signals:
  - Associates a rule version with the terms in effect when a transaction occurred
  - Separates historical recalculation, remediation, and logic for future transactions
  - Plans a compatible migration and explains how to validate accounting and business meaning
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - commercialization
  - risk-management
roles:
  - product
  - data
  - engineering
  - operations
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
  - planning
source:
  - attribution: inspired
    label: Interview Compass 领域建模研究：概念演进与历史可解释性
    url: >-
      https://github.com/Liyuk/interview-compass/blob/main/docs/planning/2026-10-14-content-architecture-mece.md
---
