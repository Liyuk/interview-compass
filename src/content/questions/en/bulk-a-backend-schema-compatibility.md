---
questionId: bulk-a-backend-schema-compatibility
kind: question
status: published
locale: en
title: Schema Compatibility During Rolling Releases
question: >-
  A new service version adds a field and changes read behavior, while old instances will run for
  several minutes. How would you sequence database and application changes so both versions can
  coexist?
intent: Tests compatibility migration and progressive release sequencing.
signals:
  - Separates expansion and contraction phases
  - Considers combinations of old/new code and data shapes
  - Defines validation, cutover, and old-schema removal conditions
primaryCapability: professional.engineering-systems
topics:
  - backend
  - databases
  - engineering-systems
roles:
  - backend
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
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
