---
questionId: e-communication-customer-impact-notice
kind: question
status: published
locale: zh-CN
title: 服务影响范围未明时，怎样及时通知客户？
question: 你发现一项故障可能影响客户数据，但受影响名单和恢复时间都未知。你会怎样组织第一条通知和后续更新？
intent: "考察你在故障范围和恢复时间未明时，能否及时提供准确首报、客户可采取的动作、下一更新时间，并随证据变化负责地更正。"
signals: ["分开已确认影响、可能影响和未知范围，避免无依据承诺或淡化风险。", "说明正在采取的保护措施、客户需要做什么、求助渠道和责任人。", "给出下一次更新的时间，即使没有新结果也按约更新。", "若影响扩大或早期信息错误，保留版本并明确纠正和后续调查。"]
anchors:
  notPassing: "只发笼统故障通知，没有行动或未知项。"
  passing: "说明已知影响、保护措施和下一更新时间。"
  excellent: "以事实边界发首报并持续更新，对错误信息做可追溯更正。"
  exceptional: "根据严重度区分受众和渠道，建立负责人的更新节奏、客户恢复指导和事后复核，同时不把暂定信息伪装成定论。"
primaryCapability: collaboration.communication
topics:
  - communication
  - risk-management
  - operations
roles:
  - operations
  - product
  - engineering
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
scenarios:
  - interview
  - operations-review
formats:
  - behavioral
followUps: ["哪些内容必须先核实，哪些可以标为暂定后先行告知？", "如果首报后发现影响更严重，怎样更正并解释早期判断的依据？"]
weakAnswer: "等全部根因和受影响用户确认后才通知，或先承诺未经验证的恢复时间。"
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
