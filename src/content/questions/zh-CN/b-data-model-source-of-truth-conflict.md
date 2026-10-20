---
questionId: b-data-model-source-of-truth-conflict
kind: question
status: published
locale: zh-CN
title: 客户主数据在 CRM、计费和产品系统中各有一套标识和状态，下游报表因此不一致。你会怎样建立可解释的事实来源？
question: 客户主数据在 CRM、计费和产品系统中各有一套标识和状态，下游报表因此不一致。你会怎样建立可解释的事实来源？
intent: 考察你能否区分系统记录、业务权威来源和分析映射，并为冲突保留责任与修复路径。
signals:
  - 识别每个实体和字段的业务负责人、写入者、权威定义和更新时间。
  - 设计跨系统标识映射、冲突状态和历史变更追踪，而不是简单覆盖。
  - 说明下游消费方如何选择定义、发现漂移并提出纠正。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - engineering-systems
  - risk-management
roles:
  - data
  - engineering
  - product
  - backend
  - ai-engineer
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果不同系统对“客户已流失”有合理但不同的定义，你会如何保留这些视图？
  - 迁移统一 ID 时如何处理重复、合并和无法自动判定的实体？
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
