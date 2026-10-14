---
questionId: a-coding-abstraction-form-state-boundaries
kind: question
status: published
locale: en
title: "When form state gets out of hand, where do you draw the abstraction boundary?"
question: "A sign-up form ends up in inconsistent states because of duplicate submissions and weak-network retries. How would you map its states and transitions, and decide which logic to extract into its own unit?"
intent: "Understand whether you can describe an interaction as a finite set of states and transitions and choose abstraction boundaries from that, instead of piling on conditionals."
signals:
  - "Lists states and the events that trigger transitions, not only what the screen looks like"
  - "Points out which parts depend on interface guarantees such as idempotency"
  - "Explains which tests cover the critical paths"
primaryCapability: professional.coding-abstraction
topics: [frontend, frameworks]
roles: [engineering, frontend, mobile]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, campus, promotion]
formats: [coding, case]
followUps:
  - "Do the transition rules live in the component or in a separate module? What does each cost?"
source:
  - attribution: derived
    label: "What screeners and interviewers are really looking for (resume: replacing a duty list with problem, action, result)"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
---
