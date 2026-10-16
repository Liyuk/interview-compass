---
questionId: bulk-b-data-01
kind: question
status: published
locale: zh-CN
title: 同一客户在多个组织账号中操作，分析时你怎样定义客户粒度？
question: 一个企业客户拥有多个组织账号、部门和成员，成员可以代表不同组织完成操作。设计客户活跃度分析时，你如何界定客户、账号、组织和用户的粒度与关系？
intent: 考察候选人能否先明确分析对象与实体关系，避免用不稳定的账号计数替代业务客户。
signals: ["区分客户、组织、账号和自然人分别代表什么业务对象。","说明这些对象之间关系的数量、有效时间及合并或拆分情况。","根据决策目标选择统计单位，并解释如何避免重复计数。"]
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
  - product-thinking
roles:
  - data
  - product
  - operations
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - promotion
formats:
  - case
  - artifact-review
source:
  - attribution: derived
    label: 数据度量工作指南：先定义测量对象再讨论指标
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - 哪些行为才算活跃，为什么？
  - 身份合并后历史月活是否回算？
relatedQuestions: []
---
