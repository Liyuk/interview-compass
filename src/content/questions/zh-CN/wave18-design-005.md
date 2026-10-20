---
questionId: wave18-design-005
kind: question
status: published
locale: zh-CN
title: 设计团队需要复用组件，但新场景不断要求例外，怎样决定扩展还是分叉？
question: 公共组件已有多种变体，新增业务希望再增加特殊状态。你会怎样比较复用价值、复杂度、可访问性和未来维护成本？
intent: 考察能否评估“组件边界与设计系统治理成本”，说清约束，并用证据支撑决策。
signals:
  - "检查现有变体数量、各变体的使用频率，以及新增请求代表稳定需求还是一次性例外。"
  - "从接口复杂度、无障碍行为和测试负担比较扩展公共组件与单独分叉。"
  - "核实现有使用方能否安全采用改动，以及分叉是否会重复维护或阻碍必要差异。"
  - "设定复用或复杂度门槛，并明确由谁持续复核组件健康度和迁移成本。"
primaryCapability: delivery.decomposition
topics:
  - product-thinking
  - execution
roles:
  - design
  - product
  - engineering
  - frontend
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
source:
  - attribution: original
    label: Interview Compass coverage-led original expansion batch 2026-10-17 C
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
