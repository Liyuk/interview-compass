---
questionId: b-feature-model-entitlement-precedence
kind: question
status: published
locale: zh-CN
title: 用户同时拥有套餐、试用和人工授权时，功能权限按什么顺序生效？
question: 同一账号可能同时拥有基础套餐、临时试用、活动权益和客服补偿。各系统对优先级的实现不一致，客户看到的权限偶尔反复变化。你会怎样定义资格与冲突规则？
intent: 考察能否把产品资格拆成来源、有效期、优先级、撤销与解释能力。
signals:
  - 列出权益来源、主体范围、生效与到期时间。
  - 定义叠加、覆盖、互斥和撤销优先级。
  - 确保决策可解释、可追溯，并用一致性测试覆盖组合。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - commercialization
roles:
  - product
  - backend
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
  - promotion
formats:
  - case
  - behavioral
followUps:
  - 权益服务不可用时，系统应默认允许还是拒绝？
  - 客服如何查询某用户为何拥有或失去某项权限？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
---
