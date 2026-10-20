---
questionId: "a-mfe-runtime-failure-isolation"
kind: "question"
status: "published"
locale: "en"
title: "If one micro-app fails at startup, how can the rest of the workspace stay available?"
question: "If a micro-app fails at startup, users cannot access other modules. How would you isolate the failure and, if needed, disable noncritical features to keep the rest available?"
intent: "Assesses whether you can limit the blast radius of one module and preserve usable functions with clear user feedback."
signals: ["Distinguish load failures, runtime exceptions, and shell failures","Use timeouts, error boundaries, and independent retries for child apps","Preserve navigation and available modules with a recovery path","Validate isolation and alerts with fault injection"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles:
  - frontend
  - engineering
  - design
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["If shell failure cannot be isolated, what is the minimum viable entry point?","How would you keep automatic retries from amplifying downstream failures?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
