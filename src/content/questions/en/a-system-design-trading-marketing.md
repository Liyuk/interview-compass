---
questionId: a-system-design-trading-marketing
kind: question
status: published
locale: en
title: In a trading system, how should marketing campaigns plug in without dragging down the main trading path?
question: In a trading system, how should marketing campaigns such as coupons, threshold discounts, and flash sales plug in without dragging down the main trading path? How are discounts calculated, stacked, and reconciled?
intent: See whether you can decouple marketing rules from the main trading path and handle stacking rules, inventory, and the risk of financial loss.
signals:
  - Explains the boundary between marketing calculation and the main trading path, and degradation when marketing fails
  - Explains how stacking, exclusion, and priority of discounts are expressed so results can be recomputed
  - Handles flash-sale inventory, concurrency, and overselling, and restocking for unpaid orders
  - Says how reconciliation lets every discount be traced
primaryCapability: professional.system-design
topics: [system-design, commercialization, concurrency, backend]
roles: [engineering, backend, product]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - If the marketing service is down, can an order still be placed, and by what rule?
  - One coupon is used by two orders at once. How do you prevent that?
source:
  - attribution: original
    label: "The author's system design question, marketing in a trading system"
---
