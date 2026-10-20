---
questionId: d-capacity-planning-interrupt-load-budget
kind: question
status: published
locale: zh-CN
title: 团队计划里应该给突发支持预留多少容量？
question: 团队连续几个季度都因线上支持、客户升级和跨团队求助偏离路线图。有人建议统一预留 20% 容量，但团队间中断频率差异很大。你会怎样确定预留方式？
intent: 考察能否从历史中断、服务承诺和上下游模式估算容量，并持续校准。
signals:
  - 按类别统计中断频率、持续时间、紧急度和责任来源。
  - 区分随机波动、可预测高峰和可通过产品化消除的重复劳动。
  - 设置容量池、轮值或服务等级，并定义超阈值后的升级动作。
primaryCapability: delivery.capacity-planning
topics:
  - resource-allocation
  - planning
  - operations
roles:
  - manager
  - engineering
  - operations
  - pmo
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - team-manager
  - senior-manager
  - individual-contributor
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps:
  - 预留容量没有用完时，哪些工作可以安全填入？
  - 怎样判断中断预算应该增加还是减少？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
