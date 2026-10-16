---
questionId: d-operations-experiment-guardrails
kind: question
status: published
locale: en
title: Checkpoints and stop conditions for a live experiment
question: You are about to run a growth experiment in production. What checkpoints and stop conditions do you prepare first?
intent: See how you define what is measured before setting guardrails, an observation window, and stop conditions, and who can call a halt.
signals:
  - States the metric definition and guardrail metrics
  - Writes down stop or rollback conditions in advance
  - Names who has authority to stop it
primaryCapability: delivery.operational-execution
topics:
  - growth-experiments
  - metrics
  - operations
  - risk-management
roles:
  - marketing
  - operations
  - data
  - product
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
formats:
  - planning
  - case
source:
  - attribution: inspired
    label: 'Metrics guide (2): define the measurement before arguing about metrics'
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md
---
