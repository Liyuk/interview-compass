---
questionId: c-metrics-causality-underperforming-launch-diagnosis
kind: question
status: published
locale: zh-CN
title: 你上一个上线的新功能，核心指标前后变化是多少？数据不如预期时，你从哪些维度排查？
question: 你上线的上一个新功能，核心指标（比如转化率、点击率、留存）上线前后的具体数据变化是多少？如果数据不如预期，你通常从哪些维度去排查原因？
intent: 了解你对自己负责的数字是否清楚，以及排查不如预期的结果时是否有系统的方法。
signals:
  - 能说出具体的前后数据、口径和对比的时间范围，而不是模糊的"提升了不少"
  - 用漏斗、用户路径、分群和时间等维度逐层排查，并说明各自能排除什么
  - 区分功能本身的问题、触达的问题、数据口径的问题和外部因素
  - 说明排查之后做了什么决定，以及怎样验证
primaryCapability: value-direction.metrics-causality
topics: [metrics, product-thinking]
roles: [product, operations, data]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, campus, promotion]
formats: [behavioral, case]
followUps:
  - 数据只在某一类用户身上变差，你怎么继续查？
  - 你怎么确认变化是功能带来的，而不是同期别的因素？
source:
  - attribution: original
    label: "作者的分级面试框架，产品方向"
---
