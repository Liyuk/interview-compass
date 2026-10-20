---
questionId: b-data-model-event-grain
kind: question
status: published
locale: zh-CN
title: "事件表里的一行到底代表什么？"
question: "一张行为事件表里，“一行”究竟代表什么？请说明你怎样确定它的粒度，以及粒度不清会让哪些统计出错。"
intent: "了解你是否先定义数据粒度，再谈字段和统计，并能预见重复计数与定义漂移。"
signals:
  - "先用一句话说清一行代表什么，而不是直接列字段"
  - "能举出因粒度混用导致重复计数的具体例子"
  - "区分去重键与关联键，并说明任务或会话 ID 的作用"
primaryCapability: domain-modeling.data-model
topics: [data-modeling, databases, metrics]
roles:
  - data
  - backend
  - product
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus]
formats: [knowledge, case]
followUps:
  - "同一个用户连续点击十次，和十个用户各点击一次，在你的表里怎样区分？"
  - "如果后来要把粒度从请求改成任务，历史数据怎么办？"
source:
  - attribution: derived
    label: "数据度量工作指南（二）：指标争论之前，先定义测量对象"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
