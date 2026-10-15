---
questionId: bulk-a-oncall-alert-ownership-gap
kind: question
status: published
locale: en
title: An alert fired, but unclear handoff left it unacknowledged. How would you investigate?
question: >-
  During a cross-time-zone handoff, a critical alert was sent. The outgoing on-call engineer assumed
  the incoming engineer would handle it, while the incoming engineer never acknowledged it;
  escalation was delayed. How would you reconstruct the ownership chain, fix acknowledgment and
  handoff, and verify the change?
intent: >-
  Assesses whether the candidate can trace ownership gaps across alert triggering, delivery,
  acknowledgment, escalation, and handoff, then define verifiable process improvements.
signals:
  - >-
    Checks the timeline for triggering, delivery, acknowledgment, and escalation instead of assuming
    that a sent alert has an owner
  - >-
    Distinguishes possible causes such as individual oversight, schedule data, routing tools, and
    handoff agreements
  - >-
    Defines acknowledgment deadlines, timeout escalation, and handoff acceptance, then validates
    them through drills or incident data
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - operations
roles:
  - engineering
  - operations
  - manager
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
  - case
source:
  - attribution: inspired
    label: DevOps Interview Questions：监控与告警实践
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
---
