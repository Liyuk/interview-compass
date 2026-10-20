---
questionId: bulk-a-cache-coherence-sharing
kind: question
status: published
locale: zh-CN
title: CPU 缓存一致性与共享写入
question: 多核程序中两个线程各自修改不同字段，性能却随核心数增加而下降。请解释缓存行共享可能怎样造成这种现象，以及代码层面如何验证。
intent: 考察硬件缓存一致性与并发性能之间的联系。
signals:
  - 能说明缓存行而非字段是常见一致性粒度
  - 指出伪共享可能导致缓存行反复失效
  - 提出布局调整或性能计数器验证
primaryCapability: professional.computer-science
topics:
  - concurrency
roles:
  - engineering
  - backend
  - mobile
  - ai-engineer
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
  - knowledge
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
