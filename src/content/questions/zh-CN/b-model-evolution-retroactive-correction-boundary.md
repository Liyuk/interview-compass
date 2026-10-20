---
questionId: b-model-evolution-retroactive-correction-boundary
kind: question
status: published
locale: zh-CN
title: 业务规则发生追溯更正，报表需要显示修正后的结果，但决策者还要查看当时依据的旧结果。你会怎样管理两种历史视图？
question: 业务规则发生追溯更正，报表需要显示修正后的结果，但决策者还要查看当时依据的旧结果。你会怎样管理两种历史视图？
intent: 考察你能否区分有效事实、事后更正和当时决策快照，并说明重算与审计边界。
signals:
  - 区分事件、入库、规则生效、发现和更正时间，界定受影响区间。
  - 保留原始结果、当时可见快照和事后重述结果，让消费者明确选择用途。
  - 记录规则版本、修正原因、批准依据、差异及下游依赖，避免改写历史决策证据。
  - 分批重算并核验数据差异、资源影响、回退和外部动作保护，通知受影响消费者。
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - risk-management
  - metrics
  - reliability
  - feature-modeling
  - ai-engineering
  - databases
  - engineering-systems
roles:
  - data
  - product
  - operations
  - backend
  - ai-engineer
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
  - individual
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
  - hiring
  - promotion
formats:
  - case
  - planning
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: inspired
    label: Dataskew 数据工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：数据质量与变化记录主题
    url: https://github.com/dataskew-io/data-engineering-interview-questions
followUps:
  - 如果修正只影响部分客户或时间段，怎样避免全量重算改变不相关历史？
  - 哪些使用者需要默认看到最新值，哪些必须保留当时版本？
  - 上游修复了一个影响过去两年数据的错误，业务希望尽快看到修正结果。你会怎样安排回填，避免影响当前生产报表？
  - 特征定义修复后，模型团队要回填历史数据。训练复现要求保留原始版本，业务报表又希望显示修正结果。你会如何设计双视图？
  - 发现旧税率配置错误后，财务希望修正历史报表，客服仍需解释客户当时看到的账单。你会怎样保存重述视图和当时视图？
  - 如果旧结果存在明显错误，怎样兼顾历史真实性与纠错要求？
  - 如何让后续趋势分析选择适当版本并保持可比？
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
