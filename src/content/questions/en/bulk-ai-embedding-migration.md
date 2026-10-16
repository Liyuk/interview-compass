---
questionId: bulk-ai-embedding-migration
kind: question
status: published
locale: en
title: Embedding-model and index migration
question: >-
  After changing an embedding model, old and new vectors are not directly comparable, while a full
  rebuild takes days. How would you design migration and query cutover?
intent: Focus on embedding-space versions, online rebuilding, retrieval consistency, and resource cost.
signals:
  - Makes embedding-model version explicit in document and query-index metadata
  - Designs retrieval during dual-index operation or staged backfill
  - Defines quality comparison, cutover window, and old-index retirement criteria
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - databases
  - reliability
roles:
  - ai-engineer
  - data
  - backend
  - engineering
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
    label: Landed AI Engineer Interview：向量检索与索引演进
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
