---
questionId: "ai-governance-tool-permission-boundaries"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "en"
title: "An AI assistant can call internal tools, but tasks require different permissions. How would you design authorization and audit?"
question: "An AI assistant can call internal tools, but tasks require different permissions. How would you design authorization and audit?"
intent: "Assesses whether you can contain model uncertainty within least-privilege boundaries and control authorization, execution, and accountability."
signals: ["Classify read, write, and external-send operations by risk and authority","Use task-scoped grants, least privilege, explicit confirmation, or dual approval","Validate parameters and target resources instead of treating model text as commands","Log the actor, intent, parameters, result, and revocation path"]
topics: ["ai-engineering","security","boundaries"]
roles: ["ai-engineer","backend","product"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
formats: ["system-design","case"]
followUps: ["How could urgent automation reduce confirmation steps without expanding privilege?","How would you prevent prompt injection from abusing an authorized tool?"]
---
