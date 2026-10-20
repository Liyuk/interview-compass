---
questionId: wave18-design-002
kind: question
status: published
locale: zh-CN
title: 客户要求统一界面，但不同权限角色需要不同信息，怎样定义共同体验？
question: 管理员希望配置页显示全部数据，普通成员只需要执行任务。你会怎样确定共同的信息结构和按角色呈现的边界？
intent: 考察能否评估“角色任务差异与信息架构共享边界”，说清约束，并用证据支撑决策。
signals:
  - "梳理管理员和普通成员的主要任务及信息需求，包括哪些任务需要共享上下文。"
  - "定义共同信息和角色专属视图，确保权限设置有效且敏感数据不会跨角色泄露。"
  - "邀请两类角色完成有代表性的任务，检查他们能否找到所需信息并完成工作。"
  - "根据任务完成情况和错误证据，决定哪些内容应共用、哪些应按角色区分。"
primaryCapability: domain-modeling.product-project-model
topics:
  - product-thinking
  - product-discovery
roles:
  - design
  - product
  - engineering
  - frontend
  - mobile
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
source:
  - attribution: original
    label: Interview Compass coverage-led original expansion batch 2026-10-17 C
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
