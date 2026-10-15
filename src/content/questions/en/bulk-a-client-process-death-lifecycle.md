---
questionId: bulk-a-client-process-death-lifecycle
kind: question
status: published
locale: en
title: Restoring After Mobile Process Death
question: >-
  A mobile user returns after several minutes in the background, and the operating system may have
  killed the process. Which state would you restore, and which would you reload?
intent: Tests client lifecycle, state persistence, and freshness boundaries.
signals:
  - Separates transient UI state from durable business state
  - Accounts for limited opportunities to save during process termination
  - Defines how restored state is reconciled with server data and staleness
primaryCapability: professional.computer-science
topics:
  - mobile
  - operating-systems
roles:
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Android Interview Questions — Android, Kotlin, lifecycle, and architecture topics
    url: https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md
---
