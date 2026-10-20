---
questionId: a-system-design-cost-model
kind: question
status: published
locale: en
title: From an engineering view, how do you estimate the overall cost of a system?
question: From an engineering view, how do you estimate the overall cost of a system? How are storage and compute costs each calculated, and which grow linearly with scale and which do not?
intent: See whether you can connect system design to cost and identify the main cost drivers.
signals:
  - Breaks cost into storage, compute, network, and operations, with the driver of each
  - Separates costs that grow with data or request volume from fixed costs
  - Says what scale assumptions the estimate rests on and which variable it is most sensitive to
  - Names what cutting cost may cost in return, such as latency or reliability
primaryCapability: professional.system-design
topics: [system-design, resource-allocation, engineering-systems]
roles:
  - engineering
  - backend
  - data
  - manager
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion]
formats: [case, system-design]
followUps:
  - If data grows tenfold, which cost fails first?
  - How do you help the business side understand these costs?
source:
  - attribution: original
    label: "The author's interview sequence: cost estimation from an engineering view"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
