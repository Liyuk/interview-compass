---
questionId: f-team-design-expert-load-map
kind: question
status: published
locale: zh-CN
title: 关键专家成了多个团队的排队点，怎样调整组织边界？
question: 三支团队共享一位资深专家做架构评审，平均等待时间已超过两周，团队也不敢在没有他批准时发布。你会怎样判断是人员不足、知识集中还是决策机制设计问题，并选择改进方式？
intent: "考察你能否把专家排队问题还原为工作需求、知识分布和决策权设计，区分需要招聘的容量缺口与可通过授权/扩散解决的单点依赖。"
signals: ["量化评审需求、等待时间、返工、专家工时和发布依赖，区分咨询意见与正式审批。", "识别高风险判断中不可替代的知识，以及可通过文档、结对、轮值或标准扩大覆盖的部分。", "设置授权梯度和风险门槛，让团队在可控范围内独立决定。", "跟踪等待、缺陷、专家负荷及团队独立性，以证据决定新增岗位、培训或边界调整。"]
anchors:
  notPassing: "把等待归因于人员不够，没有量化或分析决策依赖。"
  passing: "量化等待并区分至少一种知识/权限瓶颈。"
  excellent: "配置风险分级授权或知识扩散，建立质量和独立性指标。"
  exceptional: "用试点和趋势证据比较招聘、授权及知识传播的成本收益，避免把责任转移给专家或降低关键风险控制。"
primaryCapability: people-organization.team-design
topics:
  - management
  - resource-allocation
  - execution
  - team-planning
roles:
  - engineering
  - manager
  - pmo
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - multiple-teams
  - organization
careerTracks:
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
weakAnswer: "要求专家加班或直接新增人员，没有区分审批与咨询、知识集中和容量不足。"
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
followUps: ["如果专家不信任授权，因为过去出现过事故，你会怎样设计低风险的授权试点？", "哪类指标会证明新增专家比扩散现有能力更有效？"]
relatedQuestions: []
perspective: "manager"
perspectiveReview: "reviewed"
qualityTier: "core"

---
