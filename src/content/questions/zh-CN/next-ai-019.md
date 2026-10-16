---
questionId: next-ai-019
kind: question
status: published
locale: zh-CN
title: 离线评测样本里有大量近似重复题怎么办？
question: 评测集题目数量增加了，但很多题来自同一模板的轻微改写，模型分数因此显得稳定。你会怎样审查样本质量？
intent: 考察评测覆盖、独立性和置信度估计，而非只看样本数。
signals:
  - 按任务目标、场景和失效模式聚类样本。
  - 估计重复样本对指标和置信区间的影响。
  - 补充独立来源、难例和少数群体用例。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
roles:
  - ai-engineer
  - product
  - engineering
  - data
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
  - 如何区别同主题的有效变体和近重复？
  - 谁应审核评测集的代表性？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
