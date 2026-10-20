---
questionId: a-programming-languages-unicode-normalization-identity
kind: question
status: published
locale: en
title: >-
  Two usernames that look identical are treated as different, or distinct spellings are treated as
  the same. How would you analyze Unicode normalization and identity comparison?
question: >-
  Two usernames that look identical are treated as different, or distinct spellings are treated as
  the same. How would you analyze Unicode normalization and identity comparison?
intent: >-
  Assess whether you distinguish bytes, code points, glyphs, and normalized forms, and apply
  comparison rules at the correct security boundary.
signals:
  - >-
    Explains the differences among combining characters, normalization forms, and visually
    confusable characters.
  - >-
    Defines normalization and comparison separately for usernames, search, signatures, passwords,
    and other purposes.
  - >-
    States where normalization occurs, how indexes stay consistent, and how identity collisions are
    prevented.
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - security
  - data-modeling
roles:
  - backend
  - frontend
  - engineering
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - debugging
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - >-
    If existing accounts were created under an older rule, how would you roll out a new
    normalization policy compatibly?
  - How would you prevent homoglyphs from being used for impersonation or audit confusion?
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
