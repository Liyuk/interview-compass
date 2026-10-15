---
questionId: b-data-model-product-entitlement
kind: question
status: published
locale: zh-CN
title: 合同、账号和实际使用者不一致时，权限与计费按谁建模？
question: 一家公司购买了 100 个席位，实际使用者分属多个子公司；合同由总部签署，部分子公司要求独立账单和权限管理员。你会怎样区分客户、合同、组织、账号、成员和席位，并确保权限与计费口径一致？
intent: 考察你能否从业务责任和规则出发定义实体关系，避免把组织树、登录账号和收费主体混成一个概念。
signals:
  - 定义客户、签约主体、组织节点、成员身份和席位占用的独立含义
  - 说明组织合并、成员跨组织和席位转移时的权限与计费规则
  - 用典型合同和组织样例验证关系模型，并给出审计与纠错路径
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - commercialization
  - security
roles:
  - product
  - engineering
  - data
  - operations
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
    label: Interview Compass 原创题目扩充批次 600–626
followUps:
  - 如果成员同时属于两个子公司但只占一个席位，怎样表达归属和使用记录？
  - 合同中途把席位从一个子公司转给另一个，费用和审计记录如何变化？
---
