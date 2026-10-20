---
questionId: bulk-a-environment-parity
kind: question
status: published
locale: en
title: Development and production differ
question: >-
  A defect appears only in production and cannot be reproduced in development or staging. How would
  you determine whether the cause is environment, traffic shape, or data characteristics, and
  improve environment design?
intent: >-
  Explore how a reproducibility boundary is found while controlling risks in copying production data
  or infrastructure.
signals:
  - Compares runtime, configuration, dependencies, and traffic shape
  - Proposes safe use of copied or synthetic data for verification
  - Explains which differences should be eliminated and which should be covered by tests
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
  - multiple-teams
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
    label: DevOps Interview Questions：环境与部署自动化
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
