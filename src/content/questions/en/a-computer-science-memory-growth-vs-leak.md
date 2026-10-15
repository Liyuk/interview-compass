---
questionId: a-computer-science-memory-growth-vs-leak
kind: question
status: published
locale: en
title: Diagnosing sustained process memory growth
question: >-
  A long-running process keeps using more memory, while object counts in heap snapshots fluctuate. How would
  you use evidence to distinguish a true leak, intentional cache retention, fragmentation, or growth in native
  memory?
intent: >-
  Assesses whether you can diagnose memory growth with discriminating evidence rather than drawing conclusions
  from one process metric or heap snapshot.
signals:
  - Compares resident memory, heap, native memory, and retained-object trends
  - Checks whether growth is bounded, falls after release, and tracks working-set changes
  - Designs observations that distinguish caching, fragmentation, and a true leak
  - Narrows the cause before changing code or configuration, then verifies side effects
  - Controls experimental variables and explains the production risk of sampling, dumps, and reproduction
primaryCapability: professional.computer-science
topics:
  - operating-systems
  - debugging
roles:
  - backend
  - mobile
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
formats:
  - debugging
  - knowledge
source:
  - attribution: original
    label: Original to this site
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: inspired
    label: Tech Interview Handbook：将问题拆成可验证证据
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - >-
    If memory grows under low traffic and temporarily resets after a restart, how would you plan sampling and
    experiments?
  - If heap object counts fall but process memory does not, what would you inspect next?
---
