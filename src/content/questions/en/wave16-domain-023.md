---
questionId: wave16-domain-023
kind: question
status: published
locale: en
title: How should permissions and data context be isolated when users switch workspaces?
question: A user belongs to several organizations. The browser retains prior-workspace cache, and old organization data briefly appears after switching. How would you design the boundary?
intent: Assesses tenant context, authorization checks, and client-cache isolation.
signals:
  - Include workspace identity in every request authorization decision.
  - Clear or namespace client state during switching.
  - Test direct links, concurrent tabs, and stale tokens.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - product-thinking
roles:
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - How should links shared with other organization members behave?
  - 'Which layers own isolation: server or client cache?'
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
