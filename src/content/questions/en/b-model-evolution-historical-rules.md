---
questionId: b-model-evolution-historical-rules
kind: question
status: published
locale: en
title: "After the revenue-share rule changes, how can an old transaction reproduce its original settlement?"
question: "The platform changes its creator revenue-share rule. Last month's transactions were settled under the old rule; operations continue under the new one, and any old transaction's settlement must still be reproducible. How would you express rule versions and effective dates?"
intent: "Understand whether you can make a model express rules that change over time while keeping traceability, rather than overwriting history."
signals:
  - "Separates the rule's effective date from the date the transaction happened"
  - "Explains which rule version a transaction references, and when that reference becomes fixed"
  - "Considers how history is handled during recalculation, corrections, and reconciliation"
primaryCapability: domain-modeling.model-evolution
topics: [data-modeling, commercialization]
roles: [backend, data, product]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor]
scenarios: [interview, promotion]
formats: [case]
followUps:
  - "The new rule must apply retroactively to some of last month's transactions. How do you express that exception?"
  - "If the new rule must ship with zero downtime, which kind of question is that?"
relatedQuestions:
  - questionId: b-commercial-rules-settlement-split
    relation: "The same commercial rule, shifting the focus from expressing the current rule to keeping history when it changes."
    contrast: "This question is about rule versions and traceability; the related one is about expressing and checking the current rule."
source:
  - attribution: original
    label: "Written from the rule-change boundary example in the content architecture research"
---
