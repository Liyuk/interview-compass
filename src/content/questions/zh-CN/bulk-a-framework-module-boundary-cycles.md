---
questionId: bulk-a-framework-module-boundary-cycles
kind: question
status: published
locale: zh-CN
title: 模块依赖环与边界重整
question: 两个模块开始互相依赖，拆分后反而要暴露大量内部类型。你会如何判断共享概念、依赖方向和模块边界是否合理？
intent: 考察模块化抽象、依赖关系和封装边界。
signals:
  - 从变化原因与所有权分析模块职责
  - 能说明依赖环带来的测试与发布问题
  - 提出稳定接口或重新划分边界的验证依据
primaryCapability: professional.coding-abstraction
topics:
  - frameworks
  - engineering-systems
roles:
  - engineering
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
  - case
source:
  - attribution: inspired
    label: System Design Primer — requirements, constraints, and trade-offs
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
---
