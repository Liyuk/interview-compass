---
questionId: wave16-domain-021
kind: question
status: published
locale: zh-CN
title: 退款手续费由谁承担如何进入交易模型？
question: 支付渠道对部分退款收取手续费，合同规定由商家承担，但报表仍把退款金额和手续费混在一起。你会怎样表达？
intent: 考察资金流、责任归属和账务明细表达。
signals:
  - 区分退款本金、手续费、冲回和实际到账。
  - 让每项金额可追溯到合同与渠道规则。
  - 校验客户、商户和财务报表的对账关系。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - commercialization
roles:
  - product
  - engineering
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - 渠道事后调整费率时如何重现原交易？
  - 同一退款跨多个支付渠道如何分摊？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
