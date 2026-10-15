---
questionId: bulk-d-dependency-ownership-boundary
kind: question
status: published
locale: zh-CN
title: 并行团队合并功能时如何指定集成责任
question: 两个团队分别按各自接口完成了功能，但组合后出现状态冲突，原计划没有为联合验收预留负责人。你会如何补上集成决策和验证责任？
intent: 考察跨团队集成责任是否覆盖团队各自完成之后的系统结果。
signals:
  - 定位冲突的共享状态、接口假设和责任断点。
  - 指定能代表端到端结果的决策与验收负责人。
  - 补充联合测试、问题分流和上线决策流程。
primaryCapability: delivery.capacity-planning
topics:
  - execution
  - communication
  - risk-management
roles:
  - engineering
  - product
  - pmo
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - self-reflection
formats:
  - behavioral
source:
  - attribution: derived
    label: 产品资源排不上，研发接下项目后怎么推进？
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/consulting/2026/09/product-engineer-without-boundaries/zh.md
---
