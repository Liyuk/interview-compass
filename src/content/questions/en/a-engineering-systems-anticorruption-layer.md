---
questionId: a-engineering-systems-anticorruption-layer
kind: question
status: published
locale: en
title: An old system keeps accumulating new business and becomes hard to maintain. How do you design an isolation layer to protect new business code from it?
question: An old system keeps accumulating new business and becomes harder to maintain. As the module owner, how do you design an isolation layer (anticorruption layer) to keep new business code from being polluted by the old system? Tell me about a real case you led and what compromises and risks you left because of real limits.
intent: See how you isolate a legacy system step by step with clear boundaries when a rewrite is not possible, and whether you are honest about compromises.
signals:
  - Explains where the isolation layer sits, what it translates, and the boundary between old and new models
  - Explains how migration proceeded in steps and how production was kept unaffected
  - Names the core limit, such as time, staffing, or no downtime, and the trade-offs it forced
  - Is candid about known risks and regrets left behind, not only success
primaryCapability: professional.engineering-systems
topics: [engineering-systems, system-design, risk-management]
roles: [engineering, backend, frontend, manager]
responsibilityScopes: [team]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, promotion, hiring]
formats: [behavioral, case, system-design]
followUps:
  - Could the isolation layer itself become a new burden? How do you control that?
  - New business needs a capability inside the old system. How do you reuse it without being polluted?
source:
  - attribution: original
    label: "The author's leveled interview framework, senior engineer"
---
