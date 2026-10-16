---
questionId: "a-microservices-team-boundary-change"
kind: "question"
status: "published"
locale: "en"
title: "Several services have separate owning teams, yet a small change often requires three or four teams to release together. How would you assess whether the service boundaries have failed?"
question: "Several services have separate owning teams, yet a small change often requires three or four teams to release together. How would you assess whether the service boundaries have failed?"
intent: "Assesses whether you can evaluate change coupling, business capability boundaries, ownership, and independent evolution together。"
signals: ["Measure cross-service changes and coordinated releases","Trace shared data models and implicit runtime dependencies","Compare migration cost of splitting, merging, or changing ownership","Validate a reversible pilot against reduced coordination"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles:
  - backend
  - engineering
  - ai-engineer
  - frontend
  - mobile
  - data
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["What evidence would show the problem is organizational rather than structural?","How would you avoid a large-bang rewrite?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
---
