---
questionId: "a-engineering-systems-schema-deploy-rollback"
kind: "question"
status: "published"
locale: "en"
title: "The application can be rolled back, but a database migration removed an old field and the previous version can no longer start. How would you redesign release order and rollback?"
question: "The application can be rolled back, but a database migration removed an old field and the previous version can no longer start. How would you redesign release order and rollback?"
intent: "Assess whether you understand compatibility windows across application and data changes, and why rollback does not restore every state."
signals: ["Uses staged expand-and-contract or compatible dual-read/write steps", "Defines constraints while old and new versions coexist", "Tests migration failure and rollback paths", "Explains when forward repair is safer than downgrade"]
primaryCapability: "professional.engineering-systems"
topics: ["devops", "databases", "reliability"]
roles: ["engineering", "backend", "data"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["system-design", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/DNXLabs/DevOps-Interview-Questions"}]
---
