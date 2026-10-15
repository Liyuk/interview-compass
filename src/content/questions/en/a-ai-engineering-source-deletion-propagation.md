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
  - Traces dependencies from source versions and permissions to chunks, vector indexes, caches, and citations
  - Defines propagation deadlines, failure compensation, and completion criteria for updates and revocation
  - Provides auditable deletion confirmation and sampling-based verification
  - Quarantines stale content during index rebuilds or propagation failures to prevent unauthorized retrieval
  - Forms testable technical hypotheses from inputs, mechanisms, and failure symptoms
  - Compares implementation paths and their correctness, performance, security, or maintenance cost
  - Names tests or operational measures that cover edge cases
  - Traces source-document versions to retrieved chunks and answer citations
  - Explains completion criteria for update, deletion propagation, and cache invalidation
  - Handles isolation or degradation of stale knowledge while indexing fails
  - Inventory source, chunks, vectors, caches, and backups.
  - Separate request acceptance, retrieval suppression, and complete erasure.
  - Design retryable deletion events and sampled verification.
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
responsibilityScopes:
  - multiple-teams
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
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
---
