---
questionId: "b-data-model-safe-backfill"
kind: "question"
status: "published"
locale: "en"
title: "An upstream fix corrects an error affecting the past two years of data, and the business wants corrected results quickly. How would you backfill without disrupting current production reports?"
question: "An upstream fix corrects an error affecting the past two years of data, and the business wants corrected results quickly. How would you backfill without disrupting current production reports?"
intent: "See whether you can make historical correction resumable, verifiable, and safely switchable."
signals: ["Estimates impact and resource use first", "Chunks work by partition or time range with resumability", "Compares counts, values, and key metrics in isolation", "Plans cutover, rollback, and downstream communication"]
primaryCapability: "domain-modeling.model-evolution"
topics: ["data-modeling", "reliability", "risk-management"]
roles: ["data", "backend"]
responsibilityScopes: ["team", "multiple-teams"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["planning", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "Dataskew 数据工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/dataskew-io/data-engineering-interview-questions"}]
---
