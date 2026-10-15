---
questionId: bulk-a-backend-pagination-consistency
kind: question
status: published
locale: en
title: Pagination Consistency Under Concurrent Writes
question: >-
  In an admin console, inserts and deletes while paging by creation time cause duplicate or missing rows. How would you
  compare offset and cursor pagination and define the consistency expectation?
intent: Tests pagination protocol, stable ordering, and concurrent data changes.
signals:
  - "Define how inserts, deletes, and updates should appear while a user pages through results."
  - "Compare offset and cursor boundaries, using stable ordering and a unique tie-breaker."
  - "State whether a snapshot is needed and how a cursor binds to query conditions or versions."
  - "Test duplicates, omissions, and boundary records under concurrent changes."
primaryCapability: professional.system-design
topics:
  - backend
  - databases
  - system-design
  - data-modeling
roles:
  - backend
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - system-design
  - case
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
followUps:
  - >-
    A cursor-paginated list changes as records are added, deleted, and updated. The product requires no duplicates or
    missed matching records. How would you define the semantics?
---
