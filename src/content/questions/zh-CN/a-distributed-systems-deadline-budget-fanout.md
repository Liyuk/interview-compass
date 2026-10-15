---
questionId: a-distributed-systems-deadline-budget-fanout
kind: question
status: published
locale: zh-CN
title: 请求经过多级服务后总耗时超预算，怎样分配截止时间？
question: 用户请求依次调用四个下游，每个服务都使用完整的 2 秒超时，导致整体尾延迟很高，客户端还会在响应失效后继续计算。你会如何传递截止时间和预算？
intent: 考察能否将端到端时限分解到排队、重试和下游调用，并减少无效工作。
signals:
  - 区分端到端 deadline 与单次调用 timeout。
  - 为网络、排队、下游和响应预留预算。
  - 在预算不足时停止、降级或返回部分结果。
primaryCapability: professional.system-design
topics:
  - distributed-systems
  - reliability
  - system-design
  - computer-networks
roles:
  - backend
  - engineering
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - operations-review
formats:
  - system-design
  - case
followUps:
  - 重试应使用剩余预算还是重置超时？
  - 怎样处理无法取消的下游工作？
  - 请求经过多个服务后，单个调用都没有超时，但整体响应常超过用户等待上限。你会怎样设计 deadline 传播？
  - 如果一个下游服务不支持取消，调用方可以如何限制损害？
  - 异步任务是否应继承原请求 deadline，还是建立独立完成时限？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
---
