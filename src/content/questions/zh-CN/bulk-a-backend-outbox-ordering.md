---
questionId: bulk-a-backend-outbox-ordering
kind: question
status: published
locale: zh-CN
title: 事务外盒与消息顺序
question: 订单写入数据库后需要发布事件给下游；进程可能在任一步骤崩溃。你会怎样设计持久化发布机制，并说明如何处理重复与顺序？
intent: 考察跨数据库与消息系统的一致性设计。
signals:
  - 识别双写窗口和崩溃边界
  - 提出事务外盒或等价持久化协调思路
  - 明确下游去重及顺序保证的范围
primaryCapability: professional.system-design
topics:
  - backend
  - databases
  - distributed-systems
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
  - system-design
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
