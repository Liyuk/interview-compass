---
questionId: c-metrics-experiment-network-interference
kind: question
status: published
locale: en
title: How do you interpret an experiment when treatment can affect control users?
question: >-
  A feature encourages invitations, so inviters and friends may land in different experiment groups. Results
  are significant, but spillover cannot be fully isolated. How would you assess the conclusion?
intent: Assess whether you identify interference, randomization units, and network effects in causal inference.
signals:
  - >-
    Reconstruct inviter and friend allocation, exposure, and propagation, identifying cross-group
    influence.
  - >-
    Separate significance, propagation, and business effects, stating whether bias direction is
    identifiable and under what assumptions.
  - >-
    Compare assignment units, cluster or time designs, and sensitivity checks without assuming
    interference can always be removed.
  - >-
    State interpretable conclusions, residual uncertainty, and next validation with experience
    guardrails.
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
roles:
  - data
  - product
  - marketing
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
followUps:
  - If the experiment cannot be repeated, what analysis can help?
  - How would you include long-term network effects in guardrails?
  - How can assignment affect content supply?
  - How would you judge whether cluster-experiment sample size is sufficient?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
