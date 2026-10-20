---
questionId: d-capacity-planning-incident-vs-roadmap-tradeoff
kind: question
status: published
locale: en
title: How do you balance reliability work and roadmap goals when incidents consume capacity?
question: >-
  Incidents and recovery work interrupt every iteration, and roadmap commitments keep slipping. Leadership
  wants the dates preserved without adding staff. How would you propose capacity and goal changes?
intent: "Assess whether you treat incident response as real capacity demand, use evidence to compare response, prevention, and roadmap investment, and secure an explicit trade-off on dates, scope, or service goals."
signals: ["Classify incidents, interruptions, and recovery hours, separating planned support from unpredictable load.", "Estimate the recurring cost of incidents and compare prevention investment with product delivery and service commitments.", "Use historical distributions and uncertainty ranges to propose reserves, rotations, or reliability work without presenting one ratio as certain.", "Name who can change dates, scope, or service levels and set escalation and review triggers."]
anchors:
  notPassing: "Requests a buffer or more staff without a baseline or trade-off."
  passing: "Uses incident and recovery history to estimate capacity and identify preventive value."
  excellent: "Compares realistic capacity, reliability, and business commitments with ranges, decision rights, and escalation thresholds."
  exceptional: "Validates investment through recurrence and service outcomes and makes the business explicitly accept scope, date, or risk when resources stay fixed."
primaryCapability: delivery.capacity-planning
topics:
  - resource-allocation
  - reliability
  - planning
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
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps: ["How would you prove reliability investment reduced interruptions rather than just moving work into a reliability project?", "If the business insists on the date and rejects reserve capacity, how would you quantify the commitment risk and obtain an explicit decision?"]
weakAnswer: "Blaming roadmap delays on incidents without measuring load, distinguishing prevention from response, or asking decision-makers to own the commitment trade-off."
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 J
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C/D
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C
relatedQuestions: []
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
