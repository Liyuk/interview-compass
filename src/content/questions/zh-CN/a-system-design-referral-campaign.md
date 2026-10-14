---
questionId: a-system-design-referral-campaign
kind: question
status: published
locale: zh-CN
title: 怎样设计一个邀请裂变类的营销活动？
question: 怎样设计一个邀请裂变类的营销活动？邀请关系、奖励发放、防刷和效果评估分别怎样设计？
intent: 了解你能否把增长玩法落成可靠的系统，并预见作弊和资损，同时能评估它是否真的带来净增长。
signals:
  - 说明邀请关系的记录、归因规则和有效性的判定
  - 说明奖励发放的幂等、延迟发放和失败补偿
  - 预见刷量和羊毛党，并给出识别和拦截思路
  - 说明怎样区分真实的净增用户和被奖励吸引的低质量用户
primaryCapability: professional.system-design
topics: [system-design, growth-experiments, security, operations]
roles: [engineering, backend, product, operations, marketing]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring, operations-review]
formats: [system-design, case]
followUps:
  - 一个用户被两个人邀请，奖励算谁的？
  - 活动结束后，怎样判断它值不值得继续做？
source:
  - attribution: original
    label: "作者的系统设计题：裂变类营销活动"
---
