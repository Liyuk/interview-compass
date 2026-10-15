---
questionId: wave17-delivery-009
kind: question
status: published
locale: zh-CN
title: 回滚会恢复服务，但会丢失已经写入的新数据，怎么选？
question: 一次版本导致查询失败，回滚旧版本可能无法读取新格式数据。你会怎样止损并比较回滚、前向修复和兼容层？
intent: 考察能否在恢复速度、数据完整性和后续迁移风险之间做明确选择。
signals:
  - 评估新旧格式兼容、数据写入和恢复时间
  - 说明止损动作、验证步骤及不可逆风险
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - risk-management
roles:
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
---
