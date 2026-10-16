---
questionId: a-mfe-runtime-failure-isolation
kind: question
status: published
locale: zh-CN
title: "一个子应用启动失败会阻塞整个工作台，怎样让其他模块继续可用？"
question: "一个子应用启动异常会阻塞整个工作台，用户无法访问其他模块。你会怎样隔离故障，并在必要时关闭非核心功能、保住其他模块？"
intent: 考察能否限制单模块错误的影响范围，并让用户理解故障、保留可用功能。
signals:
  - 区分加载失败、运行时异常和共享壳故障
  - 为子应用设置超时、错误边界和独立重试
  - 保留导航和其他可用模块并提供恢复入口
  - 用故障注入验证隔离和告警
primaryCapability: professional.engineering-systems
topics:
  - micro-frontends
  - frontend
  - engineering-systems
  - system-design
roles:
  - frontend
  - engineering
  - design
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - system-design
  - case
followUps:
  - 共享壳失败无法隔离时，最小可用入口是什么？
  - 如何防止自动重试放大下游故障？
source:
  - attribution: original
    label: Interview Compass 原创主题补充批次：微前端
---
