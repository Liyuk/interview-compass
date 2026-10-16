---
questionId: next-domain-025
kind: question
status: published
locale: zh-CN
title: 价格规则有多个生效时区时如何计算？
question: 促销从某地当地午夜开始，但服务部署在 UTC，客户又可跨地区迁移。你会如何表示规则的生效时间并处理边界账单？
intent: 考察时间语义、规则版本和计费可重现性。
signals:
  - 区分绝对时间、业务时区和日期边界。
  - 保存应用规则时使用的地区与版本。
  - 测试夏令时切换、迁移和重放（重新处理历史消息或任务）场景。
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
roles:
  - product
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
followUps:
  - 客户迁移地区时现有周期如何处理？
  - 如何解释差一小时导致的账单差异？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
