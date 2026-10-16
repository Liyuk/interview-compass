---
questionId: b-data-model-commercial-mapping
kind: question
status: published
locale: en
title: How are the core concepts of a commercial domain mapped into a data model?
question: Taking concepts such as orders, contracts, and settlements, how are they mapped into the data model? Which concepts were split into several entities, which were merged, and why?
intent: See whether you can carry the meaning, cardinality, and lifecycle of commercial concepts into a data model, rather than building tables straight from screens or interfaces.
signals:
  - Models from business meaning, cardinality, and lifecycle, not from screens or interfaces
  - Says which concepts were split or merged and the rules and trade-offs behind it
  - Points out the parts of the model that are easy to misread, such as state versus event
  - Explains how the model copes with historical data after rules change
primaryCapability: domain-modeling.data-model
topics: [commercialization, data-modeling, databases]
roles:
  - backend
  - data
  - product
  - engineering
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion, hiring]
formats: [knowledge, case]
followUps:
  - If the business adds a new way of charging, what in the model has to change?
  - How do you make sure product and engineering understand these concepts the same way?
source:
  - attribution: original
    label: "The author's interview sequence: mapping commercial concepts into a data model"
---
