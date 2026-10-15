---
questionId: bulk-ai-rag-retrieval-diagnosis
kind: question
status: published
locale: en
title: Diagnosing missing evidence in RAG
question: >-
  Users say answers sound plausible but omit a critical constraint present in the documents. How
  would you locate whether parsing, chunking, retrieval, ranking, or generation caused the failure?
intent: Examine decomposition of end-to-end errors into observable stages and reproducible diagnostics.
signals:
  - Preserves the failed query, expected evidence, and retrieved passages
  - Compares parsed text, retrieval candidates, and final context stage by stage
  - Distinguishes missing retrieval from evidence the model failed to use
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - debugging
  - data-modeling
roles:
  - ai-engineer
  - data
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：检索与 RAG 评估
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
