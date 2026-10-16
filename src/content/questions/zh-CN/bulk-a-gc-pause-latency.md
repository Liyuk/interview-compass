---
questionId: bulk-a-gc-pause-latency
kind: question
status: published
locale: zh-CN
title: 垃圾回收与尾延迟
question: 服务平均耗时稳定，但最慢 1% 的请求会周期性变慢，时间点与内存分配高峰接近。你会如何判断垃圾回收是否是原因，并区分其他暂停来源？
intent: 考察运行时内存管理与尾延迟证据分析。
signals:
  - 关联分配速率、回收周期与停顿记录
  - 不把时间相关性直接当因果结论
  - 提出与线程调度、I/O 或锁等待相区分的证据
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - backend
roles:
  - engineering
  - backend
  - frontend
  - mobile
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
  - case
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
relatedQuestions: []
---
