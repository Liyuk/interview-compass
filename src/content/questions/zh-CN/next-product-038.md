---
questionId: next-product-038
kind: question
status: published
locale: zh-CN
title: 实验期间外部政策同时变化，结果还能判断结果受哪些因素影响吗？
question: 随机实验运行期间平台同时调整了收费政策，处理组和对照组受到影响程度不同。你会如何判断实验结果还能支持什么结论？
intent: 考察实验干预、外部变化和因果解释边界。
signals:
  - 记录收费变化与实验的时间、分组和实际暴露，确认处理组与对照组受到什么不同影响。
  - 检查随机分配、交叉污染、样本流失及变化后的可比范围，不在结果出现后随意挑选样本。
  - 比较分层、敏感性检查、延长观察或重新实验的条件，说明各自不能解决什么。
  - 限定当前可解释结论和决策风险，记录需要什么补充证据。
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
roles:
  - product
  - data
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
followUps:
  - 是否应暂停、重启或分层分析？
  - 哪些结果可以保留为方向性信号？
  - 如果实验曝光本身不是随机的，随机分配还能回答什么？
  - 怎样在实验前设计跨设备身份和污染检测？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C
relatedQuestions: []
---
