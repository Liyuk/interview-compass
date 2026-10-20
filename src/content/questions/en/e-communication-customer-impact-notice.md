---
questionId: e-communication-customer-impact-notice
kind: question
status: published
locale: en
title: How do you notify customers when service impact is uncertain?
question: >-
  You discover an incident may affect customer data, but the affected list and restoration time are
  unknown. How would you organize the first notice and subsequent updates?
intent: "Assess whether you provide an accurate first notice, actionable customer guidance, and a next update while impact and recovery remain unknown, then correct responsibly as evidence changes."
signals: ["Separate confirmed impact, possible impact, and unknown scope without unsupported promises or minimization.", "State protective steps, customer actions, support channel, and communication owner.", "Give the next update time even if there is no new result.", "If impact expands or earlier information was wrong, preserve versions and clearly correct and investigate."]
anchors:
  notPassing: "Sends a vague incident note without actions or unknowns."
  passing: "States known impact, protective action, and next update."
  excellent: "Issues a bounded factual notice and makes traceable corrections as evidence changes."
  exceptional: "Segments audience and channels by severity, maintains owned updates and recovery guidance, and never presents provisional information as final."
primaryCapability: collaboration.communication
topics:
  - communication
  - risk-management
  - operations
roles:
  - operations
  - product
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
scenarios:
  - interview
  - operations-review
formats:
  - behavioral
followUps: ["Which information must be confirmed first, and what can be labeled provisional and shared now?", "If later evidence shows more serious impact, how would you correct the notice and explain the earlier assessment?"]
weakAnswer: "Waiting for full root cause and affected-user certainty before notifying, or promising an unverified recovery time."
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
