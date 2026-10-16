---
questionId: a-ai-eval-customer-harm-weighting
kind: question
status: published
locale: zh-CN
title: 总体准确率提高但严重错误没有减少时，怎样判断模型升级？
question: 新模型把总体准确率从 91% 提高到 94%，但错误仍集中在少数会影响客户权益的场景。团队希望按总体分数发布。你会如何定义发布判断？
intent: 考察能否按错误严重性和群体影响分解质量，而不是让多数简单样例掩盖高风险错误。
signals:
  - 按风险等级、用户群和任务拆解错误率。
  - 定义不可接受的严重错误和最低样本覆盖。
  - 权衡总体收益、剩余风险、人工缓解和回退条件。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
  - risk-management
roles:
  - ai-engineer
  - product
  - operations
  - engineering
  - frontend
  - backend
  - mobile
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
  - behavioral
followUps:
  - 如何在严重案例数量有限时建立置信度？
  - 谁应接受未消除的风险并批准扩大范围？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
---
