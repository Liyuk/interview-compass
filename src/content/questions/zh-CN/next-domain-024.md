---
questionId: next-domain-024
kind: question
status: published
locale: zh-CN
title: 状态快照与事件日志不一致时以什么为准？
question: 服务根据事件日志重建状态，但线上快照显示另一结果，排障人员无法确定应该修复哪一方。你会如何定义权威数据和修复流程？
intent: 考察事件溯源、派生状态校验和修复治理。
signals:
  - 明确事件追加、状态快照和外部副作用（重复执行、越权等额外影响）的权威关系。
  - 提供可重复的重放（重新处理历史消息或任务）与差异检测。
  - 设计人工修正的审计和重新构建保护。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - operations
roles:
  - backend
  - data
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
  - 有顺序错误的事件如何恢复？
  - 重放期间如何避免再次执行外部副作用？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
