---
questionId: a-engineering-systems-dependency-change
kind: question
status: published
locale: en
title: Your solution depends on an underlying service or library. If it changes significantly, how does the solution migrate, degrade, roll back, or be replaced?
question: "Your solution depends on a lower-level service or library. If it changes substantially, how would you migrate, fall back to a version that preserves core features, or replace it?"
intent: See whether you know the boundary of what you depend on and have designed a way out for when it changes.
signals:
  - First says what the dependency provides and where its boundary lies
  - Gives concrete ways to migrate, degrade, roll back, or replace
  - Points out which parts of today's design cannot survive such a change
primaryCapability: professional.engineering-systems
topics: [engineering-systems, risk-management]
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion]
formats: [case, system-design]
followUps:
  - How do you know you really understand the underlying mechanism of this dependency?
  - Which dependencies did you deliberately leave unabstracted?
source:
  - attribution: derived
    label: Blog post on the pre-promotion and pre-interview self-check list
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/08/career-growth-ten-questions/zh.md
---
