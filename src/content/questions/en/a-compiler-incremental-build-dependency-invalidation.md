---
questionId: "a-compiler-incremental-build-dependency-invalidation"
kind: "question"
status: "published"
locale: "en"
title: "Incremental compilation is fast, but changes to a shared header sometimes fail to rebuild all dependent targets. How would you find the dependency-tracking gap?"
question: "Incremental compilation is fast, but changes to a shared header sometimes fail to rebuild all dependent targets. How would you find the dependency-tracking gap?"
intent: "Assesses whether you can find missing build-graph dependencies and verify incremental outputs match clean builds."
signals: ["Check whether dependencies, generated files, and compiler flags enter the build graph","Compare clean and incremental outputs","Use a minimal reproduction to find missing dependencies","Add dependency checks and cache-invalidation tests"]
primaryCapability: "professional.computer-science"
topics: ["compiler-design","programming-languages","engineering-systems"]
roles: ["engineering","backend"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["How would you prove the fix did not turn incremental builds into full rebuilds?","How can remote build caches affect reproducibility?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
