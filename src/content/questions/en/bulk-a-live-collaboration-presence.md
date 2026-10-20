---
questionId: bulk-a-live-collaboration-presence
kind: question
status: published
locale: en
title: Presence in live collaboration
question: >-
  A collaborative tool shows who is online and where they are editing. Brief delay is acceptable,
  but disconnected members must not remain online indefinitely. How would you design updates and
  expiry?
intent: >-
  Examine separation of ephemeral state from durable business data and expiry semantics during
  network failures.
signals:
  - Clarifies refresh frequency, expiry, and tolerated error
  - Separates durable edits from ephemeral presence state
  - Discusses disconnect detection, reconnect storms, and fanout cost in large rooms
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - concurrency
roles:
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：实时系统与一致性
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
