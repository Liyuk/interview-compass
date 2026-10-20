---
questionId: next-cs-007
kind: question
status: published
locale: zh-CN
title: 浮点误差何时会变成业务故障？
question: 服务用浮点数累计金额，长期运行后对账差异逐渐扩大。你会怎样确定误差来源，并重构计算与迁移历史数据？
intent: 考察数值表示、舍入规则与业务不变量之间的联系。
signals:
  - 识别累计误差和不同系统的舍入边界。
  - 选择定点或整数单位并定义币种精度。
  - 设计历史重算、差异对账和渐进切换。
primaryCapability: professional.computer-science
topics:
  - programming-languages
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
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
  - 税率或汇率变化时怎样重现原账单？
  - 何时保留原始输入而不只保存结果？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
