---
questionId: b-data-model-erasure-audit-history
kind: question
status: published
locale: zh-CN
title: 用户要求删除个人数据，但财务审计仍需要保留交易记录。你会怎样划定删除、匿名化和可追溯性的边界？
question: 用户要求删除个人数据，但财务审计仍需要保留交易记录。你会怎样划定删除、匿名化和可追溯性的边界？
intent: 考察你能否把数据用途、敏感性、保留依据和删除传播范围表达清楚，而不是把“删除”当作单一数据库操作。
signals:
  - 区分身份信息、交易事实、派生数据和审计证据的用途与敏感级别。
  - 说明删除或匿名化如何传播到缓存、分析集、备份和下游副本。
  - 提出验证删除完成且不再被非授权用途恢复的证据。
  - 区分可删除、需匿名化及依法保留的数据。
  - 追踪派生、缓存、备份和下游副本。
  - 定义删除完成证据、例外和复核机制。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - security
  - risk-management
  - databases
  - distributed-systems
roles:
  - data
  - engineering
  - product
  - backend
responsibilityScopes:
  - multiple-teams
  - organization
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
  - operations-review
formats:
  - case
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - 如果备份无法立即逐条改写，如何限制恢复后的数据重新进入生产？
  - 怎样证明匿名化后仍不可通过关联数据重新识别个人？
  - 【软删除记录何时可以物理清除？】客户要求删除账户，但财务审计仍需保留部分交易记录，分析系统也有复制数据。你会如何定义删除语义和验证范围？
  - 备份恢复后如何避免已删除数据重新出现？
  - 如何证明匿名化不可逆（可以安全撤回）？
  - 【CDC删除事件与物化视图】源数据库已删除客户记录，但变更数据捕获管道和下游物化视图仍保留旧值。你会如何建模删除语义、传播状态并验证清理完成？
relatedQuestions: []
---
