---
questionId: a-engineering-systems-release-rollback
kind: question
status: published
locale: en
title: "How do you verify the claim “we can roll back”?"
question: "After a release goes wrong, the team says “we can roll back.” How would you check that this is true and not just a line in the plan?"
intent: "Understand whether you grasp the real limits of a rollback across data, in-flight work, and dependencies."
signals:
  - "Distinguishes reverting code from reverting data and state"
  - "Points out that rollout and rollback conditions must be agreed in advance"
  - "Asks to see a rehearsal record rather than accepting a written promise"
primaryCapability: professional.engineering-systems
topics: [devops, reliability, engineering-systems]
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, operations-review]
formats: [case]
relatedQuestions:
  - questionId: a-system-design-async-coupon-issuing-review
    relation: "Both ask whether “we wrote a rollback” really means it can be undone."
    contrast: "This one is about release and rollback practice overall; the other is about the failure sequences of one specific design."
source:
  - attribution: derived
    label: "Engineering Decision Skills: rollback and in-flight message review example"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/projects/2026/09/engineering-decision-skills/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
