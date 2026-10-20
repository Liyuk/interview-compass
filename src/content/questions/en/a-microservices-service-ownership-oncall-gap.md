---
questionId: "a-microservices-service-ownership-oncall-gap"
kind: "question"
status: "published"
locale: "en"
title: "Incidents recur at service boundaries. Each team can show its service is healthy, but nobody owns end-to-end recovery. How would you repair accountability?"
question: "Incidents recur at service boundaries. Each team can show its service is healthy, but nobody owns end-to-end recovery. How would you repair accountability?"
intent: "Assesses whether service ownership, user journeys, and incident command can form a closed loop."
signals: ["Map dependencies and owners along the user-impact path","Define end-to-end objectives and cross-team escalation","Distinguish component health from user-outcome health","Update on-call boundaries, runbooks, and drills after review"]
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
followUps: ["Who should command a cross-team incident, and on what basis?","How would you avoid escalating every boundary failure to the platform team?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
