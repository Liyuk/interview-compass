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
  - Correlates failures with browser, test data, concurrency, clocks, execution order, and environment state
  - Uses unit, serial-versus-parallel comparisons, and failure traces to form testable hypotheses
  - Defines criteria, ownership, time limits, and exit conditions for quarantining a test
  - Measures rerun effects on feedback time and the risk of masking product issues
  - Forms testable technical hypotheses from inputs, mechanisms, and failure symptoms
  - Compares implementation paths and their correctness, performance, security, or maintenance cost
  - Names tests or operational measures that cover edge cases
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
  - operations
responsibilityScopes:
  - team
  - multiple-teams
  - individual
careerTracks:
  - individual-contributor
  - team-manager
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
  - If tests pass alone but fail in a parallel suite, which shared state would you inspect first?
  - When may a test be quarantined, who owns the fix, and when must quarantine be reviewed?
  - >-
    If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the
    trade-offs?
  - >-
    A test passes alone but fails occasionally when the suite runs in parallel, and a rerun may pass. How would you find
    order dependence or shared state?
  - If failure occurs only in CI, how would you distinguish machine load from configuration differences?
  - Can serializing the test be a temporary mitigation, and when must the root cause still be fixed?
---
