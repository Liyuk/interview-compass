---
questionId: b-data-model-erasure-audit-history
kind: question
status: published
locale: zh-CN
title: 用户要求删除个人数据，但财务审计仍需要保留交易记录。你会怎样划定删除、匿名化和可追溯性的边界？
question: 用户要求删除个人数据，但财务审计仍需要保留交易记录。你会怎样划定删除、匿名化和可追溯性的边界？
intent: 考察你能否把数据用途、敏感性、保留依据和删除传播范围表达清楚，而不是把“删除”当作单一数据库操作。
signals:
  - 按用途、敏感性和已核验的保留依据区分身份信息、交易事实、派生数据与审计证据。
  - 比较删除、匿名化和受限保留的适用条件，不假设所有数据都必须删除或都可以保留。
  - 追踪缓存、分析集、备份与下游副本的处理责任、时间和失败恢复。
  - 用验证记录证明已完成的范围、尚待处理的副本和例外，并防止未授权恢复或复用。
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
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - multiple-teams
  - organization
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
  - "备份无法立即逐条改写时，怎样防止恢复后已删除的数据重新进入生产？"
  - "什么证据能说明匿名记录无法通过关联数据重新识别？"
  - "怎样跟踪源数据、缓存、分析系统和下游副本的删除完成情况？"
  - "哪些经核实的保留要求允许继续受限保存交易记录，期限如何确定？"
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
