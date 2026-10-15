---
questionId: bulk-a-language-async-cancellation
kind: question
status: published
locale: zh-CN
title: 异步取消如何传播
question: 一个请求触发了多个并行异步任务，客户端断开后仍有下游工作继续消耗资源。请解释取消信号如何沿调用链传播，以及哪些资源必须协作式释放。
intent: 考察异步运行时取消语义和资源生命周期。
signals:
  - 区分取消请求与强制终止
  - 追踪父子任务或取消令牌的传播
  - 考虑 finally/清理逻辑与不可取消操作
  - 说明取消的传递边界与任务所有权。
  - 为不响应取消的操作设置期限、隔离和清理策略。
  - 验证取消后没有泄漏或重复副作用。
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - concurrency
  - reliability
roles:
  - engineering
  - backend
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
  - knowledge
  - debugging
  - behavioral
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - 【取消信号丢失时，怎样避免任务永久运行？】一个请求启动了多个并行任务，其中一个客户端断开，但部分下游不响应取消。你会怎样设计超时、清理和资源回收？
  - 如果操作已写入外部系统但尚未返回，取消应如何表达？
  - 如何证明清理逻辑覆盖异常退出？
---
