---
questionId: d-operations-incident-command-authority-conflict
kind: question
status: published
locale: zh-CN
title: 事故现场多个负责人都在下指令时，怎样恢复统一指挥？
question: 生产事故中，技术负责人要求关闭功能，业务负责人要求继续接单，客服团队又承诺了恢复时间。现场成员收到相互冲突的指令。你会如何组织响应？
intent: 考察能否快速明确事故指挥权、事实来源、风险接受者和信息发布节奏。
signals:
  - 按已有应急授权确认单一事故协调者和技术执行负责人；角色不清时迅速升级确认。
  - 区分技术恢复判断、业务风险接受与客户沟通责任，不让相互矛盾的口头要求直接变成操作。
  - 使用统一事实记录、决策日志与更新时间，保留异议和需要有权者决定的问题。
  - 核验缓解动作之间的冲突、回退或补偿路径，并明确哪些风险不能擅自接受。
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - communication
  - management
roles:
  - operations
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
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps:
  - 如果指挥者不熟悉系统，怎样调用专家而不产生多头指挥？
  - 如何纠正已经发出的错误恢复时间？
  - 当证据不完整时如何采取可逆（可以安全撤回）措施？
  - 事后怎样复核决策而不归咎个人？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 I
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
relatedQuestions: []
---
