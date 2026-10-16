---
questionId: "a-mfe-shared-dependencies-version-governance"
kind: "question"
status: "published"
locale: "en"
title: "Several child apps depend on different React and component-library versions, causing both duplicate downloads and runtime conflicts. How would you govern shared dependencies?"
question: "Several child apps depend on different React and component-library versions, causing both duplicate downloads and runtime conflicts. How would you govern shared dependencies?"
intent: "Assesses whether compatibility ranges, release cadence, and fault isolation inform which dependencies are shared or bundled locally."
signals: ["Inventory bundle size, versions, reuse, and conflict impact","Separate stable platform dependencies from rapidly changing team dependencies","Set compatibility windows, upgrade policy, and exceptions","Measure loading gains and verify rollback"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles:
  - frontend
  - engineering
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["How would you contain an incident if a shared dependency upgrade breaks one app?","How would you keep the shared platform from becoming a release bottleneck?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
---
