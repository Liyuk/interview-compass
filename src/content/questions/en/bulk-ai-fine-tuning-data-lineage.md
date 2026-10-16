---
questionId: bulk-ai-fine-tuning-data-lineage
kind: question
status: published
locale: en
title: Fine-tuning data lineage and deletion
question: >-
  A team fine-tunes on user feedback, human labels, and synthetic samples, then receives a request
  to delete some source data. How would you trace impact and decide the scope of retraining?
intent: Examine how corpus provenance, derived-data lineage, and deletion requests affect model releases.
signals:
  - Records sample provenance, permission, version, and training jobs
  - Distinguishes deletable source records from model influence that is hard to retract individually
  - Explains evidence for rebuilding datasets, retraining, or limiting model use
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - data-modeling
  - security
roles:
  - ai-engineer
  - data
  - engineering
  - backend
responsibilityScopes:
  - team
  - organization
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：训练数据治理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
