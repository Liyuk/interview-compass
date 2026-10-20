---
questionId: b-commercial-rules-ledger-design
kind: question
status: published
locale: en
title: In a system that handles money, how should accounting and billing be designed so the numbers are clear and reconcile?
question: In a system that handles money, how should accounting and billing be designed so the numbers are clear and reconcile? How do you model accounts, entries, holds, settlement, and reconciliation, and how do you trace and correct an error?
intent: See whether you can model money in an auditable way so every change can be traced and recomputed.
signals:
  - Uses immutable entries and ideas such as double-entry bookkeeping so balances can be recomputed from entries
  - Separates states such as held, settled, and unsettled and the transitions between them
  - Explains idempotency, concurrent deductions, and compensation on failure to prevent duplicate postings
  - Says how reconciliation is done and how errors are corrected without rewriting history
primaryCapability: domain-modeling.commercial-rules
topics: [commercialization, data-modeling, databases, backend]
roles:
  - backend
  - engineering
  - data
  - product
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [system-design, case]
followUps:
  - You find one kind of entry was miscalculated over the past month. How do you correct it?
  - Money passes through several systems. How do you make sure both sides finally match?
source:
  - attribution: original
    label: "The author's system design question, how money is counted, accounting and billing"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
