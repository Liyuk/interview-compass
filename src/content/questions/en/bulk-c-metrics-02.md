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
intent: "Assess whether you distinguish channel credit from causal incrementality, choose feasible evidence for the actual budget decision, and state overlap, spillover, and unidentified effects honestly."
signals: ["Clarify whether the decision allocates reporting credit, optimizes marginal spend, or asks if demand is incremental; these require different evidence.", "Check channel overlap, exposure order, attribution windows, organic demand, brand spillover, and user self-selection.", "Compare randomized holdouts, geo tests, and quasi-experiments by feasibility, contamination risk, cost, and identification assumptions.", "Report ranges and sensitivity, state population or time limits, and name evidence that would change the budget."]
weakAnswer: "Calling last-click or multi-touch allocation channel incrementality without validating overlap, organic conversion, or identification conditions."
anchors:
  notPassing: "Repeats platform attribution figures while conflating credit assignment with incrementality."
  passing: "Identifies channel overlap and selects an experiment or comparison relevant to the budget decision."
  excellent: "Checks assumptions and contamination and explains the incremental estimate, range, and population or time limits."
  exceptional: "Triangulates evidence for robustness, separates identified from unidentified effects, and ties budget changes to thresholds for follow-up validation."
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
followUps: ["If channels launch together and users move across them, how would you explain contamination of the experimental control?", "How would you tell leadership that an attribution model looks precise while causal conclusions remain limited?"]
relatedQuestions: []
perspectiveReview: "reviewed"
qualityTier: "core"
perspective: "candidate"

---
