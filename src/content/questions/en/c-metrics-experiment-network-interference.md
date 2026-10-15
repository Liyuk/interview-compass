---
questionId: c-metrics-experiment-network-interference
kind: question
status: published
locale: en
title: How do you interpret an experiment when treatment can affect control users?
question: >-
  A feature encourages invitations, so inviters and friends may land in different experiment groups. Results are
  significant, but spillover cannot be fully isolated. How would you assess the conclusion?
intent: Assess whether you identify interference, randomization units, and network effects in causal inference.
signals:
  - Describe the interference mechanism and likely direction of bias.
  - Check randomization unit, exposure, and cross-group spillover.
  - Consider cluster experiments or sensitivity analysis and state limits.
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
roles:
  - data
  - product
  - marketing
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
  - If the experiment cannot be repeated, what analysis can help?
  - How would you include long-term network effects in guardrails?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
---
