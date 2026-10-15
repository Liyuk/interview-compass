---
questionId: bulk-a-client-offline-write-conflict
kind: question
status: published
locale: zh-CN
title: 离线编辑与冲突合并
question: 客户端离线期间允许编辑资料，恢复联网后服务端同一字段也已被修改。你会怎样设计版本检测、冲突呈现和写入策略？
intent: 考察移动端离线数据同步和冲突语义。
signals:
  - 使用版本号或等价机制识别并发修改
  - 避免静默覆盖另一方的更新
  - 按字段风险设计合并、用户选择或拒绝策略
primaryCapability: professional.system-design
topics:
  - mobile
  - distributed-systems
roles:
  - mobile
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
    label: Android Interview Questions — Android, Kotlin, lifecycle, and architecture topics
    url: https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md
---
