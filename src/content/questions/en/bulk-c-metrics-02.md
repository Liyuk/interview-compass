---
questionId: bulk-c-metrics-02
kind: question
status: published
locale: en
title: Several marketing channels reach the same users. How would you estimate incremental contribution?
question: >-
  Brand advertising, search, and affiliate channels reach overlapping prospects, while the attribution
  platform assigns most conversions to the last click. How would you estimate each channel’s incremental
  contribution and state the limits of the conclusion?
intent: >-
  Assess whether the candidate distinguishes attribution allocation from causal incrementality and chooses
  evidence suited to the decision.
signals:
  - >-
    Clarify whether the decision allocates credit, evaluates budgets, or estimates incrementality;
    attribution allocation is not causal contribution.
  - Check audience overlap, exposure order, windows, spillovers, and selection bias.
  - >-
    Compare feasible controls, experiments, or robustness checks by cost and limits without assuming one
    method always identifies the truth.
  - State uncertainty, unidentified effects, and evidence that would change the budget recommendation.
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
  - operations
roles:
  - marketing
  - operations
  - data
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: inspired
    label: 品牌与增长面试工具：渠道组合与营销效果衡量
    url: https://github.com/coryjburk/intv-playbook-marketing_brand-growth/
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C
followUps:
  - If randomization is unavailable, which quasi-experimental designs could still help?
  - How would you prevent channel optimization from relabeling organic conversions as paid?
relatedQuestions: []
perspectiveReview: inferred
qualityTier: extended
perspective: candidate
---
