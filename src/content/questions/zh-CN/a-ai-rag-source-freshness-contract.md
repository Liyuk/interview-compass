---
questionId: a-ai-rag-source-freshness-contract
kind: question
status: published
locale: zh-CN
title: 知识问答引用了正确文档但内容已过期，怎样定义新鲜度责任？
question: RAG 助手返回的答案引用了内部文档，但文档所属团队已更新流程，新版本尚未进入索引。你会怎样定义新鲜度目标、更新链路和过渡期间的答案策略？
intent: 考察能否把数据更新、索引一致性、引用时效和业务责任纳入检索系统契约。
signals:
  - "定义文档权威来源、版本、生效时间、废止时间和责任人。"
  - "设定变更、删除和权限更新传播到索引的时限并可观测。"
  - "区分相关性与当前有效性，处理过期或互相冲突的材料。"
  - "按风险决定提示、降级、人工确认或拒答。"
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
  - 检索系统返回了准确但已经失效的流程文档，答案带有引用，用户据此执行了旧操作。你会如何表达来源有效性？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
