---
questionId: a-system-design-referral-campaign
kind: question
status: published
locale: en
title: How would you design an invitation-based viral marketing campaign?
question: How would you design an invitation-based viral marketing campaign? How do you design invitation relationships, reward payout, abuse prevention, and effect evaluation?
intent: See whether you can turn a growth mechanic into a dependable system, foresee cheating and financial loss, and judge whether it brings real net growth.
signals:
  - Explains how invitation relationships are recorded, the attribution rules, and how validity is judged
  - Explains idempotency, delayed payout, and compensation on failure for rewards
  - Foresees fake volume and bonus-hunters and gives ideas for detecting and blocking them
  - Says how to separate genuinely net-new users from low-quality users drawn only by the reward
primaryCapability: professional.system-design
topics: [system-design, growth-experiments, security, operations]
roles: [engineering, backend, product, operations, marketing]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring, operations-review]
formats: [system-design, case]
followUps:
  - A user is invited by two people. Whose reward is it?
  - After the campaign, how do you judge whether it is worth continuing?
source:
  - attribution: original
    label: "The author's system design question, viral marketing campaigns"
---
