---
questionId: bulk-a-btree-vs-lsm-write-profile
kind: question
status: published
locale: zh-CN
title: B 树与 LSM 的负载取舍
question: 某存储服务从读多写少变成持续高写入，团队在 B 树和 LSM 路线间评估。你会根据哪些负载特征比较两者，并关注哪些读写放大代价？
intent: 考察索引存储结构与工作负载之间的适配判断。
signals:
  - 能说明两类结构的大体写入路径差异
  - 会结合读写比例、范围查询或更新模式讨论
  - 能指出写放大、读放大或压实成本等代价
primaryCapability: professional.computer-science
topics:
  - databases
roles:
  - backend
  - data
  - engineering
  - ai-engineer
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
  - case
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
