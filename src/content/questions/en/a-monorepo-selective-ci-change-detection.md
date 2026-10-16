---
questionId: a-monorepo-selective-ci-change-detection
kind: question
status: published
locale: en
title: >-
  The repository has hundreds of packages and full CI is slow. The team wants to test only “affected” areas.
  How would you prove selective testing does not miss critical dependencies?
question: >-
  The repository has hundreds of packages and full CI is slow. The team wants to test only “affected” areas.
  How would you prove selective testing does not miss critical dependencies?
intent: "Assesses whether you can confirm that change detection covers affected tasks and keep full checks as a final safeguard."
signals:
  - "Map source, generated code, configuration, and toolchain changes to affected tasks; explain how to widen checks when dependencies are unclear."
  - "Replay historical commits and compare the tasks selected by change detection with the tasks that actually failed."
  - "Compare selection by file path, dependency graph, or build cache, and explain what each approach could miss."
  - "Require checks for critical paths and run the full suite periodically to catch long-term gaps in selective testing."
  - "Track missed checks, unnecessary checks, runtime, and repair cost, then adjust the rules."
primaryCapability: professional.engineering-systems
topics:
  - monorepo
  - engineering-systems
  - devops
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
  - promotion
formats:
  - case
  - planning
followUps:
  - If the graph is incomplete, should selection expand first or the graph be fixed first?
  - Which changes should always trigger full tests?
  - Why might a toolchain change make path filtering unreliable?
  - How would you measure time saved and missed-check risk from incremental builds?
source:
  - attribution: original
    label: Interview Compass 原创主题补充批次：Monorepo
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
relatedQuestions: []
---
