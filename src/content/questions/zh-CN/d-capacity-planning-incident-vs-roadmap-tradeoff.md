---
questionId: d-capacity-planning-incident-vs-roadmap-tradeoff
kind: question
status: published
locale: zh-CN
title: 事故工作长期挤占路线图时，怎样决定稳定性投入和交付目标？
question: 团队每个迭代都被事故和恢复任务打断，路线图连续延期；管理层要求保持既定日期，同时不希望增加人手。你会如何提出容量和目标调整？
intent: 考察能否把事故负荷作为可测量的工作需求，并形成稳定性投资与承诺的取舍。
signals:
  - 按类别和周期核验事故、中断、恢复耗时与复发原因，将其计入真实容量。
  - 比较应急处理、复发预防和功能工作，说明持续成本及被挤出的结果。
  - 依据历史分布和服务承诺提出预留、轮值或稳定性投入，说明容量比例的不确定性。
  - 由有权负责人确认范围、日期或服务等级的取舍，设置超限升级和复核条件，不以隐性加班补缺口。
primaryCapability: delivery.capacity-planning
topics:
  - resource-allocation
  - reliability
  - planning
roles:
  - engineering
  - operations
  - manager
  - frontend
  - backend
  - mobile
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
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps:
  - 如何防止长期预留容量变成低效缓冲？
  - 什么指标证明稳定性投资已减少中断而非只增加工作？
  - 历史数据不足时怎样逐步校准缓冲比例？
  - 业务不接受缓冲时，怎样说明承诺风险？
  - 如果连续几个季度缓冲没有被用完，应该如何调整？
  - 如何让业务方理解缓冲不是隐性闲置？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 J
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C/D
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C
relatedQuestions: []
---
