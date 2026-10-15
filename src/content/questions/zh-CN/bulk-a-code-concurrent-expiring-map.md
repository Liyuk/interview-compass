---
questionId: bulk-a-code-concurrent-expiring-map
kind: question
status: published
locale: zh-CN
title: 并发过期映射
question: 请实现一个支持并发读写、按条目过期并可清理过期数据的映射。你会如何定义过期语义、同步边界和确定性测试？
intent: 考察并发数据结构、时间抽象与可测试性。
signals:
  - 定义读取过期条目时的可见行为
  - 避免共享 map 与清理线程之间的数据竞争
  - 通过注入时钟避免依赖真实等待的测试
primaryCapability: professional.coding-abstraction
topics:
  - concurrency
roles:
  - engineering
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
  - coding
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
followUps:
  - 读取过期映射是否应续期？删除与过期清理同时发生时，需要保证什么行为？
---
