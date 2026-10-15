---
questionId: bulk-ai-agent-tool-idempotency
kind: question
status: published
locale: zh-CN
title: Agent 重复执行外部操作
question: 一个 Agent 偶尔会在工具超时后重复创建工单或发送通知。你会怎样设计调用协议，使重试不产生重复副作用？
intent: 考察模型不确定性与分布式调用语义交汇处的幂等和恢复设计。
signals:
  - 区分模型再次决策与同一次工具请求的网络重试
  - 讨论幂等键、操作状态查询和结果确认
  - 说明无法确认执行结果时怎样暂停或交给人处理
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - distributed-systems
  - reliability
roles:
  - ai-engineer
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：Agent 工具调用可靠性
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
