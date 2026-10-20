---
questionId: d-capacity-planning-incident-vs-roadmap-tradeoff
kind: question
status: published
locale: zh-CN
title: 事故工作长期挤占路线图时，怎样决定稳定性投入和交付目标？
question: 团队每个迭代都被事故和恢复任务打断，路线图连续延期；管理层要求保持既定日期，同时不希望增加人手。你会如何提出容量和目标调整？
intent: "考察你能否把事故处理作为真实容量需求，用历史证据比较救火、预防和路线图投入，并推动有权者明确日期、范围或服务目标的取舍。"
signals: ["按类别统计事故、中断、恢复工时与复发，区分计划内支持和不可预测负荷。", "估算重复事故的持续成本并比较预防投资、产品交付与服务承诺的结果。", "用历史分布和不确定区间提出容量预留、轮值或稳定性方案，避免把缓冲伪装成确定比例。", "明确谁有权调整日期、范围或服务等级，并设超阈值升级和复核条件。"]
anchors:
  notPassing: "只要求增加缓冲或加人，没有基线与取舍。"
  passing: "用历史事故和恢复负荷估算容量，并指出预防投资的价值。"
  excellent: "比较现实产能、稳定性与业务承诺，给出不确定区间、决策权限及升级阈值。"
  exceptional: "用复发率和服务结果验证投入成效，建立容量调整机制，并在资源不变时让业务明确接受范围、日期或风险。"
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
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps: ["怎样证明稳定性投入减少了中断，而不是只把更多工时放进“可靠性”项目？", "如果业务坚持日期不变且不接受缓冲，你会怎样量化承诺风险并要求作出选择？"]
weakAnswer: "把路线图延期归咎于事故，却没有测量事故容量、区分预防与应急，也没要求决策者承担承诺取舍。"
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 J
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C/D
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C
relatedQuestions: []
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
