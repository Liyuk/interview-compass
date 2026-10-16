---
questionId: c-metrics-experiment-network-interference
kind: question
status: published
locale: zh-CN
title: 实验功能会影响对照组用户时，怎样解释实验结果？
question: 新功能鼓励用户邀请朋友，邀请者和朋友可能分在不同实验组。实验结果显著，但组间传播无法完全隔离。你会怎样评估结论？
intent: 判断是否识别用户间干扰、随机化单位和网络效应对因果推断的影响。
signals:
  - 描述干扰机制与偏差可能方向。
  - 检查随机化单元、曝光和跨组传播。
  - 考虑集群实验或敏感性分析并说明结论边界。
  - 识别用户、内容和创作者之间的相互影响。
  - 比较用户级、集群级和时间切换实验。
  - 选择能解释外溢并保护关键护栏的估计方法。
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
roles:
  - data
  - product
  - marketing
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
---
