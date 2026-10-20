---
questionId: next-design-069
kind: question
status: published
title: 设计系统组件过于僵化时怎样决定扩展接口？
question: 多个产品团队通过 CSS 覆盖共享组件样式，升级后频繁回归。你会如何判断应增加配置、拆分组件还是保留例外？
intent: 考察共享抽象边界、使用证据和维护成本。
signals:
  - 统计真实变体和覆盖代码的共同原因。
  - 比较配置复杂度与组件分裂成本。
  - 用升级成本和一致性结果验证治理方案。
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - engineering-systems
roles:
  - design
  - frontend
  - engineering
  - mobile
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - 哪些需求应留在产品层？
  - 如何判断新增 API 只服务于单一特例？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
locale: zh-CN
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
