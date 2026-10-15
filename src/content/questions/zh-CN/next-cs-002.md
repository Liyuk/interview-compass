---
questionId: next-cs-002
kind: question
status: published
locale: zh-CN
title: 读写锁会让这个服务更快吗？
question: 某个共享缓存读多写少，团队准备把互斥锁替换为读写锁。你会先收集什么证据，并如何判断复杂度是否值得？
intent: 考察能否基于锁竞争、临界区和实际延迟，而非读写比例直觉选择同步原语。
signals:
  - 测量锁等待、临界区耗时及并发分布。
  - 考虑写者饥饿、可重入性和实现开销。
  - 通过代表性负载比较吞吐、尾延迟和正确性。
primaryCapability: professional.computer-science
topics:
  - concurrency
  - databases
roles:
  - backend
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - 哪些工作负载会让读写锁反而更慢？
  - 你会怎样测试写者饥饿？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
