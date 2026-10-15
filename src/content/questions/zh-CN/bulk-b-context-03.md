---
questionId: bulk-b-context-03
kind: question
status: published
locale: zh-CN
title: 运营、产品和财务对一次促销的状态理解不同，你会怎样统一模型？
question: 促销结束后，运营认为活动已完成，产品认为订单仍在履约，财务则认为还不能结算。你会如何界定各自对象、状态和状态转换？
intent: 观察候选人如何将同一业务流程拆分为概念清楚、边界可协作的模型。
signals:
  - 识别活动、订单、履约和结算是相关但不同的对象
  - 为各对象定义状态语义和允许的转换
  - 解释对象之间的关联及状态不同步时的处理责任
primaryCapability: domain-modeling.product-project-model
topics:
  - product-thinking
  - data-modeling
  - operations
roles:
  - product
  - operations
  - data
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - promotion
formats:
  - case
source:
  - attribution: derived
    label: 产品判断：将跨职能流程画成可讨论的模型
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/02/engineer-product-judgment/zh.md
---
