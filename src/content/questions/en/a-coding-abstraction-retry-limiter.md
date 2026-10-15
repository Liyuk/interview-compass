---
questionId: a-coding-abstraction-retry-limiter
kind: question
status: published
locale: en
title: Implement a bounded, cancellable retry wrapper that protects its dependency
question: >-
  Implement a retry wrapper that retries by error type, supports a maximum attempt count, backoff, and
  cancellation, and does not overwhelm the dependency. Define the interface before coding, then explain how to
  make clocks, waits, and tests deterministic.
intent: >-
  Assess how you abstract behavior involving time and failure, define retry bounds, cancellation semantics,
  and error boundaries, and make the implementation reliably testable.
signals:
  - Defines whether the maximum counts retries or total attempts
  - Separates retryable from non-retryable errors and uses bounded backoff
  - Controls waiting through an injectable clock or scheduler to avoid flaky tests
  - >-
    Defines cancellation, idempotency, and final-error behavior to prevent infinite retries or repeated side
    effects
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - backend
  - concurrency
roles:
  - engineering
  - backend
  - ai-engineer
responsibilityScopes:
  - individual
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - coding
followUps:
  - >-
    If the caller cancels during backoff, how should the interface represent cancellation and release
    resources?
  - How would you test the backoff sequence and maximum attempts without real sleep?
source:
  - attribution: inspired
    label: >-
      AI-Engineer-Interview-Questions: rate limiter and retry coding task (format inspiration only; the prompt
      is original)
    url: >-
      https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/12-coding-challenges/11_rate_limiter_and_retry.py
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
relatedQuestions: []
---
