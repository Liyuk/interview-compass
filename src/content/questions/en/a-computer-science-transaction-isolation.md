---
questionId: a-computer-science-transaction-isolation
kind: question
status: published
locale: en
title: When two transactions modify the same data at once, what anomalies can occur?
question: When two transactions modify the same data at once, what anomalies can occur? What does each isolation level prevent, and what does it cost?
intent: See whether you can match each isolation level to the anomalies it prevents and understand what higher isolation costs.
signals:
  - Explains dirty reads, non-repeatable reads, and phantom reads with concrete scenarios
  - Matches each isolation level to the anomalies it prevents
  - Describes what a higher isolation level costs in concurrency and performance
primaryCapability: professional.computer-science
topics: [databases, concurrency]
roles: [backend, engineering, data]
responsibilityScopes: [individual]
careerTracks: [individual-contributor]
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
