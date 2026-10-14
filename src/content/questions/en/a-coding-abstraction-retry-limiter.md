---
questionId: a-coding-abstraction-retry-limiter
kind: question
status: published
locale: en
title: "Write a retry wrapper that does not overwhelm the other side"
question: "Implement a retry wrapper: when a call to an external service fails, retry by a rule, without letting the retries overwhelm that service. State the interface first, then write the code, and explain how it runs deterministically in tests."
intent: "Understand how you turn behavior that involves time and failure into a clear interface that can be verified."
signals:
  - "Makes the clock and waiting injectable dependencies"
  - "Decides up front which errors are retryable and which are not"
  - "Explains how cancellation, concurrency, or idempotency shape the interface"
primaryCapability: professional.coding-abstraction
topics: [programming-languages, backend, concurrency]
roles: [engineering, backend, ai-engineer]
responsibilityScopes: [individual]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [coding]
followUps:
  - "If the caller may cancel while retries are in progress, how does your interface express that?"
source:
  - attribution: inspired
    label: "AI-Engineer-Interview-Questions: rate limiter and retry coding task (format inspiration only; the prompt is original)"
    url: https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/12-coding-challenges/11_rate_limiter_and_retry.py
---
