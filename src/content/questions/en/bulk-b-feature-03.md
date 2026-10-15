---
questionId: bulk-b-feature-03
kind: question
status: published
locale: en
title: >-
  Several models and reports use a core feature whose business definition has changed. How would you
  govern it?
question: >-
  Models, operational rules, and reports share a core feature, but the upstream business definition
  has changed and some consumers cannot migrate yet. How would you manage old and new definitions,
  ownership, and migration order?
intent: >-
  See how the candidate creates transparent compatibility and governance while allowing definitions
  to evolve without destabilizing consumers.
signals:
  - Identifies the business owner and the dependencies and criticality of each consumer
  - >-
    Distinguishes when to preserve the old definition, run versions in parallel, or require a
    cutover
  - Defines deprecation notices, compatibility periods, and evidence of migration completion
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - metrics
roles:
  - data
  - ai-engineer
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - promotion
formats:
  - case
  - planning
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：特征所有权与下游影响
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
