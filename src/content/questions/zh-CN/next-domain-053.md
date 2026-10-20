---
questionId: next-domain-053
kind: question
status: published
locale: zh-CN
title: 同一笔交易何时计入订单、收入和现金？
question: "支付已授权但尚未扣款，商品也未履约。业务报表把它计为订单，财务报表尚未确认收入。你会怎样定义并调节不同领域的订单、付款、收入和现金指标？"
intent: 考察业务事件和财务确认的边界及映射。
signals:
  - "将订单意向、支付授权、扣款或捕获、结算、履约和确认收入作为不同事件处理。"
  - "明确每项指标代表的事件及时间，说明支付授权不等于已收到现金。"
  - "记录业务和财务报表的状态转换、部分履约、退款及对账规则。"
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
roles:
  - data
  - product
  - engineering
  - backend
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
  - promotion
formats:
  - case
followUps:
  - 部分履约或退款怎样体现？
  - 谁维护跨业务领域的指标定义的变更记录？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
