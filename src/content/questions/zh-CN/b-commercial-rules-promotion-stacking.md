---
questionId: b-commercial-rules-promotion-stacking
kind: question
status: published
locale: zh-CN
title: 促销优惠叠加规则如何定义
question: 一笔订单可能同时使用会员折扣、渠道优惠和优惠券，适用商品、地区和合同也有例外。你会怎样设计规则，让金额算得一致、用户看得懂，退款后也能核对？
intent: 考察能否把优惠资格、叠加顺序、承担方和结算明细表达成一致、可验证且能向用户解释的规则。
signals:
  - "明确适用对象和优惠资格，区分可叠加与互斥条件。"
  - "说明计算顺序、同级规则冲突处理和金额舍入方式。"
  - "记录每项优惠的承担方与规则版本，使运营、客服和财务能够解释订单金额。"
  - "验证商品、合同和地区例外，包括部分退款与历史对账。"
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - risk-management
roles:
  - product
  - operations
  - backend
  - data
  - engineering
  - marketing
  - frontend
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
  - operations-review
  - promotion
formats:
  - case
followUps:
  - "发布前怎样发现并处理优先级相同或相互矛盾的规则？"
  - "部分退款时，各项优惠和补贴应怎样计算冲回金额？"
  - "用户之后质疑金额时，怎样依据购买时生效的规则版本还原计算？"
source:
  - attribution: original
    label: 基于常见电商优惠规则场景原创编写
  - attribution: inspired
    label: 品牌与增长面试工具：促销、定价与商业结果主题
    url: https://github.com/coryjburk/intv-playbook-marketing_brand-growth/
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
