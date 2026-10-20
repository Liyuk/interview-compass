---
questionId: a-system-design-article-publisher
kind: question
status: published
locale: zh-CN
title: 怎样设计一个文章编辑和发布系统？
question: 怎样设计一个文章编辑和发布系统？草稿、审核、定时发布、多渠道分发和事后修改，状态和数据应该怎样组织？
intent: 了解你是否能把一个内容的生命周期建模成清晰的状态和流程，并处理发布时的一致性和回滚。
signals:
  - 用明确的状态和转换描述草稿、审核、发布和下线，并说明谁能触发
  - 区分内容、版本和已发布的快照
  - 考虑定时发布和多渠道分发的失败重试与幂等（重复请求不会重复执行）
  - 说明发布后的修改和撤回怎样影响已经分发出去的内容
primaryCapability: professional.system-design
topics:
  - system-design
  - backend
  - frontend
roles:
  - engineering
  - backend
  - frontend
  - product
  - mobile
  - ai-engineer
  - operations
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
followUps:
  - 某个渠道发布失败而其他成功，用户看到什么？
  - 内容需要紧急下线，整条链路怎么在几分钟内完成？
source:
  - attribution: original
    label: 作者的系统设计题：文章编辑与发布器
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
