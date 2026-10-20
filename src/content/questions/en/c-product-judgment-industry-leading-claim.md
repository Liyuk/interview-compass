---
questionId: c-product-judgment-industry-leading-claim
kind: question
status: published
locale: en
title: You say this solution is the most advanced in the industry. What is that based on?
question: You say this solution is the most advanced in the industry. What is that based on, and what did you compare against, along which dimensions, and as of when?
intent: "Assess whether you turn “industry-leading” into a bounded, falsifiable judgment, distinguish technical novelty from user or business outcomes, and avoid promotional conclusions based on one metric."
signals: ["Bound the comparison set, user task, capability dimension, market, and date, explaining why those comparators were chosen.", "Use verifiable product, performance, adoption, or business evidence with aligned definitions and conditions.", "Distinguish “leading,” “different,” and “better for the target user,” stating what the evidence cannot support.", "Name the strongest counterexample or evidence gap and how you would correct internal and external claims if disproved."]
weakAnswer: "Claiming industry leadership from reputation, a demo, or one performance metric without defining the comparison or customer outcome."
anchors:
  notPassing: "Repeats the leadership claim without a reference set or evidence."
  passing: "Bounds the comparison, provides at least one verifiable metric, and acknowledges its limit."
  excellent: "Uses aligned evidence to separate technical difference from customer value and presents a counterexample and revisable claim."
  exceptional: "Tests the strongest counterexample and segment outcomes, defines update thresholds, and keeps public claims within the evidence."
primaryCapability: value-direction.product-judgment
topics: [product-thinking, ethics]
roles:
  - engineering
  - product
  - operations
  - manager
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
scenarios: [interview, promotion]
formats: [behavioral, case]
followUps: ["If a capability leads on a technical benchmark but target customers do not adopt it, would you still call it industry-leading?", "Given a genuine counterexample, how would you decide whether to revise the conclusion or narrow the comparison set?"]
source:
  - attribution: original
    label: "The author's interview sequence: whether it is ahead in the industry"
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
