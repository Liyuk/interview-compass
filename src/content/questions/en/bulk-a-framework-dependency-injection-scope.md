---
questionId: bulk-a-framework-dependency-injection-scope
kind: question
status: published
locale: en
title: Dependency-Injection Scope and State Leakage
question: >-
  After a service is registered as a singleton, different user requests occasionally see one
  another’s temporary state. How would you explain dependency-injection lifetimes and design a safe
  object boundary?
intent: Tests framework object lifetimes and risks from shared concurrent state.
signals:
  - Distinguishes singleton, request-scoped, and transient lifetimes
  - Identifies the risk of storing request data in a shared instance
  - Suggests stateless services or explicit request contexts
primaryCapability: professional.coding-abstraction
topics:
  - backend
  - frameworks
roles:
  - backend
  - engineering
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - knowledge
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
