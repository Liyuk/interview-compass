---
questionId: bulk-ai-rag-retrieval-diagnosis
kind: question
status: published
locale: en
title: Diagnosing missing evidence in RAG
question: >-
  Users say answers sound plausible but omit a critical constraint present in the documents. How would you
  locate whether parsing, chunking, retrieval, ranking, or generation caused the failure?
intent: Examine decomposition of end-to-end errors into observable stages and reproducible diagnostics.
signals:
  - Preserves the failed query, expected evidence, and retrieved passages
  - Compares parsed text, retrieval candidates, and final context stage by stage
  - Distinguishes missing retrieval from evidence the model failed to use
  - Distinguishes recall, ranking relevance, context noise, and answer faithfulness.
  - Analyzes the impact of missed, repeated, conflicting, or oversized context by task type.
  - Uses stage-level comparisons and end-to-end task measures rather than one retrieval metric.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - debugging
  - data-modeling
roles:
  - ai-engineer
  - data
  - product
  - engineering
  - backend
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
  - debugging
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：检索与 RAG 评估
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
followUps:
  - How would you build evaluation cases that expose duplicate evidence and contradictory documents?
  - If less context improves faithfulness but reduces coverage, how would you decide the trade-off?
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
