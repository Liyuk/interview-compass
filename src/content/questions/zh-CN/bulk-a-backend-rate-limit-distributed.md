---
questionId: bulk-a-backend-rate-limit-distributed
kind: question
status: published
locale: zh-CN
title: 多实例限流语义
question: 一个 API 部署在多个实例后，单机限流器使总配额随实例数增加。你会根据突发容忍度、精度和故障策略设计限流，并说明状态放在哪里？
intent: 考察限流算法、分布式状态与故障权衡。
signals:
  - 澄清按用户/租户/接口的限流维度
  - 比较令牌桶或滑动窗口等语义
  - 说明集中状态、近似本地状态和存储故障的影响
  - 先明确额度窗口、突发流量和跨区误差容忍度
  - 比较本地令牌、集中协调或分层额度的失效行为
  - 说明额度状态如何恢复、审计和调整
primaryCapability: professional.system-design
topics:
  - backend
  - distributed-systems
  - system-design
roles:
  - backend
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: inspired
    label: System Design Primer：扩展与容量权衡
    url: https://github.com/donnemartin/system-design-primer
followUps: []
---
