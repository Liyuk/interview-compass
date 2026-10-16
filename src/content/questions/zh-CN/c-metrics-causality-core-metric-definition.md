---
questionId: c-metrics-causality-core-metric-definition
kind: question
status: published
locale: zh-CN
title: 你们的核心指标是怎么定义的？
question: 你们的核心指标是怎么定义的？分子分母、时间窗口、去重和排除规则分别是什么，为什么它是核心指标？
intent: 了解你对指标定义是否有精确的掌握，能否说明定义细节如何改变结论。
signals:
  - 说清分子、分母、时间窗口、去重和排除规则，而不是只说指标名
  - 说明为什么它是核心指标，而不是容易被优化的表面数字
  - 举出定义稍有不同就会得到不同结论的具体例子
  - 说明定义是如何被记录并让别人能复算的
primaryCapability: value-direction.metrics-causality
topics: [metrics, product-thinking]
roles: [product, operations, data, engineering, marketing]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, promotion, hiring]
formats: [knowledge, case]
followUps:
  - 规则变更过一次吗？历史数据怎么处理？
  - 如果两个团队用不同定义汇报同一指标，你怎么处理？
source:
  - attribution: original
    label: 作者的面试提问套路：核心指标定义
---
