---
questionId: bulk-a-flaky-test-triage
kind: question
status: published
locale: en
title: 'Intermittent end-to-end failures: product risk or test race?'
question: >-
  A critical end-to-end test fails intermittently: it passes alone but fails in a parallel suite, and the team
  has started rerunning it until it passes. How would you determine whether it exposes product risk, isolate
  shared state, resource contention, clock or ordering dependencies, and improve the test workflow?
intent: >-
  Examines how you distinguish product defects, unstable environments, and test races while controlling
  feedback time and the risk of hiding failures.
signals:
  - Correlates failures with browser, test data, concurrency, clocks, execution order, and environment state
  - Uses unit, serial-versus-parallel comparisons, and failure traces to form testable hypotheses
  - Defines criteria, ownership, time limits, and exit conditions for quarantining a test
  - Measures rerun effects on feedback time and the risk of masking product issues
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - devops
  - reliability
roles:
  - engineering
  - frontend
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: DevOps Interview Questions：CI 流程与自动化测试
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - If tests pass alone but fail in a parallel suite, which shared state would you inspect first?
  - When may a test be quarantined, who owns the fix, and when must quarantine be reviewed?
  - >-
    If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance
    the trade-offs?
---
