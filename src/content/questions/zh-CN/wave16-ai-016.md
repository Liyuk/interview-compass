---
questionId: wave16-ai-016
kind: question
status: published
locale: zh-CN
title: 向量库删除成功但旧片段仍被检索怎么办？
question: 用户要求删除某份文档，主存储确认删除，但异步索引和缓存仍返回旧片段。你会怎样设计删除传播和完成状态？
intent: 考察多副本删除、可见性承诺和异步清理证明。
signals:
  - 列出原文、分块、向量、缓存和备份副本。
  - 区分请求受理、停止新检索和彻底清理状态。
  - 设计可重试的删除事件与抽样验证。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - data-modeling
roles:
  - ai-engineer
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
  - 清理期间如何避免回答继续引用旧材料？
  - 失败的下游如何告警和补偿？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
