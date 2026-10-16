---
questionId: c-metrics-causality-metric-tiers
kind: question
status: published
locale: zh-CN
title: "看板上有几十项指标，你怎样决定哪些进入核心清单？"
question: "一张看板放了几十项指标，团队的注意力总被最显眼的数字吸走。请选一条用户任务，说明你怎样给指标分级，并决定哪些进入核心清单。"
intent: "了解你能否按与用户任务的距离和可行动性给指标排序，并保留对数据质量与体验代价的检查。"
signals:
  - "区分任务结果、体验护栏、过程诊断和数据质量几类指标"
  - "用任务相关性、影响范围、行动性和可信度解释为什么先看它"
  - "说明指标变化时谁做什么，说不清的降为观察或按需"
primaryCapability: value-direction.metrics-causality
topics: [metrics, product-thinking, operations]
roles:
  - product
  - data
  - operations
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, operations-review, hiring]
formats: [case, artifact-review]
followUps:
  - "缓存命中率很高但用户仍找不到结果，你怎么解释？"
  - "不同阶段（上线前、早期验证、规模化）核心清单会怎样变化？"
source:
  - attribution: adapted
    label: "数据度量工作指南（三）：指标分级，让数据先服务最重要的决策"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-tiers-prioritize-decisions/zh.md
---
