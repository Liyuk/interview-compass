---
questionId: "a-mfe-auth-session-cross-app"
kind: "question"
status: "published"
locale: "en"
title: "A user signs in within one child app but loses permissions or session state when switching to another. How would you design the boundary for shared auth context?"
question: "A user signs in within one child app but loses permissions or session state when switching to another. How would you design the boundary for shared auth context?"
intent: "Assesses whether you can define a protocol balancing consistent identity experience with least privilege, token safety, and app isolation."
signals: ["Separate identity, session, and resource-authorization responsibilities","Define which identity data shell and child apps may read","Avoid sharing privileged credentials through unsafe browser storage","Cover logout, renewal, permission changes, and multi-tab behavior"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles: ["frontend","engineering","design"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["How can apps on different origins share sign-in safely?","How should revoked permissions propagate promptly?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
---
