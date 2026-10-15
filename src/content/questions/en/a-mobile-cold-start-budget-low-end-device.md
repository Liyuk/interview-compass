---
questionId: "a-mobile-cold-start-budget-low-end-device"
kind: "question"
status: "published"
locale: "en"
title: "A new feature adds startup dependencies and cold start becomes much slower on low-end devices, while high-end metrics remain normal. How would you prioritize optimization?"
question: "A new feature adds startup dependencies and cold start becomes much slower on low-end devices, while high-end metrics remain normal. How would you prioritize optimization?"
intent: "Assesses whether you can analyze cold-start bottlenecks by device tier and prioritize low-end experience against initialization cost."
signals: ["Define cold-start phases and user-perceived readiness","Locate added cost by device, network, and version","Separate critical dependencies from deferred or unnecessary initialization","Set budgets, regression gates, and low-end-device fallbacks"]
primaryCapability: "professional.system-design"
topics: ["mobile","engineering-systems","reliability"]
roles: ["mobile","engineering"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["How would you rebalance if lazy loading causes jank after first interaction?","How would you avoid optimizing average devices while missing the long tail?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
