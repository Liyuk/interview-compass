---
questionId: b-commercial-rules-settlement-split
kind: question
status: published
locale: en
title: How would you express a tiered revenue-share rule so product, engineering, and finance can all check it?
question: The revenue share between a platform and its creators changes in tiers with monthly volume. How would you express this settlement rule so product, engineering, and finance can each verify it independently?
intent: Understand whether you can turn a commercial mechanism into clear concepts, boundaries, and rules, rather than leaving it as a verbal agreement or logic hidden in code.
signals:
  - Pins down what is billed, the boundary values of each tier, and the time window that applies
  - Separates the rule itself from the result of applying it, and both can be recomputed
  - Raises edge cases unprompted, such as an amount exactly on a tier boundary or a refund that lands after month end
  - Defines stable links, amount grain, and state changes for the original order, refund event, split, and reversal.
  - States the effective time of a commission rule, the boundary between carrying forward or recomputing historical transactions, and handling refunds across settlement periods.
  - Designs a traceable ledger that reproduces the original settlement under the rule then in effect and separates facts, inferences, and later adjustments.
  - Uses partial refunds, rule changes, and missing details to test reconciliation, idempotency, and exception explanations.
  - Clarifies discount order, allocation grain, and responsible party
  - Verifies that customer refunds and settlement amounts remain balanced after partial refunds
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - risk-management
  - execution
roles:
  - product
  - backend
  - data
  - marketing
  - operations
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
  - individual
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
  - operations-review
formats:
  - case
  - artifact-review
followUps:
  - Does a tier apply to the whole amount or only to the part above the threshold, and how do you make sure everyone reads it the same way?
  - Which sample cases would you use to confirm all three parties agree?
  - If a refund crosses settlement periods, which period records the reversal and how would you explain it?
  - If original split details are missing, how would you reconstruct them while separating inference from fact?
  - If old transactions must be recomputed after a rule change, how would you identify the scope and prevent duplicate reversals?
  - An order uses a platform coupon, a member discount, and a channel subsidy; a later refund may cover only some items. How would you define discount allocation, refund reversals, and reconciliation ownership?
relatedQuestions: []
source:
  - attribution: original
    label: Written from the domain-modeling boundary rules (orders, revenue share, settlement)
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
  - attribution: original
    label: Written from the rule-change boundary example in the content architecture research
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
---
