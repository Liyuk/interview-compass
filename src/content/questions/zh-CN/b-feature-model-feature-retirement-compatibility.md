---
questionId: b-feature-model-feature-retirement-compatibility
kind: question
status: published
locale: zh-CN
title: 一个模型特征将停止生产，但多个在线模型和历史报表仍依赖它。你会怎样安排退役与替代？
question: 一个模型特征将停止生产，但多个在线模型和历史报表仍依赖它。你会怎样安排退役与替代？
intent: 考察你能否把特征生命周期、下游依赖、历史可复现性和迁移验收串成可控过程。
signals:
  - 盘点消费方、训练/服务场景、历史依赖和无主使用。
  - 定义新旧特征并行、质量比较、切换窗口及回退条件。
  - 区分停止计算、停止服务和保留历史快照的时间点。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - risk-management
roles:
  - data
  - ai-engineer
  - engineering
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果替代特征只在部分人群上等价，怎样决定逐步切换范围？
  - 如何确认下游没有隐式依赖，而不只搜索代码仓库？
---
