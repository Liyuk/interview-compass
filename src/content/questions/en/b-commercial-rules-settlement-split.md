---
questionId: b-commercial-rules-settlement-split
kind: question
status: published
locale: en
title: How would you express a tiered revenue-share rule so product, engineering, and finance can all check it?
question: The revenue share between a platform and its creators changes in tiers with monthly volume. How would you express this settlement rule so product, engineering, and finance can each verify it independently?
intent: Understand whether you can turn a commercial mechanism into clear concepts, boundaries, and rules, rather than leaving it as a verbal agreement or logic hidden in code.
signals:
  - Defines split bases, tier boundaries, periods, discount responsibility, and rounding.
  - >-
    Separates rule definitions from execution records and links orders, splits, settlement, refunds, and
    reversals.
  - Explains when cross-period refunds or rule changes retain old terms or require recalculation.
  - >-
    Lets parties reproduce results from original inputs and versions, checking balanced amounts rather
    than one percentage.
  - >-
    Tests tier boundaries, partial refunds, duplicate events, and missing details for reconciliation and
    escalation.
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
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
  - operations-review
formats:
  - case
  - artifact-review
followUps:
  - "Does each tier apply to the full amount or only the amount above its threshold, and how would you make that rule unambiguous?"
  - "Which boundary and partial-refund examples would let product, engineering, and finance verify the same result?"
  - "If a refund crosses settlement periods, which record receives the reversal and who owns reconciliation?"
  - "If source details are missing or rules change, how would you separate verified facts from reconstruction and prevent duplicate reversals?"
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
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
