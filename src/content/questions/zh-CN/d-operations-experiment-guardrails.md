---
questionId: d-operations-experiment-guardrails
kind: question
status: published
locale: zh-CN
title: 线上实验的检查点与停止条件
question: 你要在线上跑一个增长实验，开跑前会准备哪些检查点和停止条件？
intent: 了解你如何先定义测量对象，再为实验设定护栏、观察窗口和停止条件，并明确谁在什么情况下叫停。
signals:
  - "在开始实验前定义主指标、护栏指标、目标人群和数据质量检查。"
  - "依据基线波动、最小有意义伤害或安全要求说明阈值来源。"
  - "设定曝光范围、观察窗口、分阶段放量以及暂停或回退条件。"
  - "明确谁有权叫停、通知谁处理，以及如何验证恢复。"
primaryCapability: delivery.operational-execution
topics:
  - growth-experiments
  - metrics
  - operations
  - risk-management
roles:
  - marketing
  - operations
  - data
  - product
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
formats:
  - planning
  - case
source:
  - attribution: inspired
    label: 数据度量工作指南（二）：指标争论之前，先定义测量对象
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
