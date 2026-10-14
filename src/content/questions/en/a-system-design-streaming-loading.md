---
questionId: a-system-design-streaming-loading
kind: question
status: published
locale: en
title: How should the loading and request strategy of streaming media be designed so it starts fast and does not stall?
question: How should the loading and request strategy of streaming media be designed so it starts fast and does not stall? How do you trade off segmenting, adaptive bitrate, preloading, and caching?
intent: See whether you can build clear trade-offs among start-up speed, smoothness, and bandwidth cost, and adjust the strategy as the network changes.
signals:
  - Explains how segment size affects start-up, switching, and the number of requests
  - Explains how adaptive bitrate decides from bandwidth and buffer and avoids switching too often
  - Explains the benefit of preloading and its cost in bandwidth and data
  - Says how the strategy is judged with metrics such as start-up time and stall rate
primaryCapability: professional.system-design
topics: [system-design, frontend, mobile, computer-networks]
roles: [engineering, frontend, mobile, backend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - A user's network on the subway keeps dropping in and out. How does the strategy change?
  - Preloading wastes the user's data. How do you control that?
source:
  - attribution: original
    label: "The author's system design question, streaming loading and requests"
---
