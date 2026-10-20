---
questionId: bulk-a-backend-pagination-consistency
kind: question
status: published
locale: zh-CN
title: 并发写入下的分页一致性
question: 管理后台按创建时间翻页时，新增和删除会让用户看到重复或漏项。你会比较 offset 与游标分页，并定义何种一致性预期？
intent: 考察分页协议、排序稳定性和并发数据变化。
signals:
  - "先定义翻页期间新增、删除和更新记录应如何对用户呈现。"
  - "比较 offset 与游标边界，并使用稳定排序和唯一次级键。"
  - "说明是否需要快照，以及游标如何绑定查询条件或版本。"
  - "用并发变更测试重复、漏项和边界记录行为。"
primaryCapability: professional.system-design
topics:
  - backend
  - databases
  - system-design
  - data-modeling
roles:
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - system-design
  - case
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
followUps:
  - 列表使用游标分页，用户浏览期间记录不断新增、删除和更新。产品要求翻页不重复也不漏掉符合条件的记录。你会如何定义语义？
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
