---
questionId: b-model-evolution-reopened-work-item
kind: question
status: published
locale: zh-CN
title: 工单关闭后重新打开，怎样避免覆盖已完成的处理记录？
question: 客服工单关闭后，客户补充新证据时可以重新打开，有时还会拆成多个跟进事项。你会怎样设计状态与事件，让关闭、重开和拆分都可追溯？
intent: 考察你能否把状态快照与业务事件区分开，并表达允许的迁移、责任和历史关系。
signals:
  - 定义关闭、重开、撤销和拆分分别代表什么业务事实。
  - 记录状态迁移的触发人、依据、时间及原工单与子事项关联。
  - 处理重复提交、并发更新及旧系统只识别单一状态的兼容方式。
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - product-thinking
  - engineering-systems
roles:
  - product
  - engineering
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
followUps:
  - 如果关闭时触发结算或通知，重新打开后哪些副作用需要补偿？
  - 如何汇总当前待办又不抹去第一次解决问题的时间？
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
---
