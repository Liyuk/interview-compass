---
questionId: next-ai-013
kind: question
status: published
locale: zh-CN
title: 模型输出含有个人信息时，怎样限制日志风险？
question: 模型响应可能回显客户身份信息，线上排障又依赖请求与结果日志。你会如何设计采集、脱敏、访问和保留策略？
intent: 考察能否平衡诊断价值与敏感数据最小化。
signals:
  - 按用途区分必需遥测与原始内容。
  - 在采集链路定义脱敏、访问控制和保留期限。
  - 验证日志策略本身不会泄露或破坏故障诊断。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
roles:
  - ai-engineer
  - engineering
  - frontend
  - backend
  - mobile
  - data
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
  - 怎样排查脱敏误伤造成的模型质量变化？
  - 谁可以临时访问原始样本？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
