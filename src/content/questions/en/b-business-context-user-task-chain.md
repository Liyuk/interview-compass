---
questionId: b-business-context-user-task-chain
kind: question
status: published
locale: en
title: "Who does your module serve, and how does it affect business results?"
question: "Pick a module you own. Explain who it serves, what input it takes, what output it provides, and follow the user task through to the business result."
intent: "Understand whether you can place your work inside the causal chain between a user task and a business outcome, rather than only describing what was built."
signals:
  - "Names the task a user or partner is trying to finish, not a feature name"
  - "Describes upstream and downstream dependencies and the link the module can actually influence"
  - "Separates existing evidence from assumptions that still need validation"
primaryCapability: domain-modeling.business-context
topics: [product-thinking]
roles:
  - engineering
  - backend
  - product
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion, self-reflection]
formats: [case]
followUps:
  - "If the module's own metric improves but the final result does not, which link in the chain might be broken?"
  - "Which links does your module explicitly not affect?"
source:
  - attribution: derived
    label: "Why engineers need product judgment: stages of product awareness and the business causal chain"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/02/engineer-product-judgment/zh.md
---
