---
questionId: b-data-model-effective-dated-ownership
kind: question
status: published
locale: zh-CN
title: 组织和负责人变化后，历史报表如何还原“当时由谁负责”？
question: 业务对象会迁移到不同团队，负责人和组织归属也会变化。审计要求按历史日期还原责任人，日常报表则关注当前归属。你会怎样建模这两种查询？
intent: 考察你能否区分当前状态与有效时间历史，并让历史归属可复算、可审计。
signals:
  - 定义责任关系的生效区间、变更时间和来源记录。
  - 区分按当前组织汇总与按事件发生时组织汇总的分析需求。
  - 说明回填、更正或重组如何保留旧视图并标明适用口径。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
  - risk-management
roles:
  - data
  - product
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
  - artifact-review
followUps:
  - 如果负责人变更信息晚到，怎样修正历史报表并保留变更轨迹？
  - 如何避免同一日期出现两个有效负责人或责任空档？
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
---
