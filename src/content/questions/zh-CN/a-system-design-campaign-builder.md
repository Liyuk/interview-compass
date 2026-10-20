---
questionId: a-system-design-campaign-builder
kind: question
status: published
locale: zh-CN
title: 怎样设计一个让运营自己搭建活动和玩法的平台？
question: 怎样设计一个让运营自己搭建活动和玩法的平台？活动、玩法、规则和特征怎样抽象成可配置的组件，又怎样保证配置上线后的正确性？
intent: 了解你能否把变化频繁的业务抽象成可配置的模型，并在灵活性和可控性之间取舍。
signals:
  - 把活动、玩法、规则和特征拆成可组合的概念，而不是为每个活动写一套代码
  - 说明配置的校验、预览、灰度和回滚
  - 说明灵活性的边界，哪些交给配置，哪些必须由研发扩展
  - 考虑配置变更的权限、审计和对线上稳定性的影响
primaryCapability: professional.system-design
topics: [system-design, operations, feature-modeling, commercialization]
roles:
  - engineering
  - backend
  - product
  - operations
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring, promotion]
formats: [system-design]
followUps:
  - 运营配错了一个规则造成资损，系统应当怎样提前拦截？
  - 平台越来越灵活，也越来越难维护，你怎么控制？
source:
  - attribution: original
    label: "作者的系统设计题：活动与玩法搭建平台"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
