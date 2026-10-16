---
questionId: next-ai-015
kind: question
status: published
locale: zh-CN
title: 评测集被反复调优后还可信么？
question: 团队每周根据同一套固定评测集修改提示词和模型配置，分数持续上升，但新用户反馈没有改善。你会怎样重建评估可信度？
intent: 考察训练与评测污染、隐藏集管理和线上代表性的判断。
signals:
  - 识别反复查看导致的过拟合与题目泄漏。
  - 建立版本化开发集、盲测集和真实任务样本。
  - 让指标变化对应可验证的用户或任务结果。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
roles:
  - ai-engineer
  - data
  - engineering
  - product
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
  - 怎样处理真实线上失败但评测集没有覆盖的情况？
  - 评测集何时需要退休或轮换？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
