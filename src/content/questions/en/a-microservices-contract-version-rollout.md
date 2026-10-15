---
questionId: "a-microservices-contract-version-rollout"
kind: "question"
status: "published"
locale: "en"
title: "A service must add a field and change another field’s meaning, but several legacy consumers cannot upgrade together. How would you evolve the contract?"
question: "A service must add a field and change another field’s meaning, but several legacy consumers cannot upgrade together. How would you evolve the contract?"
intent: "Assesses whether you can manage producer-consumer compatibility windows, migration order, and deprecation evidence."
signals: ["Separate additive, semantic, and breaking changes","Inventory consumers and actual usage","Design dual-read/write, version adapters, or staged migration","Use compatibility tests and traffic evidence to decide when to remove the old contract"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles: ["backend","engineering","ai-engineer"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["How would you deprecate safely when consumers are unknown?","How would you control divergence caused by dual writes during migration?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
---
