---
questionId: next-domain-054
kind: question
status: published
locale: zh-CN
title: 模型使用者需要历史特征值，实时服务却只保留最新值怎么办？
question: 风控团队需要重现三个月前的决策输入，在线特征库为节省成本只保存最新状态。你会如何平衡重现需求和存储成本？
intent: 考察特征时点查询、保留策略和责任场景。
signals:
  - 识别线上推理、训练复现和审计的不同需求。
  - 比较全量历史、快照抽样和重算能力。
  - 明确保留期限、成本预算和缺失行为。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
roles:
  - data
  - product
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
  - 哪些高风险决策必须保存精确输入？
  - 压缩或归档后如何验证可恢复性？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
