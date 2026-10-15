---
questionId: bulk-a-code-deterministic-task-scheduler
kind: question
status: published
locale: zh-CN
title: 确定性任务调度器
question: 实现一个小型任务队列，支持并发 worker、任务取消和失败重试；测试不能依赖真实 sleep。你会怎样设计调度接口和状态转换？
intent: 考察并发任务抽象、状态机和可测试设计。
signals:
  - "定义排队、运行、成功、失败、取消和关闭的状态及合法转换。"
  - "处理取消与任务开始、重试与关闭之间的竞态。"
  - "说明并发上限、背压、错误传播和资源释放策略。"
  - "隔离时钟与调度依赖，让测试可重复且不依赖真实等待。"
primaryCapability: professional.coding-abstraction
topics:
  - concurrency
  - data-structures
  - programming-languages
roles:
  - engineering
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - coding
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - 请设计并实现一个任务池：限制最大并发、支持任务取消，并保证关闭时不会丢弃已经开始的工作。
---
