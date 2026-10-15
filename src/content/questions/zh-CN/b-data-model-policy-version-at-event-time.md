---
questionId: b-data-model-policy-version-at-event-time
kind: question
status: published
locale: zh-CN
title: 业务规则变更后，怎样还原每笔交易当时使用的规则？
question: 费用规则今天修改为新口径，但争议订单发生在旧规则生效期间。你会如何保存规则版本与交易事实，让财务能够重现当时的计算？
intent: 考察能否把规则作为有版本和生效时间的领域对象，保证历史可重现。
signals:
  - 区分规则发布时间、业务生效时间和计算时间。
  - 将交易结果关联到明确的规则版本与输入快照。
  - 说明追溯修正如何保留旧结果和审计理由。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
roles:
  - data
  - backend
  - product
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
  - 若旧规则缺少完整输入字段，怎样处理重算边界？
  - 如何防止新规则部署影响正在处理的历史交易？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 C
---
