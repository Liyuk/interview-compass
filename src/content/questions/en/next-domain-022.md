---
questionId: next-domain-022
kind: question
status: published
locale: en
title: How should revenue and order counts behave after a refund?
question: Revenue was recognized for an order last month, and a partial refund occurs this month. Finance and growth disagree on order count, net revenue, and refund-month treatment. How would you establish consistent data semantics?
intent: Assesses mapping among event time, accounting definitions, and analytical metrics.
signals:
  - Separate order, fulfillment, refund, and accounting-entry facts.
  - Distinguish event time, recognition time, and reporting period.
  - Make aggregates traceable to details and reconcilable.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - commercialization
roles:
  - product
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - How should partial refunds affect purchaser and order counts?
  - How do you preserve the original view when correcting a closed period?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
