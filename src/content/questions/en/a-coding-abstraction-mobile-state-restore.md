---
questionId: a-coding-abstraction-mobile-state-restore
kind: question
status: published
locale: en
title: How should a mobile app restore the right state after process death?
question: >-
  A user backgrounds the app while editing, and the operating system may kill its process. On return, which
  state should be restored and which should be reloaded, and how would you avoid losing a draft or overwriting
  newer data?
intent: >-
  Assess whether you distinguish transient UI state, business state that must be persisted, and data that can
  be rebuilt, then define recovery boundaries for process death and data freshness.
signals:
  - Separates transient UI, durable drafts, and server-reconstructible facts.
  - Explains save timing and cost when process reclamation allows little warning.
  - Uses versions or timing to resolve draft-server conflicts without overwriting newer facts.
  - Tests reclaim, restart, weak networks, and expired authorization for user-visible recovery.
primaryCapability: professional.coding-abstraction
topics:
  - mobile
  - frameworks
roles:
  - mobile
  - engineering
responsibilityScopes:
  - individual
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
formats:
  - coding
  - case
source:
  - attribution: inspired
    label: The editor-draft example in the blog post on what screeners and interviewers look for
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
  - attribution: inspired
    label: Android Interview Questions — Android, Kotlin, lifecycle, and architecture topics
    url: https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md
followUps:
  - >-
    If a local draft conflicts with server state, how would you decide what to keep and explain it to the
    user?
  - If the operating system provides no final save opportunity, how would you reduce data-loss risk?
relatedQuestions: []
---
