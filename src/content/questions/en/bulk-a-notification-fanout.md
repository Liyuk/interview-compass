---
questionId: bulk-a-notification-fanout
kind: question
status: published
locale: en
title: "How do you send notifications at scale while respecting user preferences?"
question: "A product needs to send transactional and optional marketing notifications to tens of millions of users, who can change channel preferences at any time. How would you design the sending process?"
intent: >-
  See whether notification semantics, traffic shape, preference changes, and provider limits are
  handled at the right layers.
signals:
  - Separates mandatory transactional notices from suppressible marketing messages
  - Explains when preference changes take effect for already queued messages
  - Considers fanout delay, channel quotas, bounces, and per-user deduplication
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - reliability
roles:
  - backend
  - engineering
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：消息队列与扇出模式
    url: https://github.com/donnemartin/system-design-primer
---
