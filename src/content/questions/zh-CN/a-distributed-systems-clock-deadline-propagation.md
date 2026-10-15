---
questionId: a-distributed-systems-clock-deadline-propagation
kind: question
status: published
locale: zh-CN
title: 请求经过多个服务后，单个调用都没有超时，但整体响应常超过用户等待上限。你会怎样设计 deadline 传播？
question: 请求经过多个服务后，单个调用都没有超时，但整体响应常超过用户等待上限。你会怎样设计 deadline 传播？
intent: 考察你能否将端到端时限分解为跨服务预算，并处理取消、重试和后台工作的边界。
signals:
  - 区分客户端总时限、每跳超时和下游可用预算。
  - 说明 deadline 如何随请求上下文传递，并由下游主动停止无价值工作。
  - 避免重试叠加、已取消任务继续占用资源或副作用重复执行。
primaryCapability: professional.system-design
topics:
  - distributed-systems
  - computer-networks
  - reliability
roles:
  - backend
  - engineering
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果一个下游服务不支持取消，调用方可以如何限制损害？
  - 异步任务是否应继承原请求 deadline，还是建立独立完成时限？
---
