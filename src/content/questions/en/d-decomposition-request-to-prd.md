---
questionId: d-decomposition-request-to-prd
kind: question
status: published
locale: en
title: How do you break a vague business request down, step by step, into a requirements document without logical gaps?
question: Tell me about the most complex feature you owned. How do you break a vague business request down, step by step, into a requirements document without logical gaps, and how do you design fault tolerance and interaction for edge cases such as a lost connection or an abnormal account?
intent: See your method for breaking down a vague request and whether you systematically consider exception paths rather than designing only the happy path.
signals:
  - First clarifies the goal and use case behind the request, then fixes the scope
  - Writes the main flow completely with states, flows, and rules and lists the edge cases
  - Gives specific handling and messages for exceptions, not a vague "show an error"
  - Says how engineering and test are used to check the document for omissions
primaryCapability: delivery.decomposition
topics: [product-thinking, execution]
roles: [product, engineering]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, campus, promotion]
formats: [behavioral, case]
followUps:
  - In review, engineering points out a logical gap you had not thought of. How do you handle it?
  - After launch a situation arises that the document did not cover. How do you review it?
source:
  - attribution: original
    label: "The author's leveled interview framework, product track"
---
