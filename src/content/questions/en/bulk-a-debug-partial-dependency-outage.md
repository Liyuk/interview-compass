---
questionId: bulk-a-debug-partial-dependency-outage
kind: question
status: published
locale: en
title: Partial regional dependency outage
question: >-
  A critical dependency intermittently times out in one region while overall health checks remain
  green. How would you assess impact and isolate or degrade it safely?
intent: >-
  See whether regional failures can be located, control-plane signals separated from user-path
  signals, and bounded mitigation chosen.
signals:
  - Segments success and timeout rates by region, request type, and tenant
  - Checks whether probes represent real user paths
  - Explains how isolation or degradation avoids cross-region spread and inconsistent data
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - distributed-systems
roles:
  - backend
  - engineering
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
  - debugging
source:
  - attribution: inspired
    label: System Design Primer：依赖故障与降级
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
