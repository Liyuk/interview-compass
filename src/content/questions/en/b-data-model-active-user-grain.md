---
questionId: "b-data-model-active-user-grain"
kind: "question"
status: "published"
locale: "en"
title: "Product, finance, and growth teams each report “active users,” but the numbers differ. What would you ask before deciding whether to standardize the definition?"
question: "Product, finance, and growth teams each report “active users,” but the numbers differ. What would you ask before deciding whether to standardize the definition?"
intent: "See whether you clarify business use, grain, and time semantics before discussing implementation."
signals: ["Asks what decisions each team makes with the metric", "Defines user, event, deduplication key, and time window", "Separates legitimate definition differences from data-quality issues", "Keeps necessary variants with clear owners"]
primaryCapability: "domain-modeling.data-model"
topics: ["data-modeling", "metrics"]
roles:
  - data
  - product
  - operations
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: ["team"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview", "hiring"]
formats: ["case"]
followUps: []
source: [{"attribution": "inspired", "label": "Dataskew 数据工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/dataskew-io/data-engineering-interview-questions"}]
---
