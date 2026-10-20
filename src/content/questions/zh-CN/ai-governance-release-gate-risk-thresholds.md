---
questionId: ai-governance-release-gate-risk-thresholds
kind: question
status: published
primaryCapability: professional.ai-evaluation-governance
scenarios:
  - interview
  - hiring
  - promotion
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 A
locale: zh-CN
title: AI 功能的平均质量达标，但少数高风险错误仍会造成损害，发布门槛怎么定？
question: AI 功能的平均质量达标，但少数高风险错误仍会造成损害，发布门槛怎么定？
intent: 考察是否能把错误严重度、发生概率、可检测性和缓解能力纳入发布决策，而非只看平均分。
signals:
  - 按影响和可逆（可以安全撤回）性区分错误等级，避免平均值掩盖严重尾部
  - 分别设定质量底线、风险上限、人工复核与安全阻断条件
  - 用真实场景样本估计发生率并说明统计不确定性
  - 明确谁有权接受剩余风险，以及上线后如何监测和回退
topics:
  - ai-engineering
  - risk-management
  - metrics
roles:
  - ai-engineer
  - product
  - manager
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
formats:
  - planning
  - case
followUps:
  - 业务方要求按期发布时，什么证据可以支持例外？
  - 样本量太小而无法证明低风险时，你会怎样决策？
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
