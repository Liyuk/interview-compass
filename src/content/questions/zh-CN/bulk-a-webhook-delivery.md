---
questionId: bulk-a-webhook-delivery
kind: question
status: published
locale: zh-CN
title: 对外 Webhook 投递
question: 一个多租户平台要向客户系统投递事件 Webhook，如何设计投递链路，并处理客户端长期不可用的情况？
intent: 了解如何将投递可靠性、租户隔离、重复事件和运营可观测性放入同一设计。
signals:
  - 说明事件产生、排队、投递和确认之间的边界
  - 讨论重试、去重与顺序保证各自的适用范围
  - 考虑租户级限流、失败隔离和可追踪的重放
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - reliability
roles:
  - backend
  - engineering
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
    label: System Design Primer：分布式系统与可靠性设计
    url: https://github.com/donnemartin/system-design-primer
---
