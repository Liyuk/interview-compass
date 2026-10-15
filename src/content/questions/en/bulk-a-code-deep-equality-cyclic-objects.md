---
questionId: bulk-a-code-deep-equality-cyclic-objects
kind: question
status: published
locale: en
title: Deep Equality for Cyclic Objects
question: >-
  Implement deep equality for inputs that may contain nested arrays, shared references, and cycles.
  Define equality semantics first, then avoid infinite recursion and accidental confusion of
  reference structures.
intent: Tests abstraction, graph traversal, and complex-input handling.
signals:
  - Defines equality rules for types, prototypes, or special values
  - Tracks visited states to handle cycles
  - Distinguishes shared subobjects from structurally equal but separately identified objects
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - compiler-design
roles:
  - engineering
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
  - coding
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
---
