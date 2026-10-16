---
questionId: bulk-a-backend-connection-pool-exhaustion
kind: question
status: published
locale: zh-CN
title: 连接池耗尽的跨层定位
question: API 延迟升高时数据库 CPU 很低，但应用日志出现等待连接。你会如何区分连接泄漏、池容量不足和慢事务占用？
intent: 考察连接池生命周期及应用到数据库的跨层诊断。
signals:
  - 对齐请求延迟、连接等待、活动空闲连接和事务时长，确认瓶颈发生在哪一层。
  - 检查获取归还、异常释放和长事务路径，比较泄漏、池不足与慢查询的可证伪证据。
  - 按实例和下游容量估算总连接预算，比较扩池、限流、排队及修复生命周期的代价。
  - 以受控负载和扩缩容验证等待、错误及下游保护，不用暂时恢复当根因已解。
primaryCapability: professional.debugging
topics:
  - backend
  - databases
  - computer-networks
  - reliability
roles:
  - backend
  - engineering
  - ai-engineer
  - data
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - debugging
  - case
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - 【连接池耗尽时，扩容为何可能更糟？】应用实例增加后，数据库连接总数超过上限，排队和超时一起上升。你会怎样重新设计连接预算和过载行为？
  - 多租户流量如何共享连接预算？
  - 什么指标触发拒绝新请求？
relatedQuestions: []
---
