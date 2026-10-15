---
questionId: a-ai-engineering-agent-duplicate-side-effect
kind: question
status: published
locale: zh-CN
title: 一个代理可以创建工单、退款或修改账户。调用超时后系统无法判断动作是否成功，代理开始重试；你会怎样避免重复或越权的副作用？
question: 一个代理可以创建工单、退款或修改账户。调用超时后系统无法判断动作是否成功，代理开始重试；你会怎样避免重复或越权的副作用？
intent: 考察你能否把模型决策与真实世界的写操作隔离，并设计安全的失败语义。
signals:
  - 把只读和有副作用的工具区分开
  - 用幂等键、状态查询或人工确认处理不确定结果
  - 按权限、金额或风险设置确认门槛
  - 说明重试、超时和部分成功时的状态恢复
  - 区分模型再次决策与同一次工具请求的网络重试
  - 讨论幂等键、操作状态查询和结果确认
  - 说明无法确认执行结果时怎样暂停或交给人处理
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - security
  - distributed-systems
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
  - operations-review
formats:
  - system-design
  - case
followUps:
  - 【Agent 调用外部工具超时后状态未知，怎样安全重试？】Agent 请求合作方创建退款，调用超时后没有收到响应；查询接口也暂时不可用。自动重试可能重复退款，放弃又可能遗漏任务。你会怎样设计状态和恢复？
  - 如果合作方不支持幂等请求，有哪些安全替代方案？
  - 怎样让用户知道任务状态而不误报完成？
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: inspired
    label: Landed AI Engineer Interview：Agent 工具调用可靠性
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
relatedQuestions: []
---
