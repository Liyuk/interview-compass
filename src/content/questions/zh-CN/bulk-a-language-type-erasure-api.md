---
questionId: bulk-a-language-type-erasure-api
kind: question
status: published
locale: zh-CN
title: 泛型类型擦除的接口影响
question: 一个库的泛型信息在运行时不可直接获得，导致反射或序列化代码无法按预期工作。请解释类型擦除会影响哪些运行时行为，并说明替代设计。
intent: 考察泛型编译模型与运行时类型信息边界。
signals:
  - 能描述编译期泛型与运行时表示的差异
  - 指出反射、重载或序列化中的相关限制
  - 提出显式类型令牌或调整接口的方案
primaryCapability: professional.computer-science
topics:
  - programming-languages
roles:
  - backend
  - engineering
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
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
