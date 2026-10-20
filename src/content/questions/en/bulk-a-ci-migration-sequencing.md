---
questionId: bulk-a-ci-migration-sequencing
kind: question
status: published
locale: en
title: Migrating a shared CI platform
question: >-
  An organization must move several repositories from an old CI system to a new platform without
  pausing delivery across teams. How would you sequence migration and decide which repositories
  enter each wave?
intent: Focus on migration risk, repository differences, rollback readiness, and shared-platform capacity.
signals:
  - Groups migration waves by dependencies, build traits, and ownership readiness
  - Defines evidence for parallel validation and cutover
  - Explains how to roll back one repository without affecting others
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - devops
  - monorepo
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - multiple-teams
  - organization
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - planning
source:
  - attribution: inspired
    label: DevOps Interview Questions：CI/CD 系统与迁移
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
