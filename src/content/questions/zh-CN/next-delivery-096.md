---
questionId: next-delivery-096
kind: question
status: published
locale: zh-CN
title: 核心第三方服务没有书面服务承诺时，怎样设连续性目标？
question: 业务依赖一个没有书面服务承诺的第三方接口，供应商支持响应不稳定。你会如何定义内部连续性目标和备用方案？
intent: 考察依赖风险、内部控制和供应商治理。
signals:
  - 根据业务影响建立内部可用性和恢复目标。
  - 评估缓存、降级（关闭非核心功能以保住核心服务）、替代流程和数据补偿。
  - 把实际故障证据用于合同和供应商决策。
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - risk-management
roles:
  - engineering
  - operations
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
  - 哪些操作必须暂停而不能继续使用陈旧信息？
  - 如何测试供应商恢复后的数据对账？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
---
