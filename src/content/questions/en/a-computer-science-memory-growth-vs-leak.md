---
questionId: a-computer-science-memory-growth-vs-leak
kind: question
status: published
locale: en
title: Diagnosing sustained process memory growth
question: >-
  A long-running process keeps using more memory, while object counts in heap snapshots fluctuate. How would you use
  evidence to distinguish a true leak, intentional cache retention, fragmentation, or growth in native memory?
intent: >-
  Assesses whether you can diagnose memory growth with discriminating evidence rather than drawing conclusions from one
  process metric or heap snapshot.
signals:
  - Aligns workload, heap, native allocation, mapped pages, and process memory over time.
  - Distinguishes leaks, caches, and fragmentation through bounds, reclamation, and retention evidence.
  - Compares controlled load, sampled profiling, and dumps by diagnostic value and production cost.
  - Limits impact and verifies fixes under reproducible load and stated stability conditions.
primaryCapability: professional.computer-science
topics:
  - operating-systems
  - debugging
  - reliability
  - operations
  - backend
roles:
  - backend
  - mobile
  - engineering
  - frontend
  - data
  - ai-engineer
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
  - campus
formats:
  - debugging
  - knowledge
  - case
source:
  - attribution: original
    label: Original to this site
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: inspired
    label: Tech Interview Handbook：将问题拆成可验证证据
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - >-
    If memory grows under low traffic and temporarily resets after a restart, how would you plan sampling and
    experiments?
  - If heap object counts fall but process memory does not, what would you inspect next?
  - >-
    Process memory keeps growing while heap-object samples stay stable and container RSS increases. How would you
    distinguish off-heap allocation, fragmentation, and caches?
---
