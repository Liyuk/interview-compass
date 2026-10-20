---
questionId: c-metrics-causality-completion-drop
kind: question
status: published
locale: zh-CN
title: "关键任务完成率下降了，你按什么顺序排查？"
question: "某个关键任务的完成率本周下降了。在解释原因之前，你会按什么顺序确认变化是真的、范围在哪里、用户付出了什么代价？"
intent: "了解你是否先验证数据与范围，再提出可被证伪的假设，而不是先找一个看起来合理的原因。"
signals:
  - "先检查开始、成功、失败事件的覆盖与上报延迟，再解释变化"
  - "按最可能相关的维度切分，并保留每组样本量"
  - "最终给出一条可被反驳的陈述，并说明用什么复现或小范围验证来确认"
primaryCapability: value-direction.metrics-causality
topics: [metrics, debugging, operations]
roles:
  - data
  - product
  - engineering
  - operations
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, operations-review]
formats: [case]
followUps:
  - "任务开始数正常、成功事件接近零，但服务日志正常，你怎么看？"
  - "最终处理成功率没变而用户可见完成率下降，说明什么？"
source:
  - attribution: adapted
    label: "数据度量工作指南（二）：指标争论之前，先定义测量对象"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
