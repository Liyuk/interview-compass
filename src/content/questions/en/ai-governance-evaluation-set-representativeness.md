---
questionId: "ai-governance-evaluation-set-representativeness"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "en"
title: "How would you assess release risk when an offline evaluation set misses real user requests?"
question: "How would you assess release risk when an offline evaluation set misses real user requests?"
intent: "Assesses whether you can identify gaps between evaluation samples and real usage, then turn uncovered areas into a bounded release decision."
signals: ["Segment real traffic by user, task, language, input length, and risk level","Explain sample sources, refresh cadence, representativeness, and long-tail gaps","Propose stratified evaluation, shadow traffic, or controlled rollout to gather evidence","State limits, rollback conditions, and owners when evidence is incomplete"]
topics: ["ai-engineering","metrics","risk-management"]
roles: ["ai-engineer","data","product"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor","team-manager"]
formats: ["case","planning"]
followUps: ["How would you sample without increasing exposure of sensitive data?","Which blind spots are acceptable, and which must block release?"]
---
