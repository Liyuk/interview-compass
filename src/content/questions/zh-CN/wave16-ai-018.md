---
questionId: wave16-ai-018
kind: question
status: published
locale: zh-CN
title: 拒答后转人工的比例上升说明什么？
question: 安全策略上线后人工接管率增加一倍，但高风险错误减少。运营团队容量有限。你会如何判断结果并调整阈值？
intent: 考察安全收益、人审容量和分层阈值设计。
signals:
  - 按风险和原因拆解转人工请求。
  - 评估误拦、漏拦和队列等待的联合成本。
  - 设定分层处理与容量告警。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
roles:
  - ai-engineer
  - engineering
  - frontend
  - backend
  - mobile
  - product
  - operations
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
  - 哪些场景可以允许低风险自助继续？
  - 人审积压达到什么条件需暂停扩量？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
