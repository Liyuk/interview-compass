---
questionId: b-model-evolution-eligibility-history
kind: question
status: published
locale: zh-CN
title: 资格规则变更后，怎样解释用户过去为何符合条件？
question: 一个服务资格判断从“当前账户状态”改为“申请时的账户状态加风险审核结果”。客服需要解释历史拒绝原因，审计也要求复现当时的判断。你会怎样演进规则和数据模型，避免新旧结果混为一谈？
intent: 了解你是否会把规则变化、事实发生时间和当前状态分开建模，并保留历史决定的可解释性。
signals:
  - 明确资格规则版本、生效时间、判断时可见的事实和审计来源
  - 区分重新计算历史决定与仅展示当时结果的业务场景
  - 设计兼容迁移、历史回放和抽样核对，说明何时停止旧规则
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - commercialization
  - execution
roles:
  - product
  - engineering
  - data
  - operations
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
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
followUps:
  - 如果历史申请缺少当时的风险结果，你会怎样表达无法重现的部分？
  - 什么变化需要新规则版本，什么变化只是修复输入数据？
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
