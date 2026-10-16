---
questionId: a-ai-engineering-agent-duplicate-side-effect
kind: question
status: published
locale: zh-CN
title: AI 助手请求退款超时后，怎样避免重复操作或超出用户授权？
question: AI 助手可以代表用户创建工单、退款或修改账户。它发起退款时发生超时，系统不知道退款是否已经完成；自动重试可能造成重复退款。你会怎样确认操作结果、控制重试，并确保操作仍在用户授权范围内？
intent: 考察你能否把 AI 助手的判断与实际操作分开，并妥善处理超时后结果不明、重试和权限变化。
signals:
  - 区分查询信息的操作和会改变数据或产生费用的操作。
  - 为每次操作保留唯一请求编号；说明怎样识别重复请求，或通过查询状态、人工确认来避免重复执行。
  - 按操作权限和可能造成的损失设置确认要求。
  - 说明超时、部分完成和结果暂时无法确认时，任务如何恢复或暂停。
  - 区分“同一请求的网络重试”和“AI 助手重新决定再做一次”。
  - 说明用户权限变化后，怎样停止尚未执行的操作并处理已经完成的部分。
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
  - senior-manager
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
---
