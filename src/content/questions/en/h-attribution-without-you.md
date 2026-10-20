---
questionId: h-attribution-without-you
kind: question
status: published
locale: en
title: If you had not been there, what would have been different?
question: If you had not been there, what would have been different? Did your contribution change a single result, or make this kind of problem easier to solve?
intent: "Assess whether you explain your contribution without exaggerating or diminishing it, distinguishing one-time results, reusable capability, and team outcomes with evidence for the counterfactual."
signals: ["Compare concrete changes in speed, quality, risk, collaboration, or sustained capability instead of claiming irreplaceability.", "Separate a one-time result from reusable process, tools, knowledge, or decision capacity.", "Name others’ contributions, shared dependencies, and outcomes not attributable to an individual.", "Offer a reasonable counterfactual with records or feedback and label uncertainty."]
anchors:
  notPassing: "Answers the counterfactual with “I was important.”"
  passing: "Names one concrete difference and team contribution."
  excellent: "Separates immediate result and reusable capability with evidence."
  exceptional: "Uses multiple outcomes, continued operation, and counterexamples to estimate incremental contribution and acknowledges what cannot be attributed."
primaryCapability: work-responsibility.attribution
topics: [promotion, ethics]
roles:
  - engineering
  - product
  - operations
  - manager
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios: [interview, promotion, self-reflection]
formats: [behavioral]
followUps: ["Does the mechanism you left continue working after you leave, and what evidence shows it?", "How would you calibrate your contribution if others assess your value differently?"]
weakAnswer: "Claiming the project could not succeed without you or assigning all team results and durable capability to yourself."
source:
  - attribution: derived
    label: Blog post on the pre-promotion and pre-interview self-check list
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/08/career-growth-ten-questions/zh.md
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
