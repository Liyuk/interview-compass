---
questionId: "a-monorepo-migration-repo-split-sequence"
kind: "question"
status: "published"
locale: "en"
title: "A team decides to split a large repository, but history, CI, package releases, and ownership are connected. How would you sequence the migration?"
question: "A team decides to split a large repository, but history, CI, package releases, and ownership are connected. How would you sequence the migration?"
intent: "Assesses whether you can remove migration dependencies, preserve traceability and rollback, and then switch workflows incrementally."
signals: ["Map repository boundaries and cross-repository dependencies","Choose whether to preserve, mirror, or archive history and explain why","Plan dual-write or freeze windows, CI migration, and package-source updates","Set acceptance, rollback, and owners for each step"]
primaryCapability: "professional.engineering-systems"
topics: ["monorepo","engineering-systems","devops"]
roles:
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
  - data
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["case","planning"]
followUps: ["What signals show that splitting costs more than keeping a monorepo?","How would you keep security fixes and releases uninterrupted?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：Monorepo"}]
---
