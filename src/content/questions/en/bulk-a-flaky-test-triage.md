---
questionId: bulk-a-flaky-test-triage
kind: question
status: published
locale: en
title: 'Intermittent end-to-end failures: product risk or test race?'
question: >-
  A critical end-to-end test fails intermittently: it passes alone but fails in a parallel suite, and the team has
  started rerunning it until it passes. How would you determine whether it exposes product risk, isolate shared state,
  resource contention, clock or ordering dependencies, and improve the test workflow?
intent: >-
  Examines how you distinguish product defects, unstable environments, and test races while controlling feedback time
  and the risk of hiding failures.
signals:
  - >-
    Preserves failures and correlates browser, data, concurrency, and environment to test competing
    hypotheses.
  - Compares minimal reproductions, controlled scheduling, and environmental controls.
  - >-
    Bounds quarantine with alternative protection, owners, and deadlines instead of hiding failures
    through retries.
  - Tracks failures, feedback time, and missed defects to verify fixes beyond more reruns.
primaryCapability: professional.quality-security-safety
topics:
  - engineering-systems
  - devops
  - reliability
  - debugging
  - concurrency
  - operations
roles:
  - engineering
  - frontend
  - backend
  - data
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
  - individual
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
  - case
  - debugging
source:
  - attribution: inspired
    label: DevOps Interview Questions：CI 流程与自动化测试
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - "If a test passes alone but fails intermittently in the parallel suite, how would you test whether shared state or ordering explains the failure?"
  - "If failure occurs only in CI, what evidence would distinguish machine load from configuration differences?"
  - "When is temporary quarantine or serialization justified, and what owner, safeguards, and deadline should accompany it?"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
