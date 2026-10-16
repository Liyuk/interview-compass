---
questionId: "a-monorepo-build-graph-invalidation"
kind: "question"
status: "published"
locale: "en"
title: "After code changes, the build system sometimes misses affected apps and sometimes rebuilds the entire repository. How would you validate the dependency graph and cache invalidation rules?"
question: "After code changes, the build system sometimes misses affected apps and sometimes rebuilds the entire repository. How would you validate the dependency graph and cache invalidation rules?"
intent: "Assesses whether you can establish understandable dependency tracking that balances build correctness and feedback speed."
signals: ["Explain how source, generated files, toolchains, and environment affect outputs","Check implicit dependencies, dynamic config, and cross-package generation","Validate affected-task selection with change samples","Compare cache hit rate with risks from incorrect reuse"]
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
followUps: ["How would you prevent cache poisoning from untrusted changes in a remote cache?","How would you prove it is safe to skip a task?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：Monorepo"}]
---
