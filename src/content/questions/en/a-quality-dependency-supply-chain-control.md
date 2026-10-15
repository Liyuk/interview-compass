---
questionId: "a-quality-dependency-supply-chain-control"
kind: "question"
status: "published"
locale: "en"
title: "A widely used dependency is disclosed as critically vulnerable, but upgrading may introduce compatibility issues. How would you sequence the response?"
question: "A widely used dependency is disclosed as critically vulnerable, but upgrading may introduce compatibility issues. How would you sequence the response?"
intent: "Assesses whether you can rank risk by exploitability, exposure, and mitigations while controlling upgrade risk."
signals: ["Confirm affected versions, call paths, exposure, and exploit conditions","Inventory affected services and apply temporary mitigations","Validate the upgrade and regression scope in isolation","Roll out in stages, monitor residual exposure, and record risk acceptance"]
primaryCapability: "professional.quality-security-safety"
topics: ["security","engineering-systems","devops"]
roles: ["engineering","backend","frontend"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","planning"]
followUps: ["If no patch exists while scanners are probing the service, how would you choose temporary controls?","How would you prove every affected instance has been fixed?"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 D"}]
---
