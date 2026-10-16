---
questionId: a-system-design-search-system
kind: question
status: published
locale: zh-CN
title: 怎样设计一个搜索系统？中文怎样分词，特征怎样构造？
question: 怎样设计一个搜索系统？索引、召回、排序怎样分工，中文分词和特征怎样构造，怎样评估搜索的好坏？
intent: 了解你能否把搜索拆成索引、召回和排序几个环节，并理解中文处理和效果评估的难点。
signals:
  - 说明倒排索引、召回和排序各自的职责，以及它们之间的取舍
  - 说明中文分词的难点，例如歧义和新词，以及对召回的影响
  - 说明查询理解和排序特征，例如文本相关性、质量和个性化
  - 用离线与线上指标评估效果，并知道它们各自的局限
primaryCapability: professional.system-design
topics: [system-design, ai-engineering, feature-modeling, databases]
roles:
  - engineering
  - backend
  - data
  - ai-engineer
  - frontend
  - mobile
  - product
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - 用户搜新出现的词却没有结果，你怎么发现并处理？
  - 索引更新要在几秒内生效，你怎么设计？
source:
  - attribution: original
    label: "作者的系统设计题：搜索系统"
---
