---
questionId: bulk-a-backend-idempotency-key-scope
kind: question
status: published
locale: zh-CN
title: 防止重复扣款的请求标识：作用范围、保存期限和冲突规则
question: 支付创建接口需要支持安全重试。你会怎样定义防止重复扣款的请求标识，包括它的作用范围、保存期限和冲突处理规则？
intent: 考察接口幂等语义的边界设计。
signals:
  - 能明确调用方与业务操作的键作用域
  - 考虑并发请求和结果重放（重新处理历史消息或任务）语义
  - 说明过期、冲突或不同请求体复用键时的行为
primaryCapability: professional.system-design
topics:
  - backend
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
