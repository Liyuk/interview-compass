---
questionId: bulk-a-backend-pagination-consistency
kind: question
status: published
locale: en
title: Pagination Consistency Under Concurrent Writes
question: >-
  In an admin console, inserts and deletes while paging by creation time cause duplicate or missing
  rows. How would you compare offset and cursor pagination and define the consistency expectation?
intent: Tests pagination protocol, stable ordering, and concurrent data changes.
signals:
  - Identifies ambiguity from non-unique sort keys
  - Explains offset shifts and cursor-boundary behavior
  - Chooses snapshot or eventual consistency according to interaction needs
primaryCapability: professional.system-design
topics:
  - backend
  - databases
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
  - system-design
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
