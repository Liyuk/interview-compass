---
questionId: "a-engineering-systems-credential-rotation"
kind: "question"
status: "published"
locale: "en"
title: "A long-lived credential is shared by several services. Security requires prompt rotation, but all dependents cannot be stopped at once. How would you proceed?"
question: "A long-lived credential is shared by several services. Security requires prompt rotation, but all dependents cannot be stopped at once. How would you proceed?"
intent: "See whether you map dependencies and plan an overlap period, verification, and revocation."
signals: ["Maps credential consumers and call paths", "Uses a short overlap window for migration", "Revokes old credentials only after verifying dependents", "Prepares emergency response for exposure or failed rotation"]
primaryCapability: "professional.engineering-systems"
topics: ["devops", "security", "reliability"]
roles: ["engineering", "backend"]
responsibilityScopes: ["multiple-teams"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["planning", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/DNXLabs/DevOps-Interview-Questions"}]
---
