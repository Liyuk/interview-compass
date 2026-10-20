---
questionId: b-data-model-effective-dated-ownership
kind: question
status: published
locale: zh-CN
title: 组织和负责人变化后，历史报表如何还原“当时由谁负责”？
question: 业务对象会迁移到不同团队，负责人和组织归属也会变化。审计要求按历史日期还原责任人，日常报表则关注当前归属。你会怎样建模这两种查询？
intent: 考察你能否区分当前状态与有效时间历史，并让历史归属可复算、可审计。
signals: ["区分业务关系何时生效与系统何时记录变更。","按指定日期还原当时的负责人和组织关系，并支持当前报表与历史报表分别查询。","说明迟到更正或重组如何保留旧记录、修正历史视图并审计权限判断。"]
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
  - risk-management
roles:
  - data
  - product
  - operations
  - engineering
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
  - artifact-review
followUps:
  - 如果负责人变更信息晚到，怎样修正历史报表并保留变更轨迹？
  - 如何避免同一日期出现两个有效负责人或责任空档？
  - 如果重组日期后来被更正，旧报表需要如何保留或重算？
  - 如何避免把“当前归属”误用于历史业绩归因（判断结果由什么因素造成）？
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A/B
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
