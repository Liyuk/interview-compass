---
questionId: f-team-design-expert-load-map
kind: question
status: published
locale: en
title: How do you redesign team boundaries when one expert becomes a queue?
question: >-
  Three teams share a senior expert for architecture reviews. Average wait time is over two weeks, and teams
  hesitate to release without approval. How would you determine whether the issue is staffing, concentrated
  knowledge, or decision design, and choose an intervention?
intent: "Assess whether you decompose an expert queue into demand, knowledge distribution, and decision rights, distinguishing a true hiring gap from a single-point dependency that can be reduced through authorization and capability growth."
signals: ["Measure review demand, wait time, rework, expert hours, and release dependencies; distinguish advice from formal approval.", "Identify irreplaceable judgment in high-risk work and knowledge that can spread through docs, pairing, rotation, or standards.", "Set authorization levels and risk thresholds so teams can decide independently within safe bounds.", "Track wait, defects, expert load, and team independence to decide among hiring, coaching, and boundary changes."]
anchors:
  notPassing: "Blames delay on insufficient staffing without measurement or dependency analysis."
  passing: "Measures waiting and identifies a knowledge or authority bottleneck."
  excellent: "Introduces risk-tiered authorization or knowledge distribution with quality and independence measures."
  exceptional: "Uses trial evidence to compare hiring, delegation, and learning costs without transferring accountability or weakening critical controls."
primaryCapability: people-organization.team-design
topics:
  - management
  - resource-allocation
  - execution
  - team-planning
roles:
  - engineering
  - manager
  - pmo
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - multiple-teams
  - organization
careerTracks:
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
weakAnswer: "Asking the expert to work longer or hiring directly without distinguishing approval from advice, knowledge concentration, and capacity shortage."
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
followUps: ["If the expert resists delegation after a prior incident, how would you design a low-risk authorization trial?", "Which measures would show that hiring another expert beats growing distributed capability?"]
relatedQuestions: []
perspective: "manager"
perspectiveReview: "reviewed"
qualityTier: "core"

---
