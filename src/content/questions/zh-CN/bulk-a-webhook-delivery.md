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
  - computer-networks
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
  - debugging
source:
  - attribution: inspired
    label: System Design Primer：分布式系统与可靠性设计
    url: https://github.com/donnemartin/system-design-primer
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
followUps:
  - 合作方要求“只发送一次”时，为什么发送方通常只能保证至少一次投递？如何通过事件标识、接收端幂等和可追踪重放定义双方契约？
  - 【Webhook 接收方故障时，怎样设置重试避免同步放大？】合作方接口故障后，平台按固定间隔重试，恢复瞬间请求量反而达到平时十倍。你会如何调整退避、抖动、队列隔离和重放方式？
  - 如何避免单一租户阻塞所有回调队列？
  - 对有顺序要求的事件，退避会产生什么影响？
---
