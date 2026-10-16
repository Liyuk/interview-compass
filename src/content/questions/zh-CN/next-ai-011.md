---
questionId: next-ai-011
kind: question
status: published
locale: zh-CN
title: 检索到的政策互相矛盾时，助手该怎样回答？
question: 知识库中两份仍有效的政策给出不同要求，检索分数也接近。助手不能自行选择对用户最方便的一条。你会设计什么回答和升级路径？
intent: 考察能否显式建模冲突、来源权威性和拒答边界。
signals:
  - 区分内容冲突与检索排序错误。
  - 根据权威等级、版本和生效范围处理证据。
  - 设计带引用的澄清、拒答或升级路径。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
roles:
  - ai-engineer
  - product
  - engineering
  - frontend
  - backend
  - mobile
  - operations
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
  - 如何向用户解释冲突而不暴露内部敏感信息？
  - 谁负责消除知识库中的权威性冲突？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
