---
questionId: bulk-a-notification-fanout
kind: question
status: published
locale: zh-CN
title: 通知扇出与用户偏好
question: 产品要向数千万用户发送事务通知和可选营销通知，用户可以随时调整渠道偏好。如何设计扇出与发送链路？
intent: 观察能否把通知语义、流量形态、偏好变化和供应商限制分层处理。
signals:
  - 区分必须送达的事务通知与可抑制的营销消息
  - 说明偏好变更与已排队消息之间的生效规则
  - 考虑扇出延迟、渠道配额、退信和用户级去重
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - reliability
roles:
  - backend
  - engineering
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：消息队列与扇出模式
    url: https://github.com/donnemartin/system-design-primer
---
