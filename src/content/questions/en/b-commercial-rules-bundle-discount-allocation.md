---
questionId: b-commercial-rules-bundle-discount-allocation
kind: question
status: published
locale: en
title: >-
  A customer buys a bundle and then asks to refund one item. How should the original bundle discount
  be reallocated?
question: >-
  A customer buys a bundle and then asks to refund one item. How should the original bundle discount
  be reallocated?
intent: "Assess whether you can turn bundle promises, item refunds, and settlement into one auditable rule, including how to protect customers and accounting consistency when that rule changes."
signals: ["Verify bundle contents, list prices, discount triggers, refund eligibility, and the terms version that governed the original order.", "Compare original-order allocation, repricing the remainder, and contractual rules across refunds, commissions, tax, and revenue treatment.", "Define the shared calculation evidence needed by orders, refunds, finance, and support, with traceability for historical orders.", "Propose boundary cases, customer explanations, and launch checks to prevent arbitrage or ledger mismatches after split orders or partial refunds."]
weakAnswer: "Simply allocating the discount by list price without checking contractual rules, tax and commission treatment, bundle eligibility, or post-refund reconciliation."
anchors:
  notPassing: "Names one allocation method but gives no policy basis or refund boundary."
  passing: "Checks bundle and refund terms, compares at least two allocation rules, and explains the main customer impact."
  excellent: "Connects applicable terms, calculation, refund, commission, and finance reconciliation in a traceable process that covers partial refunds."
  exceptional: "Also tests split-order and eligibility edge cases, historical recalculation, and exception governance, quantifying effects on customers, fairness, and business metrics."
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - metrics
roles:
  - product
  - data
  - operations
  - engineering
  - backend
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
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps: ["If removing an item makes the remainder ineligible for the bundle, how should it be repriced and who can approve an exception?", "How would you validate that a concrete order reconciles across the refund, platform revenue, and partner commission?"]
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
