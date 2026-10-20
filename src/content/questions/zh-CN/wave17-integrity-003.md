---
questionId: wave17-integrity-003
kind: question
status: published
locale: zh-CN
title: 你发现权限配置让自己能看到不该看的客户数据，怎样处理？
question: 调试工具意外展示了其他客户的敏感字段，你可以继续利用数据排查线上问题。你会采取哪些步骤？
intent: 考察能否在便利与隐私责任冲突时先控制访问，并保留合规调查证据。
signals:
  - 停止不必要访问并记录发现范围，不扩散数据
  - 通过授权渠道报告并使用最小化、脱敏的诊断方法
primaryCapability: work-responsibility.boundaries
topics:
  - boundaries
  - ethics
roles:
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
  - team
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
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
