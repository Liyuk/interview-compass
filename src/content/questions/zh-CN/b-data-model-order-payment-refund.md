---
questionId: b-data-model-order-payment-refund
kind: question
status: published
locale: zh-CN
title: "订单、支付和退款为什么要分开建模？"
question: "订单、支付和退款经常被放进同一张表。请说明为什么应当把它们建成不同的实体，它们之间的基数和身份关系是什么。"
intent: "了解你能否从业务语义而不是表结构出发，说明实体的身份、数量关系和规则差异。"
signals:
  - "说明了一笔订单可对应多次支付、多次部分退款，并解释这对统计口径的影响"
  - "区分了实体的身份与状态，而不是把状态当作新实体"
  - "把业务规则与存储实现分开讨论，例如幂等键和唯一约束放在哪里"
primaryCapability: domain-modeling.data-model
topics: [data-modeling, databases, commercialization]
roles: [backend, engineering, product]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, campus, hiring]
formats: [knowledge, case]
followUps:
  - "部分退款后，订单金额还应该是原金额吗？你怎样表达？"
  - "如果把三者合成一张表，哪一类查询最先出现错误？"
source:
  - attribution: original
    label: "基于领域建模与专业解题的边界判定示例原创编写"
---
