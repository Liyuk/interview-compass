---
questionId: b-product-model-service-level-entitlement
kind: question
status: published
locale: zh-CN
title: 服务等级承诺同时约束响应时间和解决时间时，怎样建模？
question: 企业合同分别约定首次响应、恢复服务和最终解决时间，暂停计时条件也不同。客服系统只记录一个计时器，导致争议。你会怎样分别记录这些承诺及其计时规则？
intent: 考察能否把服务承诺拆成事件、状态机、计时规则和可审计证据。
signals:
  - 区分响应、恢复、解决等承诺及其起止事件。
  - 定义等待客户、维护窗口和多团队接力的暂停规则。
  - 保留规则版本、时钟依据和每次状态变化。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - commercialization
  - product-thinking
roles:
  - product
  - operations
  - backend
  - engineering
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
  - behavioral
followUps:
  - 多个承诺同时违约时，如何确定升级级别？
  - 怎样处理客户对暂停计时提出异议？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
