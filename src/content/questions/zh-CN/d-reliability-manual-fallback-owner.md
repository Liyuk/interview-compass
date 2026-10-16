---
questionId: d-reliability-manual-fallback-owner
kind: question
status: published
locale: zh-CN
title: 自动系统故障后，怎样让临时人工流程按时退出？
question: 一个自动审批服务停摆后，运营团队临时改用表格处理，用户影响暂时得到控制。两周后服务仍未恢复，表格流程的权限和记录方式也不一致。你会如何管理临时人工流程、恢复自动审批，并确定何时关闭临时流程？
intent: 观察你能否把应急处理限制在明确范围内，同时持续管理风险、恢复服务和临时机制的退场。
signals:
  - 明确临时人工流程的适用范围、容量上限、权限与记录责任，核验当前用户影响。
  - 为自动服务恢复确认技术负责人、依赖、检查点和升级条件，不让临时方案无限延续。
  - 对账临时数据、重复处理和未决任务，比较恢复自动化与继续人工的风险和成本。
  - 以数据迁移、权限撤销、任务接回和用户验证为退场条件，确认没有遗留工作。
primaryCapability: delivery.operational-execution
topics:
  - operations
  - reliability
  - risk-management
roles:
  - operations
  - engineering
  - pmo
  - frontend
  - backend
  - mobile
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
