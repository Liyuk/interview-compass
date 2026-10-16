---
questionId: bulk-b-model-evolution-02
kind: question
status: published
locale: zh-CN
title: 供应商把“已交付”状态重新拆成“已发出”和“已签收”，如何处理历史数据的统计规则？
question: 供应商 API 将过去单一的“已交付”状态拆为“已发出”和“已签收”，但历史数据没有区分依据。你会如何更新领域模型、对外接口约定和相关报表？
intent: 考察候选人是否区分新增信息与可从旧数据推导的信息，并清楚呈现历史数据的证据边界。
signals:
  - 避免为历史记录伪造无法观察到的状态细节
  - 设计兼容的状态转换和下游消费者升级路径
  - 标示新旧数据的可比性边界及报表解释方式
  - 明确“状态模型迁移中的历史解释”涉及的业务对象、粒度、状态与时间定义。
  - 追溯事实来源、规则负责人、历史变更与异常路径，避免概念或责任混淆。
  - 说明如何通过样例、对账、回算或审计记录验证模型保持业务含义。
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - product-thinking
  - risk-management
roles:
  - product
  - data
  - engineering
  - operations
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - promotion
formats:
  - case
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：数据契约变化与消费者兼容
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
relatedQuestions: []
---
