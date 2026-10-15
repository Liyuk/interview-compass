---
questionId: bulk-d-dependency-ownership-boundary
kind: question
status: published
locale: en
title: Assign integration ownership when parallel teams merge features
question: >-
  Two teams each completed work against their own interface, but the combined features conflict in
  state handling; the plan has no owner for joint acceptance. How would you establish integration
  decisions and verification ownership?
intent: Examines whether integration ownership covers the combined result beyond each team’s completion.
signals:
  - Locates shared-state conflicts, interface assumptions, and ownership gaps.
  - Names decision and acceptance owners accountable for the end-to-end result.
  - Adds joint testing, issue triage, and release decisions.
primaryCapability: delivery.capacity-planning
topics:
  - execution
  - communication
  - risk-management
roles:
  - engineering
  - product
  - pmo
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - self-reflection
formats:
  - behavioral
source:
  - attribution: derived
    label: 产品资源排不上，研发接下项目后怎么推进？
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/consulting/2026/09/product-engineer-without-boundaries/zh.md
---
