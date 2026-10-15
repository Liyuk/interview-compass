---
questionId: b-commercial-rules-promotion-stacking
kind: question
status: published
locale: en
title: How do you keep rules, settlement, and customer expectations aligned when promotions stack?
question: >-
  An order may qualify for a membership discount, channel offer, coupon, and threshold discount, while teams
  disagree about eligible items, calculation order, and stacking. How would you define priority, exclusions,
  and rounding so operations can configure it, engineering can implement it, finance can reconcile it, and
  customers can understand it?
intent: >-
  Assess whether you can express interacting promotion rules as an unambiguous, enumerable, testable, and
  explainable commercial contract, including rule changes and transaction history.
signals:
  - Defines eligible objects, calculation order, stacking and exclusion conditions, and rounding
  - Uses concrete order examples to reconcile the displayed amount with final settlement
  - Gives operations, engineering, support, and finance a shared representation of the rules
  - Handles rule changes, effective times, and traceable explanations of past transactions
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
roles:
  - product
  - operations
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - case
followUps:
  - >-
    If two rules have equal priority or an operations configuration creates a cycle, how should the system
    reject, explain, or resolve it?
  - After a rule changes, how would you reproduce and explain the calculation on an earlier order?
  - What records should support use to explain a disputed amount to a customer?
source:
  - attribution: original
    label: Written from common e-commerce promotion rule scenarios
  - attribution: inspired
    label: 品牌与增长面试工具：促销、定价与商业结果主题
    url: https://github.com/coryjburk/intv-playbook-marketing_brand-growth/
relatedQuestions: []
---
