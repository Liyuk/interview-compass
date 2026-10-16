---
questionId: wave17-domain-002
kind: question
status: published
locale: zh-CN
title: 一项服务同时有免费额度、阶梯价和封顶价，规则怎么表达？
question: 同一套餐包含免费额度、分段单价和月度封顶；升级后封顶规则立即生效，但免费额度按自然月重置。你会怎样定义计算顺序和账单解释？
intent: 考察能否把复杂定价拆成可执行、可核对的规则，并识别边界顺序对金额的影响。
signals:
  - 区分额度周期、阶梯区间、封顶时点和升级生效规则
  - 用边界样例验证计算顺序及账单可解释性
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
roles:
  - product
  - engineering
  - backend
  - ai-engineer
responsibilityScopes:
  - individual
  - team
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
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
---
