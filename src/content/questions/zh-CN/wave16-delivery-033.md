---
questionId: wave16-delivery-033
kind: question
status: published
locale: zh-CN
title: 自动化恢复操作可能扩大故障时如何设保护？
question: 监控系统会自动重启异常服务，但本次问题来自共享数据层，批量重启可能加剧连接风暴。你会如何设计自动化边界？
intent: 考察自动化动作的适用范围、反馈回路和人工接管。
signals:
  - 识别可自动恢复与需人工判断的故障类型。
  - 限制并发动作、速率和重复次数。
  - 提供熔断、暂停和演练机制。
primaryCapability: delivery.operational-execution
topics:
  - operations
  - reliability
roles:
  - operations
  - engineering
  - backend
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
  - 自动化无法确认结果时应如何报告？
  - 如何避免多个控制器同时执行修复？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
