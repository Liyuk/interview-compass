---
questionId: "a-mfe-cross-app-event-contract"
kind: "question"
status: "published"
locale: "en"
title: "One app emits an “order completed” event, but other modules interpret it differently, causing duplicate requests and divergent page state. How would you define a cross-app event contract?"
question: "One app emits an “order completed” event, but other modules interpret it differently, causing duplicate requests and divergent page state. How would you define a cross-app event contract?"
intent: "Assesses whether you can define event ownership, versioning, semantics, and consumer behavior without turning an event bus into implicit shared state."
signals: ["Specify the business fact, identifier, and timing represented by an event","Distinguish notification from the authoritative data source","Define version compatibility, duplicate delivery, and subscriber cleanup","Monitor event backlog and consumer errors"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles:
  - frontend
  - engineering
  - backend
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["How should a page recover consistency if an app misses an event?","When should a shared API be used instead of an event?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
---
