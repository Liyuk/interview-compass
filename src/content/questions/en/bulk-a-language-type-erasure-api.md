---
questionId: bulk-a-language-type-erasure-api
kind: question
status: published
locale: en
title: Runtime Effects of Type Erasure
question: "Choose a language whose generic type information is unavailable at runtime. A library encounters unexpected reflection or serialization behavior. Explain which language-specific runtime behaviors erasure affects and how you might redesign the API."
intent: Tests generic compilation models and runtime type-information boundaries.
signals:
  - "Names the language and distinguishes compile-time generic information from runtime representation."
  - "Explains which reflection, overload, or serialization behavior is affected in that language."
  - "Proposes a suitable alternative, such as explicit type tokens or a different API contract, and names its trade-offs."
primaryCapability: professional.computer-science
topics:
  - programming-languages
roles:
  - backend
  - engineering
  - frontend
  - mobile
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
