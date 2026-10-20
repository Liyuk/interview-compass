---
questionId: bulk-b-feature-01
kind: question
status: published
locale: zh-CN
title: 两个特征都叫“近30天消费”，但计算边界不同，如何决定是否复用？
question: 推荐和风控团队都需要“近30天消费”特征，但一个以自然日为窗口、另一个以精确小时滚动，且退款处理不同。你会如何判断能否共享特征定义？
intent: 了解候选人是否把特征名称背后的时间语义、业务定义和消费场景作为契约的一部分。
signals:
  - 明确主体粒度、自然日或滚动窗口、端点包含、时区与刷新周期。
  - 说明退款、取消、迟到、去重和无历史用户的取值含义，而非默认补零。
  - 比较共享定义、参数化复用与不同特征的边界，并说明各消费任务需要什么。
  - 保留版本、负责人和消费者关系，用边界样本核对批处理与在线结果。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - metrics
  - data-modeling
roles:
  - data
  - ai-engineer
  - product
  - engineering
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - promotion
formats:
  - case
  - artifact-review
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：时间点一致性与特征可复算
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: derived
    label: 数据度量工作指南（四）：指标字典模板，把定义变成可复算的协作接口
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
followUps:
  - "什么证据足以支持复用同一定义？出现什么差异时应保留独立特征？"
  - "定义变化后，怎样保持历史趋势和模型输入仍可解释？"
  - "应向各消费方说明什么数据截止时点和新鲜度保证？"
relatedQuestions:
  - questionId: b-feature-model-time-semantics
    relation: 同样关注特征的定义，但关注点从时间点的正确性转到定义细节的完整性。
    contrast: 本题关注窗口、去重、排除与缺失值的细节；相关题关注截止时间与信息泄漏。
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
