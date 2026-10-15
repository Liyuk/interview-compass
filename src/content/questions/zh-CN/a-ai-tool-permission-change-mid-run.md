---
questionId: a-ai-tool-permission-change-mid-run
kind: question
status: published
locale: zh-CN
title: Agent 运行期间用户权限发生变化时，怎样防止工具越权？
question: 一个多步骤 Agent 在开始时读取了项目权限，执行到第三步时用户被移出项目，但任务仍持有已签发的工具令牌。你会如何设计权限检查和取消语义？
intent: 考察能否把身份授权、短期凭证、运行时撤销和副作用边界纳入 Agent 工具设计。
signals:
  - 明确权限是在任务创建时还是每次调用时校验。
  - 缩短凭证有效期并限制可执行资源和操作。
  - 定义撤权事件传播、在途任务中断和已发生副作用的补救。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
  - distributed-systems
roles:
  - ai-engineer
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps:
  - 哪些工具调用适合要求逐步确认？
  - 如何审计授权变化前后 Agent 做过的动作？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
---
