---
questionId: wave16-ai-014
kind: question
status: published
locale: zh-CN
title: 模型拒答率下降但越权回答上升时怎么决策？
question: 新的安全策略减少了误拒答，同时让少数边界案例出现敏感信息泄露。产品团队希望保留总体满意度提升。你会如何评估？
intent: 考察风险加权指标、严重性门槛和发布治理。
signals:
  - 按危害等级和用户群拆解误拒与漏拦。
  - 设定不可被平均收益抵消的红线。
  - 明确回滚、人工缓解和风险接受者。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
roles:
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
  - 样本太少时如何评估罕见高危事件？
  - 产品满意度能否覆盖合规风险？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
