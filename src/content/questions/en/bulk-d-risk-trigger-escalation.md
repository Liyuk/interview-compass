---
questionId: bulk-d-risk-trigger-escalation
kind: question
status: published
locale: en
title: Act when several risks combine before any single threshold is crossed
question: >-
  A release project has capacity, vendor-delivery, and data-quality risks, each below its individual
  escalation threshold, but all may converge in the same week. How would you assess the combined
  risk and decide what action to take?
intent: Examines risk interaction, aggregate exposure, and judgment about reversible early action.
signals:
  - Identifies shared timing and amplification among risks.
  - >-
    Estimates aggregate impact and states assumptions rather than mechanically applying individual
    thresholds.
  - Chooses low-cost mitigation and defines when to escalate or withdraw it.
primaryCapability: delivery.reliability-incidents
topics:
  - risk-management
  - execution
  - communication
roles:
  - pmo
  - engineering
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - promotion
formats:
  - case
source:
  - attribution: inspired
    label: Sourcegraph engineering leadership interview themes
    url: >-
      https://github.com/sourcegraph/handbook/blob/main/content/departments/engineering/dev/hiring/engineering-leadership.md
---
