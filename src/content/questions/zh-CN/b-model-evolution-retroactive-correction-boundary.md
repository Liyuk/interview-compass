---
questionId: b-model-evolution-retroactive-correction-boundary
kind: question
status: published
locale: zh-CN
title: 业务规则发生追溯更正，报表需要显示修正后的结果，但决策者还要查看当时依据的旧结果。你会怎样管理两种历史视图？
question: 业务规则发生追溯更正，报表需要显示修正后的结果，但决策者还要查看当时依据的旧结果。你会怎样管理两种历史视图？
intent: 考察你能否区分有效事实、事后更正和当时决策快照，并说明重算与审计边界。
signals:
  - 区分业务事件时间、规则生效时间、记录时间和修正时间。
  - 定义原始结果、重算结果和当时可见结果之间的关联及使用场景。
  - 提出版本、差异原因和影响范围的审计记录。
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - risk-management
  - metrics
roles:
  - data
  - product
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果修正只影响部分客户或时间段，怎样避免全量重算改变不相关历史？
  - 哪些使用者需要默认看到最新值，哪些必须保留当时版本？
---
