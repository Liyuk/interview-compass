---
questionId: a-coding-abstraction-retry-limiter
kind: question
status: published
locale: zh-CN
title: 写一个不会压垮对方的重试封装
question: 请实现一个重试封装：调用外部服务失败时按规则重试，同时不让重试压垮对方。先说明接口，再写代码，并说明怎样让它在测试里可确定地运行。
intent: 了解你如何把带有时间和失败的行为抽象成清晰的接口，并让它可以被验证。
signals:
  - 先定义次数、截止时间、错误类型和最终结果，区分重试与重新发起业务操作。
  - 比较退避、抖动、并发限制和重试预算对对方及调用者的影响。
  - 为等待和调度提供可替换依赖，使测试可重复而不依赖真实时间。
  - 明确取消、超时和部分成功的行为，保留尝试历史和不确定结果。
  - 用不可重试错误、取消竞态和重复请求核验资源释放及副作用保护。
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - backend
  - concurrency
  - frontend
  - data-structures
roles:
  - engineering
  - backend
  - ai-engineer
  - frontend
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
  - campus
  - promotion
formats:
  - coding
followUps:
  - 如果调用方可能在重试过程中取消请求，你的接口要怎样表达？
source:
  - attribution: inspired
    label: AI-Engineer-Interview-Questions 的限流重试代码任务（仅作题型启发，题面为原创）
    url: >-
      https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/12-coding-challenges/11_rate_limiter_and_retry.py
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
