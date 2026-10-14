---
questionId: b-model-evolution-concept-split
kind: question
status: published
locale: en
title: "One status field carries two concepts. How do you split it without breaking existing consumers?"
question: "An order has a single status field that means both fulfillment progress and payment result, and several teams read it. How would you split it into two concepts and move old data and old consumers over smoothly?"
intent: "Understand how you recognize business concepts that were fused together and plan a compatible transition rather than a one-shot replacement."
signals:
  - "First states the values and transition rules of each of the two concepts"
  - "Defines read and write conventions while old and new coexist, and an end condition"
  - "Points out old records that cannot be mapped with certainty and how they are handled"
primaryCapability: domain-modeling.model-evolution
topics: [data-modeling, databases]
roles: [backend, engineering, data]
responsibilityScopes: [multiple-teams]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, promotion]
formats: [case]
followUps:
  - "Which consumer is most likely to be hurt by your change, and how do you find out early?"
  - "After the transition ends, how does the old field retire?"
source:
  - attribution: original
    label: "Written from the common concept-split problem in model evolution"
---
