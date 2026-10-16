---
questionId: a-system-design-cross-border-data-compliance
kind: question
status: published
locale: en
title: When the business operates across several countries and regions, how do you solve data compliance, and what do you do in gray areas?
question: When the business operates across several countries and regions and user data must flow across borders, how do you solve data compliance in systems and processes, and how do you judge and decide in gray areas where the rules are unclear?
intent: See whether you can turn regional compliance requirements into system constraints and have a responsible way to decide when rules are unclear, rather than avoiding or gambling.
signals:
  - Separates data types, storage locations, and cross-border paths and says how each region's requirements shape the architecture
  - Describes concrete technical and process measures such as data partitioning, minimization, masking, and access audit
  - In gray areas, says how legal or outside advice is brought in and favors conservative options that can be reversed
  - Says how the basis for decisions is recorded and how the system adapts quickly when rules change
primaryCapability: professional.system-design
topics: [security, system-design, ethics, engineering-systems]
roles:
  - engineering
  - backend
  - data
  - manager
  - product
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [multiple-teams, organization]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring, promotion]
formats: [case, system-design]
followUps:
  - The business wants to launch quickly and the compliance view is not yet clear. What do you do?
  - A region's regulation suddenly tightens. How does the system adapt quickly?
source:
  - attribution: original
    label: "The author's interview sequence, cross-region data compliance"
---
