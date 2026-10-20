---
questionId: wave17-domain-010
kind: question
status: published
locale: zh-CN
title: 一次业务事件影响多个账本时，怎样避免重复记账？
question: 订单、库存和积分分别由不同服务维护，消息可能重复、乱序或延迟。你会怎样识别事件、避免重复记账并记录补偿？
intent: 考察能否明确跨服务业务事实与本地事务边界，而不假设消息只投递一次。
signals:
  - 定义稳定事件 ID、消费状态和重复处理行为
  - 说明部分成功、乱序到达与补偿后的审计链
primaryCapability: domain-modeling.model-evolution
topics:
  - databases
  - engineering-systems
roles:
  - backend
  - engineering
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
