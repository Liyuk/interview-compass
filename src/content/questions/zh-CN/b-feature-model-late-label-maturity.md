---
questionId: b-feature-model-late-label-maturity
kind: question
status: published
locale: zh-CN
title: 训练标签延迟数周才确认，怎样避免把未成熟样本当成负例？
question: 一个风险模型使用后续违约作为训练标签，但许多交易在观察窗口结束前没有最终结果。你会怎样处理标签成熟度、样本纳入和回溯评估？
intent: 考察你能否区分真正的负例与尚未观察完的样本，并让训练数据与评估窗口保持时间一致。
signals:
  - 定义目标事件、观察窗口、标签成熟期与右删失样本。
  - 按时间切分训练与验证数据，避免给未成熟样本提前赋负标签。
  - 检查成熟样本覆盖变化是否引入人群或业务选择偏差。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - risk-management
roles:
  - data
  - ai-engineer
  - engineering
  - backend
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
formats:
  - case
followUps:
  - 如果上线周期短于标签成熟期，怎样评估早期效果？
  - 标签后续被更正时，如何保留训练数据版本与已发布指标？
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
