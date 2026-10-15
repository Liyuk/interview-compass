---
questionId: "a-mfe-runtime-failure-isolation"
kind: "question"
status: "published"
locale: "en"
title: "A startup failure in one child app blocks the entire workspace, preventing access to other modules. How would you design runtime isolation and degradation?"
question: "A startup failure in one child app blocks the entire workspace, preventing access to other modules. How would you design runtime isolation and degradation?"
intent: "Assesses whether you can limit the blast radius of one module and preserve usable functions with clear user feedback."
signals: ["Distinguish load failures, runtime exceptions, and shell failures","Use timeouts, error boundaries, and independent retries for child apps","Preserve navigation and available modules with a recovery path","Validate isolation and alerts with fault injection"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles: ["frontend","engineering","design"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["If shell failure cannot be isolated, what is the minimum viable entry point?","How would you keep automatic retries from amplifying downstream failures?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
---
