---
questionId: a-quality-restore-drill-evidence
kind: question
status: published
locale: en
title: >-
  Backups report success, but the team has never verified restored data integrity or recovery time. How would
  you establish demonstrable recovery capability?
question: >-
  Backups report success, but the team has never verified restored data integrity or recovery time. How would
  you establish demonstrable recovery capability?
intent: >-
  Assesses whether you can turn backups into tested recovery capability against acceptable business
  objectives.
signals:
  - Verifies recovery points, times, task order, and acceptable loss by data class.
  - >-
    Inventories data, keys, configurations, dependencies, access, and people, comparing cost and
    coverage.
  - Measures integrity and recovery time in isolated drills rather than trusting backup success.
  - Tracks failures, owners, and retests including dependency and unsafe-overwrite risks.
primaryCapability: professional.quality-security-safety
topics:
  - reliability
  - databases
  - devops
roles:
  - backend
  - data
  - operations
  - engineering
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - planning
followUps:
  - If a drill succeeds but misses the recovery-time objective, what would you change first?
  - How would you ensure a drill does not expose or overwrite production data?
  - >-
    A disaster-recovery drill proves cold backups work but need 30 hours, while the business target is 8
    hours. Budget cannot duplicate all production capacity. How would you improve?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
  - attribution: inspired
    label: GitHub DevOps 与项目交付题目主题调研；题目为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
relatedQuestions: []
---
