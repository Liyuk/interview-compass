---
questionId: d-reliability-manual-fallback-owner
kind: question
status: published
locale: zh-CN
title: 自动系统故障后，人工兜底流程怎样避免无限期常态化？
question: 一个自动审批服务停摆后，运营团队启用了人工表格处理，用户影响暂时受控。两周后服务仍未恢复，人工表格没有一致的权限和审计记录。你会怎样管理临时兜底、恢复自动流程并确定退出条件？
intent: 观察你能否把应急处理限制在明确范围内，同时持续管理风险、恢复服务和临时机制的退场。
signals:
  - 量化人工流程的容量、错误、权限和审计风险并明确适用范围
  - 指定自动恢复的技术负责人、依赖、检查点和升级条件
  - 制定临时数据核对、迁移与关闭标准，验证关闭后没有遗留任务
primaryCapability: delivery.operational-execution
topics:
  - operations
  - reliability
  - risk-management
roles:
  - operations
  - engineering
  - pmo
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
followUps:
  - 如果恢复自动服务会再次影响用户，你会用什么小流量验证？
  - 如何处理人工表格中已完成、重复或状态不明的记录？
---
