---
questionId: bulk-b-commercial-01
kind: question
status: published
locale: en
title: A subscription, usage charge, and minimum commitment coexist. How should one invoice explain them?
question: >-
  An enterprise product charges a monthly subscription, overage usage, and a minimum-spend true-up. How would
  you define billing periods, usage attribution, price effective time, and invoice explanations so a customer
  can reconcile the charges?
intent: >-
  Understand how the candidate turns multiple pricing terms into commercial rules that can be explained and
  reconciled.
signals:
  - Defines entities, units, and periods for subscription, overage, and minimum spend.
  - >-
    Explains calculation or offset order for minimums, usage fees, discounts, and taxes, testing
    boundaries.
  - Traces bill lines to contract versions, usage facts, and effective prices.
  - Tests price changes, late entries, refunds, and rounding for explanation and reconciliation.
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - product-thinking
roles:
  - product
  - engineering
  - data
  - operations
  - backend
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
  - promotion
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: 品牌与增长面试工具：定价与促销经济主题
    url: https://github.com/coryjburk/intv-playbook-marketing_brand-growth/
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - >-
    【How should a minimum charge combine with usage fees?】A contract includes a fixed platform fee, tiered
    usage charges, and a monthly minimum. The customer wants to see how each discount affects the final
    amount. How would you model the rules and invoice lines?
  - How should usage crossing two tiers be allocated?
  - Which period should a negative adjustment offset?
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
