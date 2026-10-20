---
questionId: bulk-a-code-concurrent-expiring-map
kind: question
status: published
locale: zh-CN
title: 并发过期映射
question: 请实现一个支持并发读写、按条目过期并可清理过期数据的映射。你会如何定义过期语义、同步边界和确定性测试？
intent: 考察并发数据结构、时间抽象与可测试性。
signals:
  - 定义过期依据、读取可见性、更新与清理的先后关系，而非只加一个时间字段。
  - 比较同步或分区方式在正确性、吞吐和维护成本上的取舍，明确不变量。
  - 通过可替换时钟与受控调度，验证并发读写、到期更新和清理竞态。
  - 检查闲置条目的资源回收、关闭行为及实际内存边界。
primaryCapability: professional.coding-abstraction
topics:
  - concurrency
  - programming-languages
  - backend
  - frontend
  - data-structures
roles:
  - engineering
  - backend
  - frontend
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
  - promotion
formats:
  - coding
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - "读取已过期条目是否应续期？条目在读取过程中到期时，调用方应观察到什么行为？"
  - "删除与过期清理同时发生时应保证什么不变量，你会怎样测试？"
  - "持续写入时，怎样证明过期条目最终被回收且内存保持有界？"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
