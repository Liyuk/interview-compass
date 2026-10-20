---
questionId: "a-mfe-shell-routing-history-contract"
kind: "question"
status: "published"
locale: "en"
title: "Several child apps share the browser address bar, but back/forward, deep links, and login redirects behave inconsistently. How would you define a routing contract?"
question: "Several child apps share the browser address bar, but back/forward, deep links, and login redirects behave inconsistently. How would you define a routing contract?"
intent: "Assesses whether you can define navigation ownership, URL semantics, and cross-app lifecycle as a clear runtime contract."
signals: ["Specify route namespaces, default entry, and unknown-route behavior","Define back/forward, deep-link, and refresh behavior","Clarify auth return paths and mount order","Create testable contracts for cross-app navigation"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles:
  - frontend
  - engineering
  - design
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["Who should own global navigation and 404 handling?","How would you prevent one child app’s route change from breaking other teams?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
