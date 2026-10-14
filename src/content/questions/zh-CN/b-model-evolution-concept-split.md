---
questionId: b-model-evolution-concept-split
kind: question
status: published
locale: zh-CN
title: "一个“状态”字段承载了两个概念，怎样拆开又不破坏现有使用方？"
question: "订单上有一个 status 字段，同时表示履约进度和支付结果，多个团队都在读它。你会怎样把它拆成两个概念，并让旧数据和旧使用方平稳过渡？"
intent: "了解你如何识别被混在一起的业务概念，并规划兼容的过渡，而不是一次性替换。"
signals:
  - "先分别说明两个概念的取值和转换规则"
  - "给出过渡期里新旧并存的读写约定，以及结束条件"
  - "指出旧数据映射时无法确定归属的情形，并说明怎样处理"
primaryCapability: domain-modeling.model-evolution
topics: [data-modeling, databases]
roles: [backend, engineering, data]
responsibilityScopes: [multiple-teams]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, promotion]
formats: [case]
followUps:
  - "哪个使用方最可能被你的改动影响？你怎样提前发现？"
  - "过渡期结束后，旧字段怎样退出？"
source:
  - attribution: original
    label: "基于模型演进中常见的概念拆分问题原创编写"
---
