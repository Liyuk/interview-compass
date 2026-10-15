---
questionId: a-system-design-feature-flag-control-plane-failure
kind: question
status: published
locale: en
title: >-
  A new feature depends on a remote feature-flag service, but when its control plane is unavailable,
  user requests block too. How would you design defaults, caching, and an emergency kill path?
question: >-
  A new feature depends on a remote feature-flag service, but when its control plane is unavailable,
  user requests block too. How would you design defaults, caching, and an emergency kill path?
intent: >-
  Assess whether you include dynamic-config availability, safe defaults, propagation delay, and
  fault isolation in the system design.
signals:
  - Separates safe defaults, feature defaults, and recoverable stale configuration.
  - Defines config-cache lifetime, version checks, propagation, and invalidation.
  - >-
    Designs an emergency kill path independent of the same failing control plane, with permissions
    and audit.
primaryCapability: professional.system-design
topics:
  - system-design
  - reliability
  - security
roles:
  - engineering
  - frontend
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - >-
    If one tenant must disable a risky feature immediately while others continue, how would you
    isolate configuration?
  - >-
    How would you verify that a config-service failure cannot block the whole site or trigger a
    cascade?
---
