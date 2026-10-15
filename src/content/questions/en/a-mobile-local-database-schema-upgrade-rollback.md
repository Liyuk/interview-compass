---
questionId: "a-mobile-local-database-schema-upgrade-rollback"
kind: "question"
status: "published"
locale: "en"
title: "A client upgrade must migrate its local database, but users may return to the old version if startup fails. How would you design migration and rollback?"
question: "A client upgrade must migrate its local database, but users may return to the old version if startup fails. How would you design migration and rollback?"
intent: "Assesses whether you can handle on-device data migration across versions, process interruption, and rollback to an older app."
signals: ["List supported upgrade spans and data-format versions","Run recoverable migration on a copy or in a transaction","Validate constraints and critical user data before and after","Define failure recovery, old-version reads, and cleanup"]
primaryCapability: "professional.engineering-systems"
topics: ["mobile","databases","reliability"]
roles: ["mobile","engineering"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["How would recovery work if the OS kills the app during migration?","How would you handle several skipped versions after a long delay?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
