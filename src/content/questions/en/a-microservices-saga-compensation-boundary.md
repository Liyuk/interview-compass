---
questionId: "a-microservices-saga-compensation-boundary"
kind: "question"
status: "published"
locale: "en"
title: "A cross-service flow includes payment, inventory reservation, and shipment. How would you define compensations and irreversible boundaries when later steps fail?"
question: "A cross-service flow includes payment, inventory reservation, and shipment. How would you define compensations and irreversible boundaries when later steps fail?"
intent: "Assesses whether you can model business-state transitions, compensation semantics, and irreversible external side effects."
signals: ["List commit, timeout, and duplicate-execution states for each step","Separate technical retries, business compensation, and manual handling","Address irreversible effects such as shipment","Make the workflow observable, idempotent, and resumable"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles:
  - backend
  - engineering
  - ai-engineer
  - data
  - product
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["How would you prevent prolonged inconsistency if compensation itself fails?","When should work remain pending instead of being retried automatically?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
---
