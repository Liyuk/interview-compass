---
questionId: bulk-a-notification-fanout
kind: question
status: published
locale: zh-CN
title: "大规模发送通知时，怎样尊重用户偏好？"
question: "产品要向数千万用户发送事务通知和可选营销通知，用户可以随时调整渠道偏好。你会如何设计通知发送流程？"
intent: 观察能否把通知语义、流量形态、偏好变化和供应商限制分层处理。
signals:
  - 区分事务通知与可选营销的业务必要性、许可与优先级，不把必要通知等同技术保证必达。
  - 定义偏好变更对排队消息的生效点、撤回条件和用户级去重范围。
  - 比较扇出、供应商配额、重试及失败隔离的时效成本。
  - 以送达回执、退信和用户结果核验完整链路，明确无法送达的替代路径与升级。
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - reliability
roles:
  - backend
  - engineering
  - operations
  - frontend
  - mobile
  - ai-engineer
  - data
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
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：消息队列与扇出模式
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
