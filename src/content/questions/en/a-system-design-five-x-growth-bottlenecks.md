---
questionId: a-system-design-five-x-growth-bottlenecks
kind: question
status: published
locale: en
title: Next year the business is expected to grow fivefold. Starting from your current architecture, how do you run a full bottleneck review and prepare in stages?
question: "A major promotion or international launch may increase traffic fivefold next year. Starting from the current architecture, how would you check for bottlenecks in the gateway, critical request flows, storage, and machine resources? How would you phase the work, staff it, and validate your assumptions?"
intent: See whether you can turn a growth expectation into a concrete list of capacity risks, invest in stages, and confirm by verification rather than intuition.
signals:
  - Identifies bottlenecks layer by layer and their sensitivity to growth, separating what linear scaling solves from what needs an architecture change
  - Explains validating capacity with load tests, historical data, and projection, not only experience
  - Arranges investment in stages and says the goal, staffing, and checkpoint of each
  - Says how to adjust when growth falls short of or exceeds expectation
primaryCapability: professional.system-design
topics: [system-design, reliability, planning, distributed-systems, technical-planning]
roles: [engineering, backend, manager]
responsibilityScopes: [team, multiple-teams]
careerTracks: [team-manager, senior-manager]
scenarios: [interview, promotion, hiring]
formats: [case, planning, system-design]
followUps:
  - Resources cover only half of the bottlenecks. Which do you fix first, and on what basis?
  - The growth comes from an entirely new user group and history offers no reference. How do you estimate?
source:
  - attribution: original
    label: "The author's leveled interview framework, first-line engineering manager"
---
