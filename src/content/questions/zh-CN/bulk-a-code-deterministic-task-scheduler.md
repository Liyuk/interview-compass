---
questionId: bulk-a-code-deterministic-task-scheduler
kind: question
status: published
locale: zh-CN
title: 确定性任务调度器
question: 实现一个小型任务队列，支持并发 worker、任务取消和失败重试；测试不能依赖真实 sleep。你会怎样设计调度接口和状态转换？
intent: 考察并发任务抽象、状态机和可测试设计。
signals:
  - 明确 queued/running/succeeded/failed/cancelled 等状态转移
  - 隔离时钟与调度器以控制测试
  - 定义重试与取消竞争时的确定性规则
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
---
