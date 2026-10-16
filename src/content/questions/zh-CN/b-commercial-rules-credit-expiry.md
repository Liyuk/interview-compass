---
questionId: b-commercial-rules-credit-expiry
kind: question
status: published
locale: zh-CN
title: 合作伙伴预付额度设有期限，客户在到期前后分批使用或退款。你会怎样表达额度、消耗、过期与退款的结算关系？
question: 合作伙伴预付额度设有期限，客户在到期前后分批使用或退款。你会怎样表达额度、消耗、过期与退款的结算关系？
intent: 考察你能否把余额变化建模为可追溯事件，并明确跨期退款和过期规则的优先级。
signals:
  - 区分预付、已消耗、已过期和可退金额的业务含义与余额定义。
  - 说明退款、撤单和额度过期发生在不同时间时采用的规则及其生效依据。
  - 用部分使用、重复退款和跨期退款样例验证账目守恒与可重现性。
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - risk-management
roles:
  - product
  - operations
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果合同没有说明退款时恢复额度还是退现金，你会向谁确认什么？
  - 历史账单已按另一规则结算时，怎样保留事实并处理差异？
---
