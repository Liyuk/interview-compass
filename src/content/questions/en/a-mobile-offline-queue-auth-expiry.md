---
questionId: a-mobile-offline-queue-auth-expiry
kind: question
status: published
locale: en
title: How do you recover queued offline actions when the token expires?
question: >-
  A user edits offline and queues several changes. When connectivity returns, the token has expired and some
  requests may already have reached the server. How would you design reauthentication, idempotency, and conflict
  handling?
intent: >-
  Assess whether you handle offline-queue lifecycle, refreshed auth, uncertain submission state, and data conflicts
  together.
signals:
  - Give each operation a stable identity and retry state.
  - Revalidate authorization after reauthentication rather than reuse expired access.
  - Separate confirmed, unknown, and conflicting actions with understandable recovery.
primaryCapability: professional.system-design
topics:
  - mobile
  - distributed-systems
  - security
roles:
  - mobile
  - backend
  - engineering
  - frontend
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
  - debugging
followUps:
  - How do you confirm before replaying an irreversible payment or notification?
  - How long should a local queue live, and how do you protect sensitive data?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
---
