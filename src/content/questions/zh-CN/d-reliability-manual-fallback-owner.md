---
questionId: d-reliability-manual-fallback-owner
kind: question
status: published
locale: zh-CN
title: 自动系统故障后，怎样让临时人工流程按时退出？
question: 一个自动审批服务停摆后，运营团队临时改用表格处理，用户影响暂时得到控制。两周后服务仍未恢复，表格流程的权限和记录方式也不一致。你会如何管理临时人工流程、恢复自动审批，并确定何时关闭临时流程？
intent: 观察你能否把应急处理限制在明确范围内，同时持续管理风险、恢复服务和临时机制的退场。
signals:
  - 量化人工流程的容量、错误、权限和审计风险并明确适用范围
  - 指定自动恢复的技术负责人、依赖、检查点和升级条件
  - 制定临时数据核对、迁移与关闭标准，验证关闭后没有遗留任务
  - 收集频率、影响、触发条件、风险和处理差异。
  - 先确认例外背后的业务规则与授权边界。
  - 比较流程标准化、系统改造和人工复核的收益及误判风险。
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
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C/D
followUps:
  - 如果恢复自动服务会再次影响用户，你会用什么小流量验证？
  - 如何处理人工表格中已完成、重复或状态不明的记录？
  - 哪些例外应该保留人工判断并留下理由？
  - 如何验证自动化没有把少数高损失案例隐藏在平均指标里？
relatedQuestions: []
---
