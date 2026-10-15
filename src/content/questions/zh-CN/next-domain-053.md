---
questionId: next-domain-053
kind: question
status: published
locale: zh-CN
title: 同一笔交易何时计入订单、收入和现金？
question: 支付已授权但尚未扣款，商品也未履约。业务报表把它计为订单，财务报表尚无收入。你会怎样设计跨域指标语义？
intent: 考察业务事件和财务确认的边界及映射。
signals:
  - 分离意向、订单、付款、履约和确认收入事件。
  - 为各报表定义消费目的与时点。
  - 校验跨域汇总可调节而非强行同值。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
roles:
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
  - hiring
  - promotion
formats:
  - case
followUps:
  - 部分履约或退款怎样体现？
  - 谁维护跨域口径的变更记录？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
---
