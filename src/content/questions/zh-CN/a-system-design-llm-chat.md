---
questionId: a-system-design-llm-chat
kind: question
status: published
locale: zh-CN
title: 怎样设计一个大模型对话系统？
question: 怎样设计一个大模型对话系统？流式输出、多轮上下文、历史记录、中断和重试分别怎么处理，成本和延迟怎么控制？
intent: 了解你能否把模型能力放进一个可靠的产品系统，并处理流式、上下文和成本这些特有约束。
signals:
  - 说明流式输出的传输方式，以及中断、断线后的恢复
  - 说明多轮上下文怎样裁剪、摘要或检索，以及对效果和成本的影响
  - 考虑限流、超时、重试的幂等（重复请求不会重复执行）和降级（关闭非核心功能以保住核心服务）
  - 说明怎样观测质量和成本，而不只是可用性
primaryCapability: professional.system-design
topics:
  - system-design
  - ai-engineering
  - backend
roles:
  - engineering
  - ai-engineer
  - backend
  - frontend
  - mobile
  - data
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
followUps:
  - 用户在回答生成到一半时刷新页面，会发生什么？
  - 上下文越来越长，你怎么权衡效果和成本？
source:
  - attribution: original
    label: 作者的系统设计题：大模型对话
---
