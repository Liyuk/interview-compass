---
questionId: bulk-b-data-03
kind: question
status: published
locale: zh-CN
title: 一次合作伙伴结算需要跨越多套订单系统，如何建立可核对的映射？
question: 合作伙伴结算需要把外部订单号、内部订单、支付记录和退款记录对应起来，但各系统的唯一键和更新时间都不同。你会如何建立映射和核对机制？
intent: 考察候选人能否把跨系统标识映射视为有生命周期、有质量约束的业务对象。
signals:
  - 区分来源标识、内部实体标识及其有效时间
  - 说明一对多、重复、缺失和更正记录如何处理
  - 设计能够追溯到原始记录并定位差异的核对结果
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - commercialization
roles:
  - data
  - product
  - operations
  - engineering
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：数据契约与数据所有权主题
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
