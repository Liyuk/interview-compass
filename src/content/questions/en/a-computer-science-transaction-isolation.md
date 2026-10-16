---
questionId: a-computer-science-transaction-isolation
kind: question
status: published
locale: en
title: When two transactions modify the same data at once, what anomalies can occur?
question: When two transactions modify the same data at once, what anomalies can occur? What does each isolation level prevent, and what does it cost?
intent: See whether you can match each isolation level to the anomalies it prevents and understand what higher isolation costs.
signals:
  - Uses concurrent timelines to explain dirty, nonrepeatable, phantom, and related business anomalies.
  - >-
    Compares guarantees under an explicit database implementation rather than assuming identical level
    names.
  - Weighs locks, snapshots, and conflict detection against throughput, waiting, and retries.
  - Tests business invariants with repeatable concurrency and states remaining limits.
primaryCapability: professional.computer-science
topics: [databases, concurrency]
roles:
  - backend
  - engineering
  - data
  - ai-engineer
responsibilityScopes: [individual]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus]
formats: [knowledge]
followUps:
  - Have you hit a problem related to isolation levels in a project?
  - If the business tolerates a little inconsistency, how would you choose?
source:
  - attribution: inspired
    label: JavaGuide's notes on databases and concurrency
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
