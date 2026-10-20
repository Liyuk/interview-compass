---
questionId: a-system-design-campaign-builder
kind: question
status: published
locale: en
title: How would you design a platform where operations staff build campaigns and game mechanics themselves?
question: How would you design a platform where operations staff build campaigns and game mechanics themselves? How do you abstract campaigns, mechanics, rules, and features into configurable parts, and how do you keep a configuration correct once it goes live?
intent: See whether you can abstract a fast-changing business into a configurable model and trade flexibility against control.
signals:
  - Splits campaigns, mechanics, rules, and features into composable concepts instead of writing code for each campaign
  - Explains validation, preview, staged rollout, and rollback of configuration
  - Says where flexibility ends, what goes to configuration and what needs engineering extension
  - Considers permissions, audit, and the effect of configuration changes on production stability
primaryCapability: professional.system-design
topics: [system-design, operations, feature-modeling, commercialization]
roles:
  - engineering
  - backend
  - product
  - operations
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring, promotion]
formats: [system-design]
followUps:
  - Operations misconfigure a rule and cause a financial loss. How should the system catch it beforehand?
  - The platform becomes more flexible and harder to maintain. How do you contain that?
source:
  - attribution: original
    label: "The author's system design question, a campaign and mechanics builder"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
