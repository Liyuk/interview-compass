---
questionId: wave16-delivery-069
kind: question
status: published
locale: zh-CN
title: 外部故障已恢复但客户数据可能仍不完整怎么办？
question: 第三方服务已经恢复，但故障期间的回调可能丢失。客户看到的状态与平台记录不一致。你会如何确认影响并沟通？
intent: 考察第三方服务恢复后能否补齐数据、通知客户并确认状态一致。
signals:
  - 对照双方事件标识和时间范围。
  - 建立重放（重新处理历史消息或任务）、对账和人工确认路径。
  - 明确受影响客户、恢复进度和剩余不确定性。
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - communication
roles:
  - operations
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
followUps:
  - 重放可能重复执行时如何防护？
  - 什么时候可以宣布数据恢复完成？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
---
