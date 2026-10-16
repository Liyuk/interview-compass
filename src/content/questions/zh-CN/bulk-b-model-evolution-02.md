---
questionId: bulk-b-model-evolution-02
kind: question
status: published
locale: zh-CN
title: 供应商把“已交付”状态重新拆成“已发出”和“已签收”，如何处理历史数据的统计规则？
question: 供应商 API 将过去单一的“已交付”状态拆为“已发出”和“已签收”，但历史数据没有区分依据。你会如何更新领域模型、对外接口约定和相关报表？
intent: 考察候选人是否区分新增信息与可从旧数据推导的信息，并清楚呈现历史数据的证据边界。
signals:
  - 分别定义新状态与旧状态的证据含义，不为历史数据伪造发出或签收细节。
  - 盘点接口报表消费方，比较未知状态、兼容映射和新旧并行的条件。
  - 标明新旧数据的可比性与负责人，用历史样例和消费者确认验证迁移。
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
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
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
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：数据契约变化与消费者兼容
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
relatedQuestions: []
---
