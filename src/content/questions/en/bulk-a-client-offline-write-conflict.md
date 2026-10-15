---
questionId: bulk-a-client-offline-write-conflict
kind: question
status: published
locale: en
title: Offline Edits and Conflict Resolution
question: >-
  A mobile client allows profile edits offline. When it reconnects, the server has changed the same
  field. How would you design version detection, conflict presentation, and write behavior?
intent: Tests offline synchronization and conflict semantics for mobile clients.
signals:
  - Uses versions or an equivalent mechanism to detect concurrent edits
  - Avoids silently overwriting the other update
  - Chooses merging, user choice, or rejection according to field risk
primaryCapability: professional.system-design
topics:
  - mobile
  - distributed-systems
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
  - system-design
source:
  - attribution: inspired
    label: Android Interview Questions — Android, Kotlin, lifecycle, and architecture topics
    url: https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md
---
