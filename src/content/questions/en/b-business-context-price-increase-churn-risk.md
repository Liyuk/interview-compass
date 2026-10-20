---
questionId: b-business-context-price-increase-churn-risk
kind: question
status: published
locale: en
title: How do you judge a price increase when revenue rises but core customers churn?
question: >-
  After a subscription price increase, monthly revenue rises 8%, but cancellations grow among small core customers.
  Sales wants to continue. How would you estimate net benefit and long-term risk?
intent: "Assess whether you evaluate price-driven revenue alongside churn, retention cost, and long-term value on a consistent horizon, making a decision that later evidence can revise."
signals: ["Clarify whether revenue growth comes from price, customer count, plan migration, or billing-cycle changes; segment by size, contract, and usage.", "Estimate net value after lost customer contribution, retention discounts, support costs, and potential bad debt instead of comparing monthly revenue alone.", "Identify causal evidence for price-related churn, customer alternatives, and delays created by renewal cycles.", "Compare legacy pricing, segmented increases, and entitlement changes with fairness guardrails and pre-set review points."]
weakAnswer: "Treating short-term monthly revenue growth after the increase as success while ignoring customer segments, renewal lag, retention discounts, and lost contribution."
anchors:
  notPassing: "Looks only at price and aggregate revenue, without segmentation or renewal timing."
  passing: "Segments revenue and churn and includes at least one retention cost or observation-window consideration."
  excellent: "Estimates net contribution over a defined horizon, separates correlation from causal evidence, and presents alternatives and guardrails."
  exceptional: "Combines leading proxies, mature renewal outcomes, and sensitivity ranges; defines adjustment thresholds and tests fairness and long-term value of differentiated pricing."
primaryCapability: value-direction.market-economic-judgment
topics:
  - commercialization
  - metrics
  - product-thinking
  - business-planning
roles:
  - product
  - marketing
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps: ["Before renewal windows mature, which leading evidence would support a provisional decision, and what would remain unknown?", "If churn concentrates among small customers with strategic value, how would you establish whether differentiated terms are worthwhile?"]
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 J
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
