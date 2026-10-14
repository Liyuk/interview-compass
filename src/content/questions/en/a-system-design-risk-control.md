---
questionId: a-system-design-risk-control
kind: question
status: published
locale: en
title: How would you design a real-time risk control system?
question: How would you design a real-time risk control system? How do rules, features, models, and manual review work together, and how do you trade false blocks against misses?
intent: See whether you can design a real-time decision system that balances latency, accuracy, and explainability and understand the cost of a wrong call.
signals:
  - Explains how real-time and offline features are obtained and what they do to latency
  - Explains what rules and models are each good at and how they are combined and degraded
  - States the cost of false blocks and misses and trades them with thresholds and manual review
  - Says how decisions are recorded and explained so they can be appealed and reviewed
primaryCapability: professional.system-design
topics: [system-design, security, feature-modeling, ai-engineering]
roles: [engineering, backend, data, ai-engineer]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - An adversary finds and bypasses the rules. How does the system respond quickly?
  - A user is blocked by mistake. How can they appeal and recover quickly?
source:
  - attribution: original
    label: "The author's system design question, a risk control system"
---
