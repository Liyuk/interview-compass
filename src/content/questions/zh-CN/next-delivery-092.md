---
questionId: next-delivery-092
kind: question
status: published
title: 供应商容量上限低于业务预测怎么办？
question: 外部供应商承诺的处理量低于旺季预测，替代供应商迁移需要两个月。你会如何制定容量与业务限制方案？
intent: 考察外部依赖容量、风险缓冲和需求管理。
signals:
  - 比较供应商上限、实测吞吐和峰值持续时间。
  - 制定降级（关闭非核心功能以保住核心服务）、限流、分批和备用路径。
  - 与业务明确容量不足时的服务取舍。
primaryCapability: delivery.capacity-planning
topics:
  - resource-allocation
roles:
  - engineering
  - operations
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
  - 怎样验证供应商承诺在压力下可信？
  - 何时应主动限制需求而不是加急采购？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
locale: zh-CN
relatedQuestions: []
---
