---
questionId: bulk-c-metrics-03
kind: question
status: published
locale: en
title: An experiment improves the primary metric while complaints and refunds rise. How would you evaluate it?
question: >-
  A checkout experiment improves payment completion, but complaints and refunds also increase. How would you
  judge whether the experiment succeeded, and how long would you wait before deciding?
intent: "Assess whether you decide what to do when an experiment improves its primary metric but worsens refunds and complaints based on risk and outcome maturity, rather than significance alone or assuming every concurrent change is causal."
signals: ["Validate definitions, denominators, task severity, random assignment, and sample representativeness for checkout, refunds, and complaints.", "Separate experiment effects from user/order mix and alternatives such as seasonality; inspect counts and rates by amount and people.", "Account for lagging refunds, duplicate charges, and trust loss, assessing whether the sample is mature enough.", "Use pre-set risk guardrails to continue, limit, pause, or roll back, with an owner and observation deadline."]
weakAnswer: "Continuing because checkout completion is statistically significant while ignoring severity and lag of complaints/refunds, randomization quality, and stop authority."
anchors:
  notPassing: "Compares only the primary metric before and after without checking data quality or harms."
  passing: "Validates assignment and primary/guardrail metrics and proposes a lag window."
  excellent: "Analyzes sample, severity, alternatives, and delayed outcomes and chooses release status using explicit risk rules."
  exceptional: "Quantifies tail-risk trade-offs, designs reversible rollout and monitoring triggers with owners, and states what new evidence changes the decision."
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
  - risk-management
roles:
  - product
  - data
  - operations
  - marketing
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
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: derived
    label: 指标分级：先服务最重要的决策
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-tiers-prioritize-decisions/zh.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
followUps: ["If complaints are rare but each involves high amounts or duplicate charges, how would you set the guardrail?", "If refunds may still rise after the experiment ends, how would you decide whether to resume a full rollout?"]
relatedQuestions: []
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
