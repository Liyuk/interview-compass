---
questionId: bulk-b-data-05
kind: question
status: published
locale: zh-CN
title: 公司要统一“有效客户”定义，你会如何避免把业务差异抹平？
question: 不同业务线都使用“有效客户”指标，但有的按付费、有的按活跃、有的按续约可能性定义。你会如何判断哪些定义应该统一，哪些应该保留为不同概念？
intent: 考察候选人能否兼顾跨团队可比性与本地业务语义，不把一个名称误当成同一测量对象。
signals:
  - 追问指标服务的决策、对象、时间窗及排除规则
  - 识别同名异义与异名同义的情况并给出明确边界
  - 提出共享核心定义与业务专属衍生定义的治理方式
  - 明确“跨系统概念的共同语义与场景边界”涉及的事实、对象和责任边界。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
  - product-thinking
  - commercialization
roles:
  - data
  - product
  - operations
  - engineering
  - frontend
  - backend
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
  - promotion
  - hiring
formats:
  - case
  - planning
source:
  - attribution: derived
    label: 数据度量工作指南：指标定义需要可复算
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
  - attribution: original
    label: Interview Compass coverage-led original expansion batch 2026-10-17 C
followUps:
  - 销售、客服和数据团队用不同规则筛选有效客户，管理层希望统一指标。你会怎样厘清核心概念、适用场景和不能强行统一的边界？
perspectiveReview: inferred
qualityTier: extended
perspective: candidate
---
