---
questionId: b-commercial-rules-money-and-currency
kind: question
status: published
locale: en
title: How should amounts, currencies, rounding, and time zones be expressed in a transaction and settlement model?
question: How should amounts, currencies, rounding, and time zones be expressed in a transaction and settlement model? Which practices look fine but break at reconciliation?
intent: See whether you have a clear modeling awareness of the basic details most prone to error in commercial data, and can foresee reconciliation problems.
signals:
  - Says how amounts are stored, with currency and precision, instead of using floating point
  - Says at which step rounding happens, by what rule, and what it does to totals
  - Considers how time zones and day boundaries affect settlement periods
  - Names concrete problems that would surface at reconciliation and how to check for them earlier
primaryCapability: domain-modeling.commercial-rules
topics: [commercialization, data-modeling, databases]
roles:
  - backend
  - data
  - engineering
  - product
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus, hiring]
formats: [knowledge, case]
followUps:
  - In multi-currency settlement, at what moment should the exchange rate be fixed?
  - When reconciliation does not balance, where do you start looking?
source:
  - attribution: original
    label: "The author's interview sequence: basic modeling details in commercial data"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
