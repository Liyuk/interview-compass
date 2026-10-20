---
questionId: b-commercial-rules-promotion-stacking
kind: question
status: published
locale: en
title: How would you define rules for stacking promotions?
question: >-
  An order may use a membership discount, channel offer, and coupon, with exceptions by product, contract, or
  region. How would you define eligibility and calculation order so customers see a consistent amount and
  finance can reconcile refunds?
intent: >-
  Assess whether you can express promotion eligibility, stacking order, funding ownership, and settlement
  details as consistent, testable rules that can be explained to customers.
signals:
  - "Defines eligible products and customers, and distinguishes stackable from mutually exclusive offers."
  - "Specifies calculation order, equal-priority conflict handling, and rounding behavior."
  - "Records each offer’s funding owner and rule version so operations, support, and finance can explain the amount."
  - "Tests product, contract, and regional exceptions, including partial refunds and historical reconciliation."
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - risk-management
roles:
  - product
  - operations
  - backend
  - data
  - engineering
  - marketing
  - frontend
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
  - operations-review
  - promotion
formats:
  - case
followUps:
  - "How should equal-priority or contradictory rules be detected and resolved before release?"
  - "For a partial refund, how would you calculate the reversal for each discount and subsidy?"
  - "If a customer disputes an amount later, how would you reconstruct the calculation from the rule version active at purchase?"
source:
  - attribution: original
    label: Written from common e-commerce promotion rule scenarios
  - attribution: inspired
    label: 品牌与增长面试工具：促销、定价与商业结果主题
    url: https://github.com/coryjburk/intv-playbook-marketing_brand-growth/
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
