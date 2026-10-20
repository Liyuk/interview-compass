---
questionId: bulk-a-backend-idempotency-key-scope
kind: question
status: published
locale: zh-CN
title: 防止重复扣款的请求标识：作用范围、保存期限和冲突规则
question: 支付创建接口需要支持安全重试。你会怎样定义防止重复扣款的请求标识，包括它的作用范围、保存期限和冲突处理规则？
intent: 考察接口幂等语义的边界设计。
signals:
  - "明确键如何限定调用方、账户和业务操作，避免不同请求意外共用结果。"
  - "说明相同键和相同请求体并发到达时只执行一次，并向重试返回已保存的结果，不重新执行历史任务。"
  - "规定保存期限、过期行为，以及同键不同请求体时如何拒绝或报告冲突。"
primaryCapability: professional.system-design
topics:
  - backend
  - distributed-systems
roles:
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
