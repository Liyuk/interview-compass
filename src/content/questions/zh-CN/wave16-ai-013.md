---
questionId: wave16-ai-013
kind: question
status: published
locale: zh-CN
title: 提示模板修改后如何判断是否需要重新评测？
question: 模板只改了格式和示例，但影响了模型输出长度与工具调用频率。团队想跳过完整回归。你会如何建立风险分级？
intent: 考察变更影响分析和评测门槛设计。
signals:
  - 追踪模板版本与行为指标变化。
  - 识别可能影响安全、成本、正确性和工具动作的修改。
  - 定义抽样、定向和全量回归的触发条件。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - operations
roles:
  - ai-engineer
  - engineering
  - frontend
  - backend
  - mobile
  - data
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
  - 哪些格式变化可能改变指令优先级？
  - 线上异常如何回退到旧模板？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
