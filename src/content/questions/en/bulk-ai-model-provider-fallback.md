---
questionId: bulk-ai-model-provider-fallback
kind: question
status: published
locale: en
title: Model-provider failover
question: "A product depends on an external model API, and the provider may restrict request frequency or change available models. How would you design switch rules and temporary shutdowns for noncritical features so quality changes after switching are visible?"
intent: >-
  Explore the relationship among fallback models, quality contracts, throttling, and dependency
  risk.
signals:
  - Compares consequences of retries, queuing, fallback models, and explicit failure
  - Defines quality and latency observations before and after a switch
  - Considers provider changes, regional failures, and a manual kill switch
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - devops
roles:
  - ai-engineer
  - backend
  - engineering
  - frontend
  - mobile
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：推理服务与模型路由
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
