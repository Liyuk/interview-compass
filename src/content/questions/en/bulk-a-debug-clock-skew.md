---
questionId: bulk-a-debug-clock-skew
kind: question
status: published
locale: en
title: Out-of-order cross-service events
question: >-
  A reconciliation shows timestamps from two data centers placing event A before B, while the message trace
  shows B triggered A. How would you distinguish clock skew, processing delay, and business causality, and
  choose trustworthy diagnostic evidence?
intent: Explore how physical time, processing time, and business order are distinguished and diagnosed.
signals:
  - Checks the source and offset of event, receive, and processing times
  - Distinguishes timestamp order from causality and identifies clock drift and asynchronous delay
  - Chooses logical clocks, message causality markers, trace context, or business versions to represent order
  - Explains how correlation IDs and cross-region evidence would validate the diagnosis
primaryCapability: professional.debugging
topics:
  - debugging
  - distributed-systems
  - databases
roles:
  - backend
  - data
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: System Design Primer：分布式系统时序问题
    url: https://github.com/donnemartin/system-design-primer
  - attribution: inspired
    label: System Design Primer — requirements, constraints, and trade-offs
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
followUps:
  - If a global time order cannot be established, how would you represent “happened before”?
  - How would you tell whether the observed order came from clock skew, message delay, or a business rule?
relatedQuestions: []
---
