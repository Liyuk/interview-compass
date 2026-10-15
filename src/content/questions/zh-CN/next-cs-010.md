---
questionId: next-cs-010
kind: question
status: published
title: 连接池耗尽时，扩容为何可能更糟？
question: 应用实例增加后，数据库连接总数超过上限，排队和超时一起上升。你会怎样重新设计连接预算和过载行为？
intent: 考察能否把每实例资源配置放到全局容量和反馈回路中评估。
signals:
  - 按实例数、并发和下游容量计算总连接预算。
  - 区分排队、拒绝、限流与连接复用的效果。
  - 验证扩容和缩容时系统不会进入振荡。
primaryCapability: professional.computer-science
topics:
  - computer-networks
  - reliability
roles:
  - backend
  - engineering
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
  - case
followUps:
  - 多租户流量如何共享连接预算？
  - 什么指标触发拒绝新请求？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
locale: zh-CN
---
