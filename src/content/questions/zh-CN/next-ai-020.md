---
questionId: next-ai-020
kind: question
status: published
locale: zh-CN
title: 助手应该回答、澄清还是直接执行？
question: 用户的自然语言请求缺少金额上限和目标账户，Agent 可以直接调用会转账或修改账户的工具。你会如何决定澄清、只给建议或要求确认？
intent: 考察任务意图识别、风险分级与人机责任边界。
signals:
  - 识别会改变决策的缺失信息和不可逆（难以撤销或恢复）操作。
  - 按风险、权限与可恢复性设置确认等级。
  - 明确确认后仍需执行的验证与审计。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - product-thinking
roles:
  - ai-engineer
  - product
  - engineering
  - frontend
  - backend
  - mobile
  - design
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
  - 低风险默认值何时可以替代澄清？
  - 确认界面如何呈现即将发生的后果？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
