---
questionId: a-system-design-cross-system-consistency
kind: question
status: published
locale: zh-CN
title: 本地数据库更新后，还要同步缓存或发消息给下游，你怎样保证两边一致？一步失败了怎么兜底？
question: 一个需求里，本地数据库更新后，还要同步缓存或发消息给下游。你怎样保证这两个操作最终一致？网络抖动让其中一步失败时，你怎么兜底和补偿？
intent: 了解你对跨系统一致性的实际做法，并能说清各种方案的前提和代价，而不是只背方案名。
signals:
  - 说明所选方案及其前提，例如先写库再发消息的顺序、事务消息或本地消息表
  - 说明失败时的重试、幂等和补偿，以及怎样发现并修复不一致
  - 指出这个方案在哪种极端情况下仍会出问题，并说明能否接受
  - 用自己写过或遇到过的具体例子，而不是只讲概念
primaryCapability: professional.system-design
topics: [system-design, distributed-systems, databases, backend]
roles: [backend, engineering]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [case, system-design]
followUps:
  - 你用 Redis 做了分布式锁，主从切换时锁丢了，你当时考虑过这个情形吗？
  - 下游收到了重复的消息，你怎么保证不重复处理？
source:
  - attribution: original
    label: "作者的分级面试框架，中级工程师"
---
