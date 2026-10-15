---
questionId: wave16-domain-025
kind: question
status: published
locale: zh-CN
title: 维度表重命名后历史报表需要保持原标签吗？
question: 产品把“基础版”改名为“团队版”，但财务希望历史账单保留购买时名称，营销报表则要统一新名称。你会怎样建模？
intent: 考察维度历史、展示语义和报表目的的分离。
signals:
  - 区分稳定 ID、历史名称和当前名称。
  - 明确不同报表使用的时间语义。
  - 防止名称变化意外改写财务凭证。
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - operations
roles:
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
  - promotion
formats:
  - case
followUps:
  - 翻译或地区名称变化属于同一种历史吗？
  - 迁移用户界面缓存时如何兼容旧链接？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
