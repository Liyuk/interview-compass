---
questionId: a-coding-abstraction-form-state-boundaries
kind: question
status: published
locale: zh-CN
title: 表单状态失控时，抽象边界画在哪里？
question: 一个报名表单会因为重复提交和弱网重试出现状态不一致。你会怎样梳理它的状态与转换，并决定哪些逻辑抽成独立单元？
intent: 了解你能否把交互说成有限的状态与转换，并据此选择抽象边界，而不是不断堆叠条件分支。
signals:
  - 列出状态与触发事件，而不只是描述界面
  - 指出哪些部分取决于接口约束，例如幂等（重复请求不会重复执行）
  - 说明用哪些测试覆盖关键路径
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - frameworks
roles:
  - engineering
  - frontend
  - mobile
  - backend
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - promotion
formats:
  - coding
  - case
followUps:
  - 状态转换的规则放在组件里还是单独的模块里？各自的代价是什么？
source:
  - attribution: derived
    label: 筛选人和面试官到底在看什么（简历：用问题—行动—结果替换职责清单）
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
