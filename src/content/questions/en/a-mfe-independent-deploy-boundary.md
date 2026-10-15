---
questionId: "a-mfe-independent-deploy-boundary"
kind: "question"
status: "published"
locale: "en"
title: "Several frontend modules build independently, but releases still require coordination. What evidence would show they have a real independent delivery boundary?"
question: "Several frontend modules build independently, but releases still require coordination. What evidence would show they have a real independent delivery boundary?"
intent: "Assesses whether you can distinguish build separation from real independence in ownership, contracts, runtime, and rollback."
signals: ["Track cross-module changes, coordinated releases, and waiting","Check interface contracts, shared state, and environment coupling","Assess independent degradation and rollback","Propose a pilot that tests the boundary with a small change"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles: ["frontend","engineering","design"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["When does independent deployment add only complexity?","How would you measure the value of team autonomy?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
---
