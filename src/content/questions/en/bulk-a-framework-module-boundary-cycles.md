---
questionId: bulk-a-framework-module-boundary-cycles
kind: question
status: published
locale: en
title: Module Cycles and Boundary Design
question: >-
  Two modules now depend on each other, and splitting them exposes many internal types. How would
  you assess shared concepts, dependency direction, and module boundaries?
intent: Tests modular abstraction, dependency relationships, and encapsulation.
signals:
  - Analyzes responsibilities through reasons for change and ownership
  - Explains testing and release problems created by dependency cycles
  - Proposes stable interfaces or evidence for redrawing boundaries
primaryCapability: professional.coding-abstraction
topics:
  - frameworks
  - engineering-systems
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
  - case
source:
  - attribution: inspired
    label: System Design Primer — requirements, constraints, and trade-offs
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
---
