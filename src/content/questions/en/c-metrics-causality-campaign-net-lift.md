---
questionId: c-metrics-causality-campaign-net-lift
kind: question
status: published
locale: en
title: Estimating campaign lift amid simultaneous product changes
question: >-
  Retention rose during a marketing campaign, and the team credits the channel, but a new product flow also launched and
  participants may already have been more active. How would you establish a credible comparison, estimate the campaign’s
  net lift, and state the limits of the conclusion?
intent: >-
  Examines how you separate correlation from causal impact when several changes occur at once, choose a credible
  comparison, and calibrate the strength of growth evidence.
signals:
  - Defines target users, outcome measures, observation window, and guardrails
  - Identifies confounders such as a concurrent product change, selection bias, and natural trends
  - Compares an experiment, quasi-experiment, or other credible comparison and states assumptions and limits
  - Sets evidence-based triggers to continue, adjust, expand, or stop investment
  - Clarifies target users, intended outcomes, and guardrails that must not worsen
  - Separates behavioral correlation, causal evidence, and untested assumptions
  - Defines triggers for scaling, changing, or stopping investment
primaryCapability: value-direction.metrics-causality
topics:
  - growth-experiments
  - metrics
  - operations
  - product-discovery
roles:
  - operations
  - marketing
  - product
  - data
responsibilityScopes:
  - team
  - multiple-teams
  - organization
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
  - promotion
  - hiring
formats:
  - case
  - planning
source:
  - attribution: original
    label: Original to this site
  - attribution: derived
    label: Liyuk 博客：产品判断、Top-K 与规划方法；题目为本站重新组织
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2024/02/top-k-thinking/zh.md
followUps:
  - If random assignment is unavailable, what evidence would you use to estimate lift and what uncertainty would remain?
  - If leading indicators improve but business outcomes do not, would you continue, adjust, or stop?
---
