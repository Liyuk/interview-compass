---
questionId: a-system-design-cross-system-consistency
kind: question
status: published
locale: zh-CN
title: 数据库与缓存或消息同步时，怎样处理部分失败？
question: 本地数据库已更新，但缓存同步或下游消息发送失败。你会如何确保状态最终一致，并设计重试、补偿或人工处理？
intent: 了解你对跨系统一致性的实际做法，并能说清各种方案的前提和代价，而不是只背方案名。
signals:
  - 按提交和发送时间线明确双写失败窗口，说明需要维持的业务不变量。
  - 比较外盒、事务消息、重试或补偿等方案的前提与维护成本，不只列名称。
  - 说明怎样发现差异、去重和恢复，以及仍可能失败时的停止或人工路径。
  - 亲历回答说明本人行动与可核验结果；案例推演明确假设和验证计划，不要求编造亲历。
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - databases
  - backend
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
scenarios:
  - interview
  - hiring
formats:
  - case
  - system-design
followUps:
  - 你用 Redis 做了分布式锁，主从切换时锁丢了，你当时考虑过这个情形吗？
  - 下游收到了重复的消息，你怎么保证不重复处理？
source:
  - attribution: original
    label: 作者的分级面试框架，中级工程师
perspective: candidate
perspectiveReview: reviewed
qualityTier: core
weakAnswer: 把消息重试当成事务保证，没有说明重复消费、状态核对或无法自动恢复怎么办。
anchors:
  notPassing: 只列出消息队列或重试，没有指出部分失败窗口。
  passing: 说明数据库提交与消息发送之间可能出现的状态差异。
  excellent: 按业务不变量选择事务消息、补偿或幂等消费，并说明代价。
  exceptional: 设计差异发现、对账和可恢复路径，明确无法自动修复时的处理人。
---
