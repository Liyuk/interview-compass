---
questionId: b-data-model-order-payment-refund
kind: question
status: published
locale: en
title: "Why model orders, payments, and refunds separately?"
question: "Orders, payments, and refunds are often put in one table. Explain why they should be separate entities, and what their cardinality and identity relationships are."
intent: "Understand whether you reason from business meaning rather than table layout, and can explain entity identity, counts, and differing rules."
signals:
  - "Explains that one order can map to several payments and several partial refunds, and what that does to reporting"
  - "Separates an entity's identity from its state instead of treating a state as a new entity"
  - "Keeps business rules apart from storage mechanics, for example where idempotency keys and unique constraints belong"
primaryCapability: domain-modeling.data-model
topics: [data-modeling, databases, commercialization]
roles: [backend, engineering, product]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, campus, hiring]
formats: [knowledge, case]
followUps:
  - "After a partial refund, should the order amount still be the original amount, and how would you represent that?"
  - "If all three were merged into one table, which kind of query would go wrong first?"
source:
  - attribution: original
    label: "Written from the boundary examples between domain modeling and professional implementation"
---
