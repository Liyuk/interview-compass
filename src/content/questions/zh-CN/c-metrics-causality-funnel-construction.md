---
questionId: c-metrics-causality-funnel-construction
kind: question
status: published
locale: zh-CN
title: 你的漏斗是怎么搭起来的？
question: 你的漏斗是怎么搭起来的？每一步为什么这样划分，流失主要发生在哪里，怎样确认各步骤的定义不重叠也不遗漏？
intent: 了解你如何把一个业务过程拆成可以度量的环节，并保证每一环的定义是可靠的。
signals:
  - 说明每一步的划分依据和进入、完成的判定条件
  - 指出流失最集中的环节，并区分真实流失和统计规则造成的流失
  - 检查步骤之间是否重叠、遗漏，以及事件是否按相同定义记录
  - 说明漏斗的粒度是用户、会话还是请求，以及为什么
primaryCapability: value-direction.metrics-causality
topics: [metrics, product-thinking, growth-experiments]
roles: [product, operations, data, engineering, marketing]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, promotion]
formats: [case, knowledge]
followUps:
  - 如果某一步的埋点丢了一部分数据，你怎么发现？
  - 漏斗的哪一步最容易被"优化"出虚假的改善？
source:
  - attribution: original
    label: 作者的面试提问套路：漏斗的构建
---
