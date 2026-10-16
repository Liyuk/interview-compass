---
questionId: a-system-design-recommender-cost
kind: question
status: published
locale: zh-CN
title: 一个推荐系统的各项成本是怎么构成的？你会怎样在效果和成本之间取舍？
question: 一个推荐系统的各项成本是怎么构成的，包括召回、排序、特征服务、存储和实验？你会怎样在效果和成本之间取舍？
intent: 了解你是否能把推荐系统拆成环节来理解成本，并按环节的边际收益做取舍。
signals:
  - 按召回、排序、特征服务、存储和实验分别说明成本来源
  - 说明哪一环的成本随用户或候选规模增长最快
  - 用边际效果与边际成本比较各环节的投入，而不是整体削减
  - 说明成本优化如何通过实验验证没有损害体验
primaryCapability: professional.system-design
topics: [system-design, ai-engineering, resource-allocation]
roles:
  - ai-engineer
  - backend
  - data
  - engineering
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion]
formats: [case, system-design]
followUps:
  - 预算被砍掉三成，你先动哪一环？
  - 怎样证明一次成本优化没有悄悄损害长期指标？
source:
  - attribution: original
    label: 作者的面试提问套路：推荐系统的成本
---
