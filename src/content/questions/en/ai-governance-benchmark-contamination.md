---
questionId: "ai-governance-benchmark-contamination"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "en"
title: "Public benchmarks keep improving while internal task performance stalls. How would you investigate evaluation distortion?"
question: "Public benchmarks keep improving while internal task performance stalls. How would you investigate evaluation distortion?"
intent: "Assesses whether you can detect benchmark contamination, metric gaming, or leakage and establish independent validation."
signals: ["Separate capability gains from adaptation to known tasks, prompt templates, or scoring rules","Check data overlap, version changes, labeling standards, and evaluation code","Design isolated holdouts, blind tests, or replay of new tasks while protecting the test set","State what evidence would overturn the claim that the model improved"]
topics: ["ai-engineering","metrics","ethics"]
roles:
  - ai-engineer
  - data
  - manager
  - engineering
  - backend
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
formats: ["debugging","case"]
followUps: ["How would you restore a comparable trend if benchmark items entered training data?","Who should access a hidden evaluation set, and what audit trail is needed?"]
---
