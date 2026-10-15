---
questionId: wave16-ai-020
kind: question
status: published
locale: zh-CN
title: 训练数据标签定义变化后旧模型如何解释？
question: 业务把“流失”从 60 天未登录改成 30 天未付费，历史训练集和模型仍按旧定义。你会怎样管理版本与比较？
intent: 考察标签语义、训练数据版本和模型可比性。
signals:
  - 把标签定义作为有版本的领域对象。
  - 记录样本生成时间和定义版本。
  - 分开比较同口径模型与跨口径业务表现。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - data-modeling
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
  - 怎样重算旧数据而不抹掉旧模型依据？
  - 谁有权批准标签口径变更？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
