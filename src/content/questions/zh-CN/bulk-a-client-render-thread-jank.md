---
questionId: bulk-a-client-render-thread-jank
kind: question
status: published
locale: zh-CN
title: 客户端主线程卡顿
question: 一个列表页面滚动卡顿，但网络指标正常、内存也未明显增长。你会如何判断是主线程计算、布局/绘制还是锁等待导致？
intent: 考察客户端线程模型与帧时间分析。
signals:
  - 按帧预算识别超时发生阶段
  - 检查主线程任务、布局绘制和同步等待
  - 提出 profiler 或 trace 的验证办法
primaryCapability: professional.debugging
topics:
  - mobile
  - concurrency
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
  - debugging
source:
  - attribution: inspired
    label: Android Interview Questions — Android, Kotlin, lifecycle, and architecture topics
    url: https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md
---
