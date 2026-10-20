---
questionId: c-investment-choices-shared-platform
kind: question
status: published
locale: en
title: "When is a shared platform worth building, and when do you start with a local solution?"
question: "Three business teams have raised similar needs, and someone suggests building a shared platform. How do you judge whether it is worth building, or whether each domain should first get a local solution?"
intent: "Understand whether you judge capability investment by audience, reuse path, and ownership, rather than abstracting for the sake of 'platformization.'"
signals:
  - "Asks for the audience, inputs and outputs, service boundary, quality commitment, and maintainer"
  - "Separates stable shared capability from unstable logic that belongs in the domain"
  - "Names the cost of premature abstraction and how adoption or reuse would validate the choice"
primaryCapability: value-direction.investment-choices
topics: [planning, system-design, resource-allocation, technical-planning]
roles:
  - engineering
  - backend
  - manager
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [multiple-teams, organization]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion]
formats: [case]
followUps:
  - "With no clear audience, what is an honest first step?"
  - "The platform is built and nobody uses it. How do you review the original judgment?"
source:
  - attribution: derived
    label: "Technical planning is business and competitive analysis: capability map and capability contract"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2025/11/technical-planning-business-and-competitive-analysis/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
