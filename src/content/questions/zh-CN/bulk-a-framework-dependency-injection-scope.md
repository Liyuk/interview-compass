---
questionId: bulk-a-framework-dependency-injection-scope
kind: question
status: published
locale: zh-CN
title: 依赖注入作用域与状态泄漏
question: 一个服务被声明为单例后，不同用户请求偶尔读到彼此的临时状态。你会如何解释依赖注入生命周期与请求作用域，并设计安全的对象边界？
intent: 考察框架对象生命周期和并发共享状态风险。
signals:
  - 能区分单例、请求级与临时对象生命周期
  - 识别把请求数据放入共享实例的风险
  - 提出无状态服务或显式请求上下文设计
primaryCapability: professional.coding-abstraction
topics:
  - backend
  - frameworks
roles:
  - backend
  - engineering
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
---
