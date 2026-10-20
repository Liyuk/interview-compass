---
questionId: bulk-b-data-02
kind: question
status: published
locale: zh-CN
title: 客服工单被合并或拆分后，如何保留服务质量分析的一致性？
question: "客服会把重复工单合并，也会把一个复杂问题拆成多个处理单。设计服务质量数据模型时，你如何定义客户问题、工单记录、沟通接触记录和解决结果？"
intent: 了解候选人如何选择不被工作流操作扭曲的分析对象，并保留操作历史。
signals:
  - 区分客户问题、工单记录、沟通接触和最终解决
  - 支持合并拆分前后的身份关联与审计追溯
  - 说明不同质量指标适合使用的统计单位
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - metrics
roles:
  - data
  - product
  - engineering
  - backend
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - promotion
formats:
  - case
  - artifact-review
source:
  - attribution: derived
    label: 指标字典模板：把定义变成可复算的协作接口
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
