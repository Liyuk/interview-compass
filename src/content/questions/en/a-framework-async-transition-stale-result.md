---
questionId: "a-framework-async-transition-stale-result"
kind: "question"
status: "published"
locale: "en"
title: "The framework allows concurrent background UI updates, but a slow response occasionally overwrites a newer selection. How would you design concurrent state updates?"
question: "The framework allows concurrent background UI updates, but a slow response occasionally overwrites a newer selection. How would you design concurrent state updates?"
intent: "Assesses whether you can distinguish concurrent rendering from request races and prevent earlier async results from overwriting current user intent."
signals: ["Track a stable identifier for each user intent and request","Choose whether to cancel old work or ignore stale responses","Separate pending, failed, and current-result states","Test rapid input, switching, and return scenarios"]
primaryCapability: "professional.coding-abstraction"
topics: ["frameworks","frontend","debugging"]
roles:
  - frontend
  - engineering
  - mobile
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["If cancellation is unreliable, how would you prevent stale responses from committing?","How should the interface represent the transition between old and new results?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
