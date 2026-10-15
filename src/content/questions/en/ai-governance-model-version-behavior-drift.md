---
questionId: "ai-governance-model-version-behavior-drift"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "en"
title: "After a base-model switch, aggregate metrics look similar but some users report worse results. How would you detect behavior drift?"
question: "After a base-model switch, aggregate metrics look similar but some users report worse results. How would you detect behavior drift?"
intent: "Assesses whether you can connect model changes to specific user tasks, output behaviors, and downstream outcomes."
signals: ["Track versions of the model, prompts, retrieval corpus, tools, and parameters","Compare important error types by task and user segment, not only overall scores","Use fixed regression sets and production sampling to find the mechanism of change","Propose staged migration, parallel observation, rollback, and change communication"]
topics: ["ai-engineering","reliability","metrics"]
roles: ["ai-engineer","backend","data"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor","team-manager"]
formats: ["debugging","case"]
followUps: ["How would you detect and trace a silent model update by a provider?","Which changes require renewed approval rather than routine regression tests?"]
---
