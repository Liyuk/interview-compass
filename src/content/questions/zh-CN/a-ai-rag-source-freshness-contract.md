---
questionId: a-ai-rag-source-freshness-contract
kind: question
status: published
locale: zh-CN
title: 知识问答引用了正确文档但内容已过期，怎样定义新鲜度责任？
question: 知识问答助手引用了内部文档，但文档所属团队已更新流程，新版本还没有进入检索范围。你会怎样确定内容更新时限、更新流程，以及更新完成前该怎样回答？
intent: 考察能否把数据更新、索引一致性、引用时效和业务责任纳入检索系统契约。
signals:
  - 明确文档权威来源、负责人、版本、生效与废止时间。
  - 关联源版本、索引与引用，测量变更、撤权、缓存和重试的传播时限。
  - 区分相关性和当前有效性，按错误风险比较标注、暂时隐藏、澄清或人工确认。
  - 定义更新失败、冲突和恢复的责任及验证条件，不用索引任务成功代替内容生效。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - data-modeling
  - reliability
roles:
  - ai-engineer
  - data
  - product
  - engineering
  - frontend
  - backend
  - mobile
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
  - 如何区分源文档本身过时与索引传播滞后？
  - 什么信号能证明旧版本已不再被生成结果引用？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A/B
relatedQuestions: []
---
