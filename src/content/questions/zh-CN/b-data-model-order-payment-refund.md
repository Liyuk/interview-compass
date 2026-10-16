---
questionId: b-data-model-order-payment-refund
kind: question
status: published
locale: zh-CN
title: 订单、支付和退款为什么要分开建模？
question: 订单、支付和退款经常被放进同一张表。你会怎样区分它们的业务身份、生命周期和数量关系？比较将它们分别建模与合并存储的条件、代价及验证方式。
intent: 了解你能否从业务语义而不是表结构出发，说明实体的身份、数量关系和规则差异。
signals:
  - 用多次支付、部分退款和失败尝试说明数量关系，不把某种物理表结构预设为唯一正确。
  - 区分实体身份、状态与事件，并说明合并表示会产生哪些歧义或约束。
  - 比较查询、审计、一致性和演化成本，把逻辑模型与存储选择分开论证。
  - 用唯一标识、关联及边界样例验证不会重复计数或丢失合法交易。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - commercialization
roles:
  - backend
  - engineering
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - knowledge
  - case
followUps:
  - 部分退款后，订单金额还应该是原金额吗？你怎样表达？
  - 如果把三者合成一张表，哪一类查询最先出现错误？
source:
  - attribution: original
    label: 基于领域建模与专业解题的边界判定示例原创编写
---
