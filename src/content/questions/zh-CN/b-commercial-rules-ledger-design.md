---
questionId: b-commercial-rules-ledger-design
kind: question
status: published
locale: zh-CN
title: 涉及钱的系统，账务和计费应该怎样设计才能算得清、对得上？
question: 涉及钱的系统，账务和计费应该怎样设计才能算得清、对得上？账户、流水、冻结、结算和对账分别怎样建模，出现差错时怎样追溯和更正？
intent: 了解你能否用可审计的方式为资金建模，并让每一笔变化都可追溯、可复算。
signals:
  - 用不可变的流水和复式记账之类的思路，让余额可以由流水复算
  - 区分冻结、已结算和未结算等状态，以及它们之间的转换
  - 说明幂等（重复请求不会重复执行）、并发扣款和失败补偿，防止重复入账
  - 说明对账的方式，以及发现差错时怎样更正而不是改历史
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - databases
  - backend
roles:
  - backend
  - engineering
  - data
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - case
followUps:
  - 发现过去一个月有一类流水算错了，怎么更正？
  - 钱要经过多个系统，怎样保证最终两边对得上？
source:
  - attribution: original
    label: 作者的系统设计题：钱怎么算，账务与计费
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
