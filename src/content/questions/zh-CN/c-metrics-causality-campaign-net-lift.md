---
questionId: c-metrics-causality-campaign-net-lift
kind: question
status: published
locale: zh-CN
title: "活动期间留存上升且产品流程也改版，怎样判断活动的净增量？"
question: "营销活动期间留存上升，但同期上线了新的产品流程，而且参与活动的人可能本来就更活跃。你会怎样建立可信对照、估算活动净增量并说明结论边界？"
intent: 了解你如何为一个增长结果找到合理的对照，并说明结论能支持到哪里。
signals:
  - 确认次日留存的事件、用户群与统计周期，比较对照或同期自然趋势是否可比。
  - 检查参与者选择、曝光、同期改动和活动干扰，不把同期上升直接当净增量。
  - 说明结论依赖的假设、置信范围及无法排除的其他解释。
  - 提出后续观察、补充验证和扩量或停止条件，并关注成本与用户影响。
primaryCapability: value-direction.metrics-causality
topics:
  - growth-experiments
  - metrics
  - operations
  - product-discovery
roles:
  - operations
  - marketing
  - product
  - data
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
  - organization
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
  - promotion
  - hiring
formats:
  - case
  - planning
source:
  - attribution: original
    label: 本站原创
  - attribution: derived
    label: Liyuk 博客：产品判断、Top-K 与规划方法；题目为本站重新组织
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2024/02/top-k-thinking/zh.md
followUps:
  - "如果无法随机分配，你会用什么对照或时间/人群证据估算增量，仍有哪些不确定性？"
  - "若领先指标改善但业务结果没有改善，你会依据什么决定继续、调整或停止？"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
