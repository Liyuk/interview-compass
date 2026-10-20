---
questionId: bulk-a-language-compiler-optimization-observable
kind: question
status: published
locale: zh-CN
title: 编译器优化与可观察行为
question: "请选择一种你熟悉的编程语言及其内存模型。编译器可能重排或消除代码：哪些程序行为允许改变，哪些外部可观察行为必须保持？请用并发或 I/O 示例说明。"
intent: 考察编译器优化边界及语言内存模型意识。
signals:
  - "明确所选语言及相关的可观察语义或内存模型规则。"
  - "用具体并发或副作用示例说明哪些变换允许、哪些会改变程序对外可见的行为。"
  - "区分源码顺序和机器指令顺序，不把一种语言的保证泛化到其他语言。"
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
