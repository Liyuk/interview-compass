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
  - >-
    【What if critical alert context is lost during on-call handoff?】An alert fires before shift change but does not meet
    escalation criteria. The next responder lacks earlier investigation context and the incident grows. How would you
    design handoff?
  - Which facts should machine-generated context preserve?
  - Who remains accountable if the next responder has not acknowledged?
perspectiveReview: inferred
qualityTier: extended
perspective: candidate
---
