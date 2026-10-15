---
questionId: "a-monorepo-selective-ci-change-detection"
kind: "question"
status: "published"
locale: "en"
title: "The repository has hundreds of packages and full CI is slow. The team wants to test only “affected” areas. How would you prove selective testing does not miss critical dependencies?"
question: "The repository has hundreds of packages and full CI is slow. The team wants to test only “affected” areas. How would you prove selective testing does not miss critical dependencies?"
intent: "Assesses whether you can validate conservative change detection, dependency-graph quality, and full-suite safeguards."
signals: ["Define rules for direct, transitive, and toolchain changes","Replay historical commits to compare selection with actual failure scope","Keep periodic full runs and mandatory critical-path tests","Monitor misses, over-selection, runtime, and repair cost"]
primaryCapability: "professional.engineering-systems"
topics: ["monorepo","engineering-systems","devops"]
roles: ["engineering","frontend","backend"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","planning"]
followUps: ["If the graph is incomplete, should selection expand first or the graph be fixed first?","Which changes should always trigger full tests?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：Monorepo"}]
---
