---
questionId: bulk-ai-model-provider-fallback
kind: question
status: published
locale: en
title: Model-provider failover
question: >-
  A product depends on an external model API whose provider may throttle requests or change
  available models. How would you design routing and degradation so quality changes after a switch
  are visible rather than silent?
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
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：推理服务与模型路由
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
