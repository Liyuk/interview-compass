---
questionId: d-capacity-planning-interrupt-load-budget
kind: question
status: published
locale: en
title: How much capacity should a team reserve for unplanned support?
question: >-
  For several quarters, production support, customer escalations, and cross-team requests have displaced
  roadmap work. Someone proposes a universal 20% reserve, though interruption rates vary. How would you set
  the reserve?
intent: "Assess whether you set capacity policy from interruption type, variability, and removability instead of treating a single reserve percentage as universal."
signals: ["Segment historical interruptions by source, severity, frequency, duration, and concentration in time.", "Separate random demand, predictable peaks, service commitments, and repetitive work that automation or self-service could remove.", "Compare shared pools, rotations, service levels, and reserves for response time, focus, and cost.", "Define what happens when the budget is exceeded or unused and recalibrate with new data."]
anchors:
  notPassing: "Copies a uniform percentage without a baseline."
  passing: "Classifies interruptions by team and proposes an adjustable reserve."
  excellent: "Separates volatility from removable work, compares policy effects, and sets an overrun response."
  exceptional: "Recalibrates from forecast error and service outcomes, treating both unused capacity and sustained overload as policy signals."
primaryCapability: delivery.capacity-planning
topics:
  - resource-allocation
  - planning
  - operations
roles:
  - manager
  - engineering
  - operations
  - pmo
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps: ["When reserved capacity is unused, how do you fill it without blocking the next urgent response?", "What evidence would make you increase or reduce a team’s interruption budget?"]
weakAnswer: "Applying the same 20% reserve everywhere without checking demand distribution, repeat sources, service obligations, or recalibration."
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
