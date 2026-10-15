---
questionId: bulk-a-client-background-work-expiration
kind: question
status: published
locale: en
title: Background Work With Expiration
question: >-
  A client must upload a large file, but the operating system may pause or terminate background work
  at any time. How would you chunk the task, persist progress, and make rescheduling safe?
intent: Tests mobile background-execution constraints and recoverable task design.
signals:
  - Breaks work into checkpointable units
  - Persists upload-session state and confirmed progress
  - Defines behavior for duplicate execution, cancellation, and expired credentials
primaryCapability: professional.engineering-systems
topics:
  - mobile
  - reliability
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
