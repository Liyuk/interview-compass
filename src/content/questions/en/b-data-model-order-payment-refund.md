---
questionId: b-data-model-order-payment-refund
kind: question
status: published
locale: en
title: "Why model orders, payments, and refunds separately?"
question: >-
  Orders, payments, and refunds are often stored in one table. How would you distinguish their business
  identities, lifecycles, and cardinalities? Compare conditions, costs, and validation for separate
  models and combined storage.
intent: "Understand whether you reason from business meaning rather than table layout, and can explain entity identity, counts, and differing rules."
signals:
  - Uses payment attempts and partial refunds to explain cardinality without one mandated table layout.
  - >-
    Distinguishes identities, states, and events, including ambiguities or constraints in combined
    representations.
  - Compares query, audit, consistency, and evolution costs while separating logical and storage choices.
  - Validates IDs, links, and boundary examples against double counting or lost transactions.
primaryCapability: domain-modeling.data-model
topics: [data-modeling, databases, commercialization]
roles:
  - backend
  - engineering
  - product
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus, hiring]
formats: [knowledge, case]
followUps:
  - "After a partial refund, should the order amount still be the original amount, and how would you represent that?"
  - "If all three were merged into one table, which kind of query would go wrong first?"
source:
  - attribution: original
    label: "Written from the boundary examples between domain modeling and professional implementation"
---
