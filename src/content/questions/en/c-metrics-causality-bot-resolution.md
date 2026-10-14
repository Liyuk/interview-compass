---
questionId: c-metrics-causality-bot-resolution
kind: question
status: published
locale: en
title: "A support bot's 'resolution rate' rose from 72% to 91%. Can you cancel weekend human coverage?"
question: "After the bot upgrade, sessions with no handoff to a human are counted as resolved, and the rate went from 72% to 91%. In the same week the handoff button moved into a submenu and the denominator changed. How do you respond today to the proposal to cancel weekend human coverage?"
intent: "Understand whether you can see the gap between what a metric measures and the evidence a decision needs, and propose a verifiable, non-rash next step."
signals:
  - "Points out that 'no handoff' is not 'task completed' and lists at least three possible explanations"
  - "Explains that the denominator and entry change together make the rise incomparable, and proposes recomputing on the same basis or building a new baseline"
  - "Proposes a small validation on a specific task with guardrails rather than a blanket cut"
primaryCapability: value-direction.metrics-causality
topics: [metrics, operations, risk-management]
roles: [product, operations, data, manager]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor, team-manager, senior-manager]
scenarios: [interview, operations-review, promotion]
formats: [case]
followUps:
  - "How would you mark unconfirmed sessions instead of counting them as successes?"
  - "What evidence would be enough for you to support reducing human coverage in some time slot?"
source:
  - attribution: inspired
    label: "Engineering Decision Skills: the metric-decision example"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/projects/2026/09/engineering-decision-skills/zh.md
---
