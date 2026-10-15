---
questionId: a-ai-rag-source-freshness-contract
kind: question
status: published
locale: zh-CN
title: 知识问答引用了正确文档但内容已过期，怎样定义新鲜度责任？
question: RAG 助手返回的答案引用了内部文档，但文档所属团队已更新流程，新版本尚未进入索引。你会怎样定义新鲜度目标、更新链路和过渡期间的答案策略？
intent: 考察能否把数据更新、索引一致性、引用时效和业务责任纳入检索系统契约。
signals:
  - 明确源文档变更到索引可用的延迟目标。
  - 设计版本、更新时间和失效传播的可观测性。
  - 对过期或冲突内容采取提示、降级或拒答策略。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - data-modeling
  - reliability
roles:
  - ai-engineer
  - data
  - product
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
  - case
  - behavioral
followUps:
  - 如何处理文档撤回与新旧版本短暂并存？
  - 由谁确认知识源的业务有效性？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
---
