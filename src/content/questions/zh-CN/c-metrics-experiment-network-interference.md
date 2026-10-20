---
questionId: c-metrics-experiment-network-interference
kind: question
status: published
locale: zh-CN
title: 实验功能会影响对照组用户时，怎样解释实验结果？
question: 新功能鼓励用户邀请朋友，邀请者和朋友可能分在不同实验组。实验结果显著，但组间传播无法完全隔离。你会怎样评估结论？
intent: 判断是否识别用户间干扰、随机化单位和网络效应对因果推断的影响。
signals:
  - 还原邀请者与朋友的分组、实际触达和传播链，说明什么行为会跨组影响。
  - 区分统计显著、干预传播和业务效果，说明偏差方向能否判断及其假设。
  - 比较分组单位、集群或分时设计与敏感性检查的适用性，不要求所有方案都能完全消除干扰。
  - 明确可解释结论、残余不确定性和下一步验证，保留用户体验护栏。
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
roles:
  - data
  - product
  - marketing
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
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
  - planning
followUps:
  - 无法重做实验时，哪些分析可辅助决策？
  - 如何把长期网络效应纳入护栏？
  - 实验分组如何影响内容供给端？
  - 怎样判断样本量足以支持集群实验？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
