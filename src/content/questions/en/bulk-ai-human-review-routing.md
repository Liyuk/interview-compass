---
questionId: bulk-ai-human-review-routing
kind: question
status: published
locale: en
title: When should a model hand off to a human?
question: >-
  A document assistant can complete most requests automatically, but error costs vary by scenario.
  How would you decide which outputs proceed automatically and which require human review?
intent: >-
  Examine how uncertainty signals, error costs, and human capacity jointly determine automation
  boundaries.
signals:
  - Distinguishes model confidence, evidence sufficiency, and task risk
  - Designs review paths by error cost and user impact
  - Considers reviewer capacity and how review outcomes feed back into the system
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - operations
roles:
  - ai-engineer
  - product
  - operations
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：人机协同与不确定性处理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
