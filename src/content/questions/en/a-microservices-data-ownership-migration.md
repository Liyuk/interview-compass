---
questionId: "a-microservices-data-ownership-migration"
kind: "question"
status: "published"
locale: "en"
title: "Two services write directly to the same business table, and an immediate shutdown is impossible. How would you gradually establish a single data owner?"
question: "Two services write directly to the same business table, and an immediate shutdown is impossible. How would you gradually establish a single data owner?"
intent: "Assesses whether you can plan shared-store decoupling, write-authority migration, and data-consistency verification."
signals: ["Identify business rules and data responsibility for each writer","Choose an authoritative write path and a compatibility phase","Compare discrepancies with shadow checks, dual reads, or change logs","Set cutover criteria, rollback window, and evidence that old writes stopped"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles: ["backend","engineering","ai-engineer"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["When dual writes diverge during transition, which value is authoritative?","How would you prove all legacy clients have migrated?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
---
