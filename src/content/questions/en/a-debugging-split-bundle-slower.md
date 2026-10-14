---
questionId: a-debugging-split-bundle-slower
kind: question
status: published
locale: en
title: After splitting a large frontend bundle into several smaller ones, the first screen got slower. What causes would you suspect, and how would you verify them?
question: After splitting a large frontend bundle into several smaller ones, the first screen got slower. What causes would you suspect, and how would you verify them?
intent: See whether you can put "splitting improves performance" back inside its limits and locate the real cause from observable evidence.
signals:
  - Confirms which stage is slow before discussing remedies
  - Thinks of checkable causes such as more requests, lower cache hits, or the load order of critical resources
  - Says what observation verifies it, such as a network waterfall and different network conditions
primaryCapability: professional.debugging
topics: [frontend, debugging, engineering-systems]
roles: [frontend, engineering]
responsibilityScopes: [individual]
careerTracks: [individual-contributor]
scenarios: [interview, campus]
formats: [debugging, case]
source:
  - attribution: derived
    label: Blog post on what screeners and interviewers look for
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
---
