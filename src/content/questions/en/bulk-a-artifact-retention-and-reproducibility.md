---
questionId: bulk-a-artifact-retention-and-reproducibility
kind: question
status: published
locale: en
title: Artifact retention and rollback
question: >-
  A build registry must clean up years of images, but production services may still roll back to old
  versions. How would you define retention and artifact recoverability?
intent: >-
  Explore the relationship among release-artifact retention, runtime dependencies, and rollback
  windows.
signals:
  - Identifies references from production, pending releases, and historical rollback versions
  - Defines retention periods, archive tiers, and recoverability checks
  - Avoids deleting evidence needed to reproduce incidents or investigate security issues
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - devops
  - reliability
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
  - organization
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: DevOps Interview Questions：制品管理与发布
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
---
