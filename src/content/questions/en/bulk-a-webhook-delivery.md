---
questionId: bulk-a-webhook-delivery
kind: question
status: published
locale: en
title: External webhook delivery
question: >-
  A multi-tenant platform must deliver event webhooks to customer systems. How would you design the delivery path and
  handle a customer endpoint that remains unavailable?
intent: Explore how delivery reliability, tenant isolation, duplicate events, and operational visibility fit into one design.
signals:
  - Separates event creation, queuing, delivery, and acknowledgment
  - Discusses where retries, deduplication, and ordering guarantees apply
  - Considers per-tenant limits, failure isolation, and traceable replay
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - reliability
roles:
  - backend
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：分布式系统与可靠性设计
    url: https://github.com/donnemartin/system-design-primer
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - >-
    When a partner asks for “exactly once,” why can the sender usually promise only at-least-once delivery, and how
    would event IDs, receiver-side idempotency, and traceable replay define the contract?
---
