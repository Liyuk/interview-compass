---
questionId: bulk-a-backend-backpressure-queue-growth
kind: question
status: published
locale: zh-CN
title: 队列持续增长时，怎样让上游放慢发送？
question: 消费者处理速度低于生产者，消息队列持续增长，但上游仍显示请求成功。你会怎样确定控制上游发送速度应作用在哪一层，并保护系统恢复能力？
intent: 考察排队系统稳定性、过载传播和背压机制。
signals:
  - 能以到达率与服务率解释队列增长
  - 识别无限排队对延迟和内存的风险
  - 提出限流、拒绝、降级（关闭非核心功能以保住核心服务）或弹性消费的条件
primaryCapability: professional.system-design
topics:
  - backend
  - concurrency
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
