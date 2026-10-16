---
questionId: next-delivery-091
kind: question
status: published
locale: zh-CN
title: 源数据延迟但下游继续显示成功结果怎么办？
question: 上游事件延迟数小时，下游报表仍显示正常完成，客户据此做了错误决策。你会如何设计数据新鲜度状态和通知？
intent: 考察数据时效性、服务承诺和用户风险沟通。
signals:
  - 区分成功、部分、陈旧和未知状态。
  - 定义按数据产品用途设置的新鲜度目标。
  - 在异常时暴露影响范围和恢复预期。
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - data-modeling
roles:
  - data
  - operations
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
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
  - 旧数据继续展示是否比隐藏更安全？
  - 如何防止用户把“无变化”理解为“无延迟”？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
---
