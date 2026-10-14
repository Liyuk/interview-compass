---
questionId: a-coding-abstraction-mobile-state-restore
kind: question
status: published
locale: en
title: A user is editing when the system reclaims your app in the background. When they return, how do you keep their content and screen state without restoring stale data?
question: A user is editing when the system reclaims your app in the background. When they return, how do you keep their content and screen state without restoring stale data?
intent: See whether you can separate state that must be persisted from state that can be rebuilt, and design clear boundaries and checks for the recovery path.
signals:
  - Separates state that must be persisted from state that can be rebuilt
  - Considers draft versions so newer data is not overwritten
  - Explains how the recovery path is tested, including process death and weak networks
primaryCapability: professional.coding-abstraction
topics: [mobile, frameworks]
roles: [mobile, engineering]
responsibilityScopes: [individual]
careerTracks: [individual-contributor]
scenarios: [interview, campus]
formats: [coding, case]
source:
  - attribution: inspired
    label: The editor-draft example in the blog post on what screeners and interviewers look for
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
---
