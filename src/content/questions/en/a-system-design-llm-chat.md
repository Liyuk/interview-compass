---
questionId: a-system-design-llm-chat
kind: question
status: published
locale: en
title: How would you design a large-model chat system?
question: How would you design a large-model chat system? How do you handle streamed output, multi-turn context, history, interruption, and retries, and how do you control cost and latency?
intent: See whether you can place a model's capability inside a dependable product system and handle constraints peculiar to streaming, context, and cost.
signals:
  - Explains how streamed output is delivered and how it recovers after interruption or disconnection
  - Explains how multi-turn context is trimmed, summarized, or retrieved and what that does to quality and cost
  - Considers rate limits, timeouts, idempotent retries, and degradation
  - Says how quality and cost are observed, not only availability
primaryCapability: professional.system-design
topics: [system-design, ai-engineering, backend]
roles: [engineering, ai-engineer, backend, frontend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - The user refreshes the page halfway through generation. What happens?
  - As context keeps growing, how do you balance quality and cost?
source:
  - attribution: original
    label: "The author's system design question, large-model chat"
---
