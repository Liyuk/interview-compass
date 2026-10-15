---
questionId: a-coding-abstraction-retry-limiter
kind: question
status: published
locale: zh-CN
title: 写一个不会压垮对方的重试封装
question: 请实现一个重试封装：调用外部服务失败时按规则重试，同时不让重试压垮对方。先说明接口，再写代码，并说明怎样让它在测试里可确定地运行。
intent: 了解你如何把带有时间和失败的行为抽象成清晰的接口，并让它可以被验证。
signals:
  - 把时钟、等待这类不确定因素设计成可注入的依赖
  - 先界定哪些错误可重试，哪些不可重试
  - 说明取消、并发或幂等如何影响接口设计
  - 从输入、机制和故障表现中提出可验证的技术假设
  - 比较实现路径及其正确性、性能、安全或维护代价
  - 说明覆盖边界场景的测试或运行指标
  - 重试次数与首次调用次数定义清楚
  - 退避与等待通过可替换时钟/调度器控制
  - 确保取消、不可重试错误和最终错误有明确行为
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
  - team-manager
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
---
