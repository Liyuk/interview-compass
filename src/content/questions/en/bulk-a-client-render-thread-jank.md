---
questionId: bulk-a-client-render-thread-jank
kind: question
status: published
locale: en
title: Diagnosing Mobile Main-Thread Jank
question: >-
  A list screen scrolls poorly even though network metrics are normal and memory is stable. How
  would you determine whether main-thread computation, layout/drawing, or lock waits are
  responsible?
intent: Tests client threading and frame-time analysis.
signals:
  - Uses frame budgets to locate the stage exceeding its time allowance
  - Inspects main-thread work, layout/drawing, and synchronous waits
  - Proposes profiler or trace evidence
primaryCapability: professional.debugging
topics:
  - mobile
  - concurrency
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
  - debugging
source:
  - attribution: inspired
    label: Android Interview Questions — Android, Kotlin, lifecycle, and architecture topics
    url: https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md
---
