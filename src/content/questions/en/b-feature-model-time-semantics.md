---
questionId: b-feature-model-time-semantics
kind: question
status: published
locale: en
title: "How do you make sure a feature never uses information from the future?"
question: "You are building a 'days active in the last 7 days' feature for a model that predicts next-day churn. How do you define its time semantics so training and online prediction mean the same thing?"
intent: "Understand whether you treat a feature as a business definition with time semantics rather than just a column of numbers, and can spot information leakage."
signals:
  - "States the feature's cutoff time and observation window instead of just writing 'last 7 days'"
  - "Points to the specific step in sample construction where future information could leak"
  - "Explains how offline and online keep one definition and how the value can be recomputed"
primaryCapability: domain-modeling.feature-model
topics: [feature-modeling, data-modeling]
roles: [data, ai-engineer, backend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview]
formats: [case]
followUps:
  - "Is the user's behavior from today already available at prediction time, and what does data delay change?"
  - "How would you verify that online and offline compute the same value?"
source:
  - attribution: original
    label: "Written from common feature time-semantics modeling problems"
---
