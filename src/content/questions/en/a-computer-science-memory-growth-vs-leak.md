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
  - Compare heap, native allocations, mapped pages, and RSS across time and load.
  - Use growth bounds, release behavior, and restart behavior to distinguish leaks, caches, and fragmentation.
  - Form discriminating hypotheses before choosing low-risk sampling or profiling.
  - Explain how to limit impact and verify a fix.
  - Forms testable technical hypotheses from inputs, mechanisms, and failure symptoms
  - Compares implementation paths and their correctness, performance, security, or maintenance cost
  - Names tests or operational measures that cover edge cases
  - Compares heap, off-heap, cache, and total-process memory over time
  - Proposes experiments that distinguish retained references from normal cache eviction
  - Explains the production risk of sampling, dumps, and reproduction
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
  - operations
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
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
