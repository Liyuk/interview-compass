---
questionId: bulk-a-language-compiler-optimization-observable
kind: question
status: published
locale: zh-CN
title: 编译器优化与可观察行为
question: 编译器可能重排或消除代码。哪些程序行为允许优化器改变，哪些外部可观察行为必须保持？请用一个并发或 I/O 例子说明。
intent: 考察编译器优化边界及语言内存模型意识。
signals:
  - 能说明优化需保持语言规定的可观察语义
  - 使用并发或副作用（改变外部状态的操作影响）示例解释边界
  - 避免把源码执行顺序等同于机器指令顺序
primaryCapability: professional.computer-science
topics:
  - compiler-design
  - programming-languages
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
