---
questionId: bulk-a-debug-tail-latency
kind: question
status: published
locale: en
title: Rising tail latency
question: >-
  Average service latency is stable, but p99 has risen for a week and complaints cluster among a few large customers.
  How would you locate the problem and choose what to verify first?
intent: Explore how distributions, user segments, and request paths can reveal the source of a small number of slow requests.
signals:
  - Checks metric definitions and affected time windows and tenants
  - Compares end-to-end and dependency tail latency rather than only averages
  - Forms falsifiable hypotheses tied to changes, load, or data skew
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - distributed-systems
roles:
  - backend
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: System Design Primer：性能与延迟分析
    url: https://github.com/donnemartin/system-design-primer
---
