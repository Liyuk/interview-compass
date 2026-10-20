---
questionId: a-ai-engineering-feature-model-cost
kind: question
status: published
locale: zh-CN
title: 一个算法模型和它依赖的特征，真正的成本包括哪些？
question: 一个算法模型和它依赖的特征，真正的成本包括哪些？训练、推理、特征计算与存储、数据标注和维护分别怎么算，怎样判断某个特征值不值得保留？
intent: 了解你是否清楚模型和特征的全生命周期成本，并能用成本与收益来取舍。
signals:
  - 把成本拆成训练、推理、特征计算与存储、标注和长期维护
  - 估算单个特征的成本，并与它带来的效果提升对比
  - 指出容易被忽视的成本，例如在线特征的延迟和一致性维护
  - 说明下线或合并特征的判断依据和风险
primaryCapability: professional.ai-engineering
topics: [ai-engineering, feature-modeling, resource-allocation]
roles:
  - ai-engineer
  - data
  - backend
  - engineering
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion]
formats: [case, system-design]
followUps:
  - 一个特征提升很小但成本很高，你怎么决定？
  - 效果和成本之间，你最先优化哪一边？
source:
  - attribution: original
    label: 作者的面试提问套路：模型与特征的成本
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
