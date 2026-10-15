---
questionId: b-commercial-rules-settlement-split
kind: question
status: published
locale: en
title: >-
  How would you express a tiered revenue-share rule so product, engineering, and finance can all
  check it?
question: >-
  The revenue share between a platform and its creators changes in tiers with monthly volume. How
  would you express this settlement rule so product, engineering, and finance can each verify it
  independently?
intent: >-
  Understand whether you can turn a commercial mechanism into clear concepts, boundaries, and rules,
  rather than leaving it as a verbal agreement or logic hidden in code.
signals:
  - Pins down what is billed, the boundary values of each tier, and the time window that applies
  - Separates the rule itself from the result of applying it, and both can be recomputed
  - >-
    Raises edge cases unprompted, such as an amount exactly on a tier boundary or a refund that
    lands after month end
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
roles:
  - product
  - backend
  - data
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - case
followUps:
  - >-
    Does a tier apply to the whole amount or only to the part above the threshold, and how do you
    make sure everyone reads it the same way?
  - Which sample cases would you use to confirm all three parties agree?
relatedQuestions:
  - questionId: bulk1000-b-031-v1
    relation: >-
      The same commercial rule, shifting the focus from how to express it to how to keep history
      when it changes.
    contrast: >-
      This question is about expressing and checking the current rule; the related one is about rule
      versions and traceability.
source:
  - attribution: original
    label: Written from the domain-modeling boundary rules (orders, revenue share, settlement)
---
