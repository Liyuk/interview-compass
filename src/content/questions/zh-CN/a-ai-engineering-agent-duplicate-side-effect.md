---
questionId: a-ai-engineering-agent-duplicate-side-effect
kind: question
status: published
locale: zh-CN
title: AI 助手请求退款超时后，怎样避免重复操作或超出用户授权？
question: AI 助手可以代表用户创建工单、退款或修改账户。它发起退款时发生超时，系统不知道退款是否已经完成；自动重试可能造成重复退款。你会怎样确认操作结果、控制重试，并确保操作仍在用户授权范围内？
intent: 考察你能否把 AI 助手的判断与实际操作分开，并妥善处理超时后结果不明、重试和权限变化。
signals:
  - 区分可安全重试的查询与退款等有副作用操作，并说明各自的授权要求。
  - 为单次用户意图设置幂等标识，说明服务如何识别同一请求的网络重试。
  - 遇到超时、部分完成或未知状态时先核实结果；无法确认就暂停并对账。
  - 用户授权变化后停止尚未执行的动作，并明确已完成部分的补偿责任。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - security
  - distributed-systems
roles:
  - ai-engineer
  - backend
  - engineering
  - frontend
  - mobile
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - operations-review
formats:
  - system-design
  - case
followUps:
  - 合作方既不支持重复请求保护，也暂时无法查询退款状态时，你会怎样暂停、核实和恢复任务？
  - 怎样让用户知道任务仍在处理中，而不把未知状态说成已完成？
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: inspired
    label: Landed AI Engineer Interview：Agent 工具调用可靠性
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
relatedQuestions: []
perspective: candidate
perspectiveReview: reviewed
qualityTier: core
weakAnswer: 把超时后一律重试，并把模型再次发起的退款当作网络重试处理。
anchors:
  notPassing: 把超时后重试视为安全，没有区分已完成、未完成和未知。
  passing: 使用幂等键或状态查询防止退款重复执行。
  excellent: 结合权限确认和副作用等级设计重试、暂停与人工确认。
  exceptional: 处理权限变化和合作方不可查询状态，给出对账与恢复责任。
---
