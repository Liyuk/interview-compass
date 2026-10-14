---
questionId: b-data-model-industry-interop
kind: question
status: published
locale: zh-CN
title: 你们业务内部的模型，和行业或合作方通用的模型是怎样交互的？
question: 你们业务内部的模型，和行业或合作方通用的模型是怎样交互的？字段、口径或概念对不上时，你怎么处理？
intent: 了解你如何在自己的模型和外部模型之间建立清晰的边界和转换，而不是让外部概念渗进内部模型。
signals:
  - 说明内部模型和外部模型的概念差异，而不只是字段名不同
  - 描述转换层或映射规则，以及谁负责维护
  - 指出口径对不上时的处理方式，以及对数据可信度的影响
  - 说明外部模型变化时，怎样限制对内部的影响
primaryCapability: domain-modeling.data-model
topics: [data-modeling, commercialization, system-design]
roles: [backend, data, product, engineering]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, promotion]
formats: [case, system-design]
followUps:
  - 合作方改了字段含义却没通知你，你怎么发现？
  - 什么时候你会选择直接采用外部模型，而不是自己建一套？
source:
  - attribution: original
    label: 作者的面试提问套路：自有模型与行业模型的交互
---
