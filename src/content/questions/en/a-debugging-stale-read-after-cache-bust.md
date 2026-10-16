---
questionId: a-debugging-stale-read-after-cache-bust
kind: question
status: published
locale: en
title: How do you trace stale data when users still see an old value after cache invalidation?
question: >-
  A cache key is invalidated and logs show a database reread, yet some users still see old data. Switching to the
  primary helps but does not eliminate it. How would you investigate caches, replicas, and clients?
intent: Assess whether you distinguish layered caches, replication lag, identity-key mismatch, and client state.
signals:
  - Trace request IDs across CDN, application cache, database route, and client version.
  - Check key normalization, invalidation propagation, and replica lag.
  - Build a reproducible case and clear layers without causing a global cache storm.
primaryCapability: professional.debugging
topics:
  - debugging
  - databases
  - reliability
roles:
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
  - data
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
  - operations-review
formats:
  - system-design
  - case
followUps:
  - How do you prove replica reads rather than client state caused it?
  - What observable cache metadata helps debugging without exposing sensitive values?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
---
