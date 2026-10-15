---
questionId: "a-framework-form-state-validation-boundary"
kind: "question"
status: "published"
locale: "en"
title: "A complex form has field validation, cross-field rules, and server errors that overwrite one another during edits. How would you divide framework state from business state?"
question: "A complex form has field validation, cross-field rules, and server errors that overwrite one another during edits. How would you divide framework state from business state?"
intent: "Assesses whether you can separate form interaction state, server facts, and domain validation while resolving async update races."
signals: ["Separate transient input, derived validation, server facts, and business rules","Define a source of truth and state transitions","Handle async-validation races and stale results","Use testable boundaries to reduce implicit coupling"]
primaryCapability: "professional.coding-abstraction"
topics: ["frameworks","frontend","programming-languages"]
roles: ["frontend","engineering"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["Should cross-field rules live in a component, form library, or domain layer?","How would you prove concurrent validation cannot show stale errors?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
