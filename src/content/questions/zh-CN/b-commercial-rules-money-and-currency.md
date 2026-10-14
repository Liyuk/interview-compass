---
questionId: b-commercial-rules-money-and-currency
kind: question
status: published
locale: zh-CN
title: 金额、币种、舍入和时区，在交易和结算的模型里应该怎样表达？
question: 金额、币种、舍入和时区，在交易和结算的模型里应该怎样表达？哪些做法看上去没问题，其实会在对账时出问题？
intent: 了解你对商业数据里最容易出错的基础细节是否有清楚的建模意识，以及能否预见对账时的问题。
signals:
  - 说明金额的存储方式、币种和精度，而不是直接使用浮点数
  - 说明在哪一步舍入、按什么规则，以及对汇总结果的影响
  - 考虑时区和日切对结算周期的影响
  - 指出会在对账时暴露的具体问题，并说明怎样提前验证
primaryCapability: domain-modeling.commercial-rules
topics: [commercialization, data-modeling, databases]
roles: [backend, data, engineering, product]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, campus, hiring]
formats: [knowledge, case]
followUps:
  - 多币种结算时，汇率应该在哪一刻确定？
  - 对账不平的时候，你从哪里开始查？
source:
  - attribution: original
    label: 作者的面试提问套路：商业数据里的基础建模细节
---
