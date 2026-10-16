---
questionId: b-data-model-commercial-mapping
kind: question
status: published
locale: zh-CN
title: 商业领域里的核心概念，是怎样映射到数据模型里的？
question: 以订单、合同、结算这类商业概念为例，它们是怎样映射到数据模型里的？哪些概念被拆成了多个实体，哪些被合并了，为什么？
intent: 了解你能否把商业概念的含义、基数和生命周期落实到数据模型，而不是直接照着页面或接口建表。
signals:
  - 从业务含义、基数和生命周期出发建模，而不是从页面或接口出发
  - 说明哪些概念被拆开或合并，以及背后的规则和取舍
  - 指出模型里容易被误解的地方，例如状态和事件
  - 说明模型怎样应对规则变化后的历史数据
primaryCapability: domain-modeling.data-model
topics: [commercialization, data-modeling, databases]
roles:
  - backend
  - data
  - product
  - engineering
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion, hiring]
formats: [knowledge, case]
followUps:
  - 如果业务新增一种计费方式，这个模型要改哪里？
  - 你怎样让产品和研发对这些概念有同样的理解？
source:
  - attribution: original
    label: 作者的面试提问套路：商业领域的数据模型映射
---
