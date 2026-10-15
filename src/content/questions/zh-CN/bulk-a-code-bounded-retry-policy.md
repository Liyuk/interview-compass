---
questionId: bulk-a-code-bounded-retry-policy
kind: question
status: published
locale: zh-CN
title: 可取消且有界的重试策略
question: 实现一个可配置重试封装：支持最大次数、退避、可取消等待，并可按错误类型决定是否重试。请说明接口如何避免无限重试与测试抖动。
intent: 考察函数抽象、取消语义和确定性验证。
signals:
  - 重试次数与首次调用次数定义清楚
  - 退避与等待通过可替换时钟/调度器控制
  - 确保取消、不可重试错误和最终错误有明确行为
primaryCapability: professional.coding-abstraction
topics:
  - backend
roles:
  - engineering
  - backend
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
  - coding
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
