---
questionId: bulk-a-oncall-alert-ownership-gap
kind: question
status: published
locale: en
title: An alert fired, but unclear handoff left it unacknowledged. How would you investigate?
question: >-
  During a cross-time-zone handoff, a critical alert was sent. The outgoing on-call engineer assumed the incoming
  engineer would handle it, while the incoming engineer never acknowledged it; escalation was delayed. How would you
  reconstruct the ownership chain, fix acknowledgment and handoff, and verify the change?
intent: >-
  Assesses whether the candidate can trace ownership gaps across alert triggering, delivery, acknowledgment, escalation,
  and handoff, then define verifiable process improvements.
signals:
  - >-
    Traces trigger, delivery, acknowledgement, escalation, and handoff rather than assuming sent means
    handled.
  - >-
    Distinguishes actions, schedules, routing, and agreements, stating personal authority and
    contribution.
  - Defines owners, acknowledgement limits, and escalation for open, investigating, and mitigated alerts.
  - Validates omissions, duplicate responses, and recovery through drills and incidents, including costs.
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - operations
roles:
  - engineering
  - operations
  - manager
  - frontend
  - backend
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
  - promotion
formats:
  - case
source:
  - attribution: inspired
    label: DevOps Interview Questions：监控与告警实践
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - "Which handoff facts must the system preserve when an alert is still being investigated?"
  - "Who owns an alert until the next responder acknowledges it, and what should trigger escalation?"
  - "How would you test that the revised handoff catches missed acknowledgments without creating duplicate responses?"
perspectiveReview: inferred
qualityTier: extended
perspective: candidate
---
