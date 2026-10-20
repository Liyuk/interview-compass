---
questionId: d-operations-incident-command-authority-conflict
kind: question
status: published
locale: en
title: How do you restore command when several owners issue conflicting incident instructions?
question: >-
  During an outage, engineering wants to disable a feature, business wants to keep accepting orders, and
  support has promised a recovery time. Responders receive conflicting directions. How would you organize the
  response?
intent: >-
  Assess whether you clarify incident command, source of truth, risk acceptance, and communication cadence
  quickly.
signals:
  - >-
    Confirm one incident coordinator and technical execution owner under the emergency mandate; escalate
    quickly when authority is unclear.
  - >-
    Separate technical recovery judgment, business risk acceptance, and customer communication rather
    than acting on conflicting verbal requests.
  - >-
    Use shared facts, decision logs, and update times, retaining dissent and decisions needing authorized
    owners.
  - >-
    Check conflicting mitigations and rollback or compensation paths, identifying risks that cannot be
    accepted unilaterally.
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - communication
  - management
roles:
  - operations
  - engineering
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
  - behavioral
followUps:
  - If the commander lacks system expertise, how do you bring in experts without creating parallel command?
  - How do you correct an inaccurate recovery estimate already sent?
  - How should reversible action be taken with incomplete evidence?
  - How can decisions be reviewed later without personal blame?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 I
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
