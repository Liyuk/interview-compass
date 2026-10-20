---
questionId: "a-compiler-language-abi-boundary-change"
kind: "question"
status: "published"
locale: "en"
title: "A compiler upgrade changes struct layout or calling conventions, but some plugins are still built against the old ABI. How would you manage compatibility and migration?"
question: "A compiler upgrade changes struct layout or calling conventions, but some plugins are still built against the old ABI. How would you manage compatibility and migration?"
intent: "Assesses whether you can distinguish source from binary compatibility and migrate a compiler ABI in stages."
signals: ["Identify changes to layout, symbols, calling conventions, and runtime assumptions","Inventory plugin builds and runtime environments","Choose ABI versioning, adapters, or a dual-version transition","Validate cutover and rollback with a compatibility matrix and real plugins"]
primaryCapability: "professional.computer-science"
topics: ["compiler-design","programming-languages","engineering-systems"]
roles:
  - engineering
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["How would you isolate risk from plugins that cannot upgrade?","When should support for an old ABI end?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
