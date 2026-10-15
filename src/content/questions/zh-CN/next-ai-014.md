---
questionId: next-ai-014
kind: question
status: published
locale: zh-CN
title: 推理服务变慢时怎样区分排队与模型耗时？
question: 用户看到响应时间翻倍，但模型推理耗时指标没有明显变化。你会怎样拆分整个请求链路，定位瓶颈并确定止损措施？
intent: 考察端到端可观测性、排队理论和分层缓解能力。
signals:
  - 把等待、检索、编排、网络和推理阶段分别计时。
  - 比较并发、队列长度、批处理与限流信号。
  - 先控制用户影响，再验证根因修复。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
roles:
  - ai-engineer
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - debugging
  - behavioral
followUps:
  - 批处理增大为何可能损害交互延迟？
  - 怎样把优先级传递到共享推理池？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
