---
questionId: d-capacity-planning-interrupt-load-budget
kind: question
status: published
locale: zh-CN
title: 团队计划里应该给突发支持预留多少容量？
question: 团队连续几个季度都因线上支持、客户升级和跨团队求助偏离路线图。有人建议统一预留 20% 容量，但团队间中断频率差异很大。你会怎样确定预留方式？
intent: "考察你能否以中断的类别、波动和可消除性制定团队容量策略，不把统一预留比例当作跨团队通用答案。"
signals: ["按来源、严重度、发生频率、持续时间和集中时段拆分历史中断。", "区分随机需求、可预测高峰、服务承诺和重复但可通过自动化/自助消除的工作。", "比较团队池、值班轮转、明确服务级别和容量预留对响应速度、连续工作与成本的影响。", "设预算超限、未使用容量和业务升级的规则，并用新数据定期调校。"]
anchors:
  notPassing: "照搬统一比例，没有基线。"
  passing: "按团队历史分类中断，提出可调整的预留策略。"
  excellent: "区分波动和可消除工作，比较策略对响应与专注时间的影响，并设超限动作。"
  exceptional: "按实际预测误差和服务结果迭代预算，同时把未使用容量和持续超载都作为策略校准信号。"
primaryCapability: delivery.capacity-planning
topics:
  - resource-allocation
  - planning
  - operations
roles:
  - manager
  - engineering
  - operations
  - pmo
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps: ["预留容量未被用完时，如何安排工作才能避免挤掉下一个高优先级中断的响应？", "什么数据会使你增加或减少某团队的中断预算？"]
weakAnswer: "按所有团队统一保留20%，未核对中断分布、重复来源、服务承诺和使用后的调节方式。"
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
