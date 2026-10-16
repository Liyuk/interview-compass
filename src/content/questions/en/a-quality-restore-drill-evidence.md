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
  - Agree recovery-point and recovery-time objectives with the business
  - Cover keys, dependencies, permissions, and data consistency
  - Run isolated drills and measure actual recovery
  - Track failures, owners, and retest closure criteria
  - "A drill exposes weak recovery capability: define explicit business recovery objectives."
  - Verify that data, keys, configuration, dependencies, and people can be restored within target time.
  - Compare cold standby, warm standby, tiered recovery, and manual degradation by cost and coverage.
  - Repeat exercises to prove RTO/RPO and track owners for any remaining gaps.
primaryCapability: professional.quality-security-safety
topics:
  - reliability
  - databases
  - devops
roles:
  - backend
  - data
  - operations
responsibilityScopes:
  - team
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
