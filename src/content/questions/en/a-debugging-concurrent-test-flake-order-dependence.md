---
questionId: a-debugging-concurrent-test-flake-order-dependence
kind: question
status: published
locale: en
title: >-
  A test passes alone but fails occasionally when the suite runs in parallel, and a rerun may pass.
  How would you find order dependence or shared state?
question: >-
  A test passes alone but fails occasionally when the suite runs in parallel, and a rerun may pass.
  How would you find order dependence or shared state?
intent: >-
  Assess whether you use repeatable evidence to distinguish a real race, weak isolation, clock
  dependence, and resource contention.
signals:
  - Collects failure order, parallelism, duration, and environment differences.
  - Checks global state, shared ports or files, random seeds, clocks, and asynchronous cleanup.
  - >-
    Builds a stable minimal reproduction before verifying the isolation fix under parallel
    execution.
primaryCapability: professional.debugging
topics:
  - debugging
  - concurrency
  - engineering-systems
roles:
  - engineering
  - backend
  - frontend
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
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - >-
    If failure occurs only in CI, how would you distinguish machine load from configuration
    differences?
  - Can serializing the test be a temporary mitigation, and when must the root cause still be fixed?
---
