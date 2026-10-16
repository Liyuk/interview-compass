---
questionId: bulk-a-retry-amplification
kind: question
status: published
locale: en
title: Retry amplification incident
question: >-
  After a downstream service becomes unstable, upstream traffic appears flat while request counts and queue
  depth double and several services time out. How would you determine whether retries are amplifying the
  failure?
intent: Examine the path from symptoms to call-chain policies, queue buildup, and containment.
signals:
  - Correlates retries, timeouts, and original request volume
  - Checks retry layers, backoff, jitter, and request deadlines
  - Discusses how to stop amplification and drain backlog safely
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
    label: System Design Primer：故障模式与重试
    url: https://github.com/donnemartin/system-design-primer
---
