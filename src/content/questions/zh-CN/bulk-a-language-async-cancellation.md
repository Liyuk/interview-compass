---
questionId: bulk-a-language-async-cancellation
kind: question
status: published
locale: zh-CN
title: 客户端断开后，怎样停止仍在运行的异步任务？
question: 一个请求启动了多个异步任务；客户端断开或请求超时后，部分下游工作仍占用线程和连接。你会怎样让取消信号传到相关任务，并释放资源？
intent: 考察对异步取消、任务所有权和资源清理边界的理解。
signals:
  - 区分超时、取消和任务自然完成。
  - 说明取消信号如何跨父子任务和服务调用传播。
  - 识别共享任务、不可中断操作和已经产生副作用（改变外部状态的操作影响）的边界。
  - 说明如何清理资源并验证取消后没有任务泄漏或重复副作用。
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - concurrency
  - reliability
roles:
  - engineering
  - backend
  - mobile
  - frontend
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
  - knowledge
  - debugging
  - behavioral
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
followUps:
  - 如果下游操作不响应取消，怎样限制它持续占用资源？
  - 如果外部写入已经完成但响应丢失，取消应代表什么？
  - 如何验证异常退出也会执行必要清理？
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
