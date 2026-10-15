---
questionId: wave16-domain-024
kind: question
status: published
locale: zh-CN
title: 在线特征缺失时默认值是否会掩盖采集故障？
question: 一个风险特征缺失时系统自动填 0，模型延迟和错误率稳定，但最近拒绝决定的比例显著变化。你会怎样判断默认值是否安全？
intent: 考察缺失语义、分布监控和业务结果护栏。
signals:
  - 区分真实零值、未知和采集失败。
  - 监控缺失率、默认值比例和分群影响。
  - 设定触发回退、人工审查或暂停模型的阈值。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - metrics
roles:
  - data
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
  - 默认值如何进入模型训练与评测？
  - 什么条件下应拒绝预测而非补值？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
