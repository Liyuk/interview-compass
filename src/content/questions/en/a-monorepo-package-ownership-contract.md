---
questionId: "a-monorepo-package-ownership-contract"
kind: "question"
status: "published"
locale: "en"
title: "In a monorepo, shared packages are casually changed by one team, while consumers discover behavior changes only after upgrading. How would you establish ownership and compatibility contracts?"
question: "In a monorepo, shared packages are casually changed by one team, while consumers discover behavior changes only after upgrading. How would you establish ownership and compatibility contracts?"
intent: "Assesses whether package boundaries, maintenance ownership, change notice, and consumer validation can be aligned."
signals: ["Inventory package consumers, key APIs, and blast radius","Assign maintainers and change-acceptance owners","Define versioning, deprecation windows, and change logs","Cover representative consumers with compatibility tests"]
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
followUps: ["How would you assign or retire a package nobody wants to maintain?","How would you handle consumers that cannot upgrade in sync?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：Monorepo"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
