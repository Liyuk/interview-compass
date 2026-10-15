---
questionId: bulk-d-portfolio-dependency-release
kind: question
status: published
locale: en
title: Coordinate a compatible release after a cross-project interface change
question: >-
  A project depending on a platform interface is already integrating when the upstream team
  announces a semantic change this quarter and cannot support both formats indefinitely. How would
  you decide compatibility, migration order, and release boundaries across projects?
intent: Examines contract management, migration orchestration, and protection of downstream commitments.
signals:
  - Distinguishes a field rename from a semantic change and identifies affected consumers.
  - Compares adapter layers, staged migration, and coordinated cutover by cost and risk.
  - Sets version-retirement criteria, owners, and consumer validation.
primaryCapability: delivery.project-management
topics:
  - planning
  - execution
  - risk-management
roles:
  - pmo
  - engineering
  - product
responsibilityScopes:
  - multiple-teams
  - organization
careerTracks:
  - senior-manager
scenarios:
  - interview
  - promotion
formats:
  - case
source:
  - attribution: derived
    label: 资源不足时，怎样不让团队靠透支运转
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/03/working-under-resource-constraints/zh.md
---
