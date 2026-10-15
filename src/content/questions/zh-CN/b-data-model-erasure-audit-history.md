---
questionId: b-data-model-erasure-audit-history
kind: question
status: published
locale: zh-CN
title: 用户要求删除个人数据，但财务审计仍需要保留交易记录。你会怎样划定删除、匿名化和可追溯性的边界？
question: 用户要求删除个人数据，但财务审计仍需要保留交易记录。你会怎样划定删除、匿名化和可追溯性的边界？
intent: 考察你能否把数据用途、敏感性、保留依据和删除传播范围表达清楚，而不是把“删除”当作单一数据库操作。
signals:
  - 区分身份信息、交易事实、派生数据和审计证据的用途与敏感级别。
  - 说明删除或匿名化如何传播到缓存、分析集、备份和下游副本。
  - 提出验证删除完成且不再被非授权用途恢复的证据。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - security
  - risk-management
roles:
  - data
  - engineering
  - product
responsibilityScopes:
  - multiple-teams
  - organization
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果备份无法立即逐条改写，如何限制恢复后的数据重新进入生产？
  - 怎样证明匿名化后仍不可通过关联数据重新识别个人？
---
