---
questionId: next-domain-027
kind: question
status: published
title: 批量特征回填应使用新口径还是原口径？
question: 特征定义修复后，模型团队要回填历史数据。训练复现要求保留原始版本，业务报表又希望显示修正结果。你会如何设计双视图？
intent: 考察特征版本、时点语义与历史重算边界。
signals:
  - 保留特征定义版本和原始生成结果。
  - 区分当时可用值与事后修正值。
  - 明确训练、线上推理和报表各自读取哪个版本。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - ai-engineering
roles:
  - data
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - 何时应使旧模型绑定旧特征版本？
  - 如何避免同一历史行被重复回填？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
locale: zh-CN
---
