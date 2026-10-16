---
questionId: next-delivery-093
kind: question
status: published
locale: zh-CN
title: 业务连续性演练总是提前通知导致失真怎么办？
question: 灾备演练提前一周通知所有团队，大家准备专门脚本，演练顺利但真实恢复仍然失败。你会如何调整演练设计？
intent: 考察演练是否贴近真实故障，并能否据结果完成必要改进。
signals:
  - 明确演练要验证的能力与安全边界。
  - 引入逐步减少预告和未知故障注入。
  - 跟踪真实恢复时间、数据完整性和行动项。
primaryCapability: delivery.operational-execution
topics:
  - operations
  - risk-management
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
  - 哪些系统不适合无预告演练？
  - 如何安全地验证外部依赖恢复？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
---
