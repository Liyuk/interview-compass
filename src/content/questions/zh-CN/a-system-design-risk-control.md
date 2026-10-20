---
questionId: a-system-design-risk-control
kind: question
status: published
locale: zh-CN
title: 怎样设计一个实时的风控系统？
question: 怎样设计一个实时的风控系统？规则、特征、模型和人工审核怎样配合，误杀和漏放之间怎样取舍？
intent: 了解你能否为实时决策设计兼顾延迟、准确和可解释的系统，并清楚误判的代价。
signals:
  - 说明实时特征和离线特征怎样获取，以及它们对延迟的影响
  - 说明规则与模型各自擅长什么，以及怎样组合和降级（关闭非核心功能以保住核心服务）
  - 明确误杀与漏放的代价，并用阈值和人工审核来取舍
  - 说明决策怎样被记录和解释，以便申诉和复盘
primaryCapability: professional.system-design
topics:
  - system-design
  - security
  - feature-modeling
  - ai-engineering
roles:
  - engineering
  - backend
  - data
  - ai-engineer
  - product
  - operations
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
  - system-design
followUps:
  - 对手发现并绕过了规则，系统怎样很快响应？
  - 一个用户被误拦截，怎样让他能申诉并快速恢复？
source:
  - attribution: original
    label: 作者的系统设计题：风控系统
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
