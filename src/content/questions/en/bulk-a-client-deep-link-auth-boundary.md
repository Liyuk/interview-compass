---
questionId: bulk-a-client-deep-link-auth-boundary
kind: question
status: published
locale: en
title: "How do you protect sign-in and access when an external link opens a page directly?"
question: >-
  A user opens a protected order-detail page from an external link. How would you design route
  parsing, login return, and authorization so the deep link cannot bypass in-app controls?
intent: Tests deep-link security boundaries and navigation-state handling.
signals:
  - Separates deep-link parsing from authorization decisions
  - Preserves a validated destination through login
  - Does not treat hidden client routes as access control
primaryCapability: professional.system-design
topics:
  - mobile
  - security
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
