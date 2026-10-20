---
questionId: a-coding-abstraction-defensive-edge-cases
kind: question
status: published
locale: en
title: How do you handle edge cases and invalid input when writing code? Tell me about a problem caused by a missing up-front check.
question: How do you usually handle null values, empty strings, out-of-range access, and invalid input when writing code? Tell me about a time a missing up-front check caused a problem in testing or production, and what habit changed as a result.
intent: See whether you have a habit of defensive coding and can turn your own mistakes into concrete, practicable habits.
signals:
  - Describes concrete ways of handling edge cases, such as validating at entry points, explicit contracts, and uniform error handling
  - Tells a real mistake, including its cause, its impact, and how it was found
  - Says what habit specifically changed afterwards, such as adding tests or using a checklist, not just "be more careful"
  - Separates what should be stopped at the boundary from what internal contracts cover, avoiding repeated checks everywhere
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - debugging
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - campus
formats:
  - behavioral
  - coding
followUps:
  - "What input escaped validation, and what failure or user impact did it cause?"
  - "Which test or boundary check now catches the same class of input before release?"
source:
  - attribution: original
    label: The author's leveled interview framework, junior engineer
perspective: candidate
perspectiveReview: reviewed
qualityTier: core
weakAnswer: Promises to be more careful but cannot explain the user impact of a boundary failure or how to prevent recurrence.
anchors:
  notPassing: Says they would add more checks but cannot describe a real failure or boundary.
  passing: Describes an input-boundary failure and its impact.
  excellent: Explains where validation belongs and how tests cover similar boundaries.
  exceptional: Uses the failure to improve an interface contract or shared check without redundant defenses hiding errors.
---
