---
questionId: bulk-a-backend-connection-pool-exhaustion
kind: question
status: published
locale: zh-CN
title: 连接池耗尽的跨层定位
question: API 延迟升高时数据库 CPU 很低，但应用日志出现等待连接。你会如何区分连接泄漏、池容量不足和慢事务占用？
intent: 考察连接池生命周期及应用到数据库的跨层诊断。
signals:
  - 关注活动/空闲连接与等待时间
  - 检查连接归还路径和事务时长
  - 用负载与池指标判断扩容是否会掩盖根因
primaryCapability: professional.debugging
topics:
  - backend
  - databases
roles:
  - backend
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
