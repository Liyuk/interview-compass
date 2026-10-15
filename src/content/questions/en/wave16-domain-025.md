---
questionId: wave16-domain-025
kind: question
status: published
locale: en
title: Should historical reports retain original labels after a dimension is renamed?
question: Product renames “Basic” to “Team,” but finance wants invoices to preserve the purchase-time name while marketing reports use the current name. How would you model this?
intent: Assesses separating dimension history, display semantics, and reporting purpose.
signals:
  - Separate stable IDs, historical names, and current names.
  - Specify time semantics for different reports.
  - Prevent a rename from rewriting financial records.
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - operations
roles:
  - data
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
followUps:
  - Are translation and locale changes the same kind of history?
  - How should old links remain compatible during UI cache migration?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
