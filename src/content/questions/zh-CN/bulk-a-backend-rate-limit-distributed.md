---
questionId: bulk-a-backend-rate-limit-distributed
kind: question
status: published
locale: zh-CN
title: "多个服务实例怎样共同控制 API 请求速度？"
question: "一个 API 部署在多个实例后，单机请求限制使总额度随实例数增加。你会根据突发容忍度、精度和故障策略设计请求速率限制，并说明状态放在哪里？"
intent: 考察限流算法、分布式状态与故障权衡。
signals:
  - 明确用户租户接口、窗口、突发和跨区误差，区分速率与并发上限。
  - 比较令牌桶、滑动窗口及分层配额的精度、延迟和存储成本。
  - 定义集中或本地近似状态的故障默认、恢复和调整，不假设总额度与实例数无关。
  - 用多实例突发、网络分区和状态恢复样例验证公平性、拒绝行为与审计。
primaryCapability: professional.system-design
topics:
  - backend
  - distributed-systems
  - system-design
roles:
  - backend
  - engineering
  - ai-engineer
  - data
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
