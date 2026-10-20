---
questionId: wave17-domain-008
kind: question
status: published
locale: zh-CN
title: 同一个经营指标在周报和财报里不同，先统一哪一层？
question: "运营按下单时间统计成交额，财务按履约和退款状态确认收入。负责人希望只留一个数字。你会怎样解释两种统计方法的差异，并设计能支持共同决策的指标模型？"
intent: 考察能否在不抹平业务差异的前提下，建立可复用的事实层和清晰指标定义。
signals:
  - 指出两个定义各自服务的决策及时间范围
  - 为共享事实定义维度、状态和指标版本，而非强行合并结果
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
roles:
  - data
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
