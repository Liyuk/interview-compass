---
questionId: a-engineering-systems-dependency-change
kind: question
status: published
locale: zh-CN
title: 你的方案依赖一个底层服务或库。如果它发生重大变化，你会怎样迁移、回退或替换？
question: "你的方案依赖一个底层服务或库。如果它发生重大变化，你会怎样迁移、回退到保留核心功能的方案，或替换它？"
intent: 了解你是否清楚自己依赖的边界，并为依赖的变化提前设计了退路。
signals:
  - 先说明这个依赖提供什么、边界在哪里
  - 给出迁移、降级、回滚或替换中的具体做法
  - 指出今天的设计里哪些部分承受不了这种变化
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - risk-management
roles:
  - engineering
  - backend
  - frontend
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - promotion
formats:
  - case
  - system-design
followUps:
  - 你怎么知道自己真的理解这个依赖的底层机制？
  - 有哪些依赖是你有意不做抽象的？
source:
  - attribution: derived
    label: 博客《职场发展问题：晋升与面试前的完整自查清单》
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/08/career-growth-ten-questions/zh.md
---
