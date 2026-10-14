---
questionId: b-commercial-rules-promotion-stacking
kind: question
status: published
locale: en
title: "How do you express stacking and exclusion rules when coupons and spend-based discounts coexist?"
question: "One order may qualify for a coupon, a spend-based discount, and a membership discount. How would you express their priority, stacking, and exclusion so operations can configure them, engineers can implement them, and support can explain them?"
intent: "Understand whether you can turn a set of interacting commercial rules into an enumerable, verifiable model, and foresee rule conflicts and exceptions."
signals:
  - "Gives an explicit calculation order and exclusion groups rather than saying 'take the best one'"
  - "Demonstrates rule combinations with concrete order examples"
  - "Considers the conflicts that arise when operations change rules, and how to catch them early"
primaryCapability: domain-modeling.commercial-rules
topics: [commercialization, data-modeling]
roles: [product, operations, backend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [case]
followUps:
  - "What should the system do when two rules have the same priority?"
  - "When a customer disputes the amount, what does support rely on to explain it?"
source:
  - attribution: original
    label: "Written from common e-commerce promotion rule scenarios"
---
