---
questionId: a-distributed-systems-partition-key-hotspot
kind: question
status: published
locale: zh-CN
title: 分片后总体容量充足，但少数租户的热点键仍持续超载。你会怎样重新评估分区策略？
question: 分片后总体容量充足，但少数租户的热点键仍持续超载。你会怎样重新评估分区策略？
intent: 考察你能否把数据访问分布、键选择、热点隔离和查询语义结合起来，而非只增加机器。
signals:
  - 用租户、时间和请求类型的分布定位热点来源。
  - 比较重新分片、拆分热点租户、复合键和局部缓存的影响。
  - 说明迁移期间如何维持读写正确性并验证负载均衡。
primaryCapability: professional.system-design
topics:
  - distributed-systems
  - system-design
  - debugging
roles:
  - backend
  - data
  - engineering
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
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果热点键不能被拆分且查询必须保持排序，你有哪些折中？
  - 如何避免加盐后的写入分散让读取和去重更复杂？
---
