---
questionId: b-commercial-rules-promotion-stacking
kind: question
status: published
locale: zh-CN
title: 促销优惠叠加规则如何定义
question: 一笔订单可能同时使用会员折扣、渠道优惠和优惠券，适用商品、地区和合同也有例外。你会怎样设计规则，让金额算得一致、用户看得懂，退款后也能核对？
intent: 考察能否把优惠资格、叠加顺序、承担方和结算明细表达成一致、可验证且能向用户解释的规则。
signals:
  - 明确适用对象和优惠资格，区分可叠加与互斥条件。
  - 说明多项优惠的计算顺序、同级规则处理方式和金额舍入规则。
  - 让运营能配置规则，研发能实现，客服和财务能解释同一笔订单。
  - 记录每项优惠的来源、承担方和计算明细，支持历史核对与退款。
  - 说明如何在发布前发现规则冲突，并验证商品、合同和地区例外。
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
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - operations-review
  - promotion
formats:
  - case
followUps:
  - 两条规则优先级相同或配置彼此冲突时，系统应如何发现并处理？
  - 部分退款时，怎样计算每项优惠和渠道补贴应退回的金额？
  - 用户质疑实付金额时，怎样根据当时生效的规则还原计算过程？
  - 如果活动配置相互冲突，怎样在发布前发现？
  - 发生部分退款时如何确定各优惠和补贴的回退金额？
source:
  - attribution: original
    label: 基于常见电商优惠规则场景原创编写
  - attribution: inspired
    label: 品牌与增长面试工具：促销、定价与商业结果主题
    url: https://github.com/coryjburk/intv-playbook-marketing_brand-growth/
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
relatedQuestions: []
---
