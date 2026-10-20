---
questionId: wave17-domain-012
kind: question
status: published
locale: zh-CN
title: 客户从年度套餐切换到按量套餐，未用额度怎么处理？
question: 客户在年中变更计费计划，合同允许部分结转但不允许叠加折扣。你会怎样定义结转、冲销、续费和账单过渡规则？
intent: 考察能否把计划变更建模为有时间边界的商业事件，并覆盖余额与折扣的组合边界。
signals:
  - 列出变更前后权益、余额和价格的生效时点
  - 设计可重现的过渡账单及对账样例
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
roles:
  - product
  - engineering
  - backend
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
  - case
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
