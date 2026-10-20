---
questionId: a-ai-engineering-source-deletion-propagation
kind: question
status: published
locale: en
title: RAG knowledge updates, access revocation, and verifiable deletion
question: >-
  Enterprise knowledge documents may change, be withdrawn, or become restricted, yet users still receive answers citing
  old content. How would you propagate changes from source documents through chunks, indexes, caches, and existing
  citations, and prove that an update or deletion took effect?
intent: >-
  Assesses whether you treat freshness, permission changes, and deletion as end-to-end data-lifecycle requirements and
  prevent stale or unauthorized content from being exposed when propagation fails.
signals:
  - Traces source versions to chunks, vectors, indexes, caches, citations, and backups.
  - Separates acceptance, blocked new access, and completed cleanup under verified policies.
  - Defines retryable propagation and isolation so revoked content is not served during rebuilds.
  - >-
    Verifies scope with queries, logs, versions, and samples, stating limits on already distributed
    content.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
  - engineering-systems
  - data-modeling
  - metrics
  - databases
  - reliability
roles:
  - ai-engineer
  - backend
  - data
  - engineering
  - product
  - frontend
  - mobile
responsibilityScopes:
  - multiple-teams
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - campus
  - promotion
formats:
  - system-design
  - case
  - debugging
followUps:
  - If an index update fails while the old index remains available, how should the system degrade?
  - How would you prove that withdrawn content is no longer exposed by replicas, caches, or generated citations?
  - How can answers avoid citing old material during cleanup?
  - How should failed downstream deletion be alerted and compensated?
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: inspired
    label: Landed AI Engineer Interview：RAG 与知识库更新
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
