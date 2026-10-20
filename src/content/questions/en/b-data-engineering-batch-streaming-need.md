---
questionId: "b-data-engineering-batch-streaming-need"
kind: "question"
status: "published"
locale: "en"
title: "The business says data must be real time, but no one can explain the cost of a fifteen-minute delay. How would you decide the architecture and freshness target?"
question: "The business says data must be real time, but no one can explain the cost of a fifteen-minute delay. How would you decide the architecture and freshness target?"
intent: "See whether you choose batch, micro-batch, or streaming based on decision timing and the cost of delay."
signals: ["Identifies the business action the data triggers", "Estimates the impact of latency on outcomes and cost", "Compares operational burden across batch, micro-batch, and streaming", "Proposes freshness targets that can be validated incrementally"]
primaryCapability: "domain-modeling.business-context"
topics: ["data-modeling", "product-thinking", "resource-allocation"]
roles:
  - data
  - product
  - operations
  - engineering
  - backend
  - ai-engineer
responsibilityScopes: ["team"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview", "hiring"]
formats: ["case", "system-design"]
followUps: []
source: [{"attribution": "inspired", "label": "Dataskew 数据工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/dataskew-io/data-engineering-interview-questions"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
