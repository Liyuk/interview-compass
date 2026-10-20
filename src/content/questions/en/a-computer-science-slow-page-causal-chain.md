---
questionId: a-computer-science-slow-page-causal-chain
kind: question
status: published
locale: en
title: "Why would the first screen of an image-heavy page load slowly?"
question: "The first screen of an image-heavy page opens slowly. How would you work backwards from the symptom to the cause, and what would each improvement cost?"
intent: "Understand whether you can break “slow” into observable stages and follow a causal chain to the bottleneck, rather than listing optimization tricks."
signals:
  - "Asks whether it is first paint, interaction, or the API before proposing fixes"
  - "Names how to observe it: network waterfall, performance metrics, throttled-network reproduction"
  - "States side effects or limits for preloading, compression, caching, and similar measures"
primaryCapability: professional.computer-science
topics: [computer-networks, frontend]
roles:
  - engineering
  - frontend
  - mobile
responsibilityScopes: [individual]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus]
formats: [knowledge, case]
followUps:
  - "How would your diagnosis change if the real bottleneck were an API that returns image URLs too late?"
relatedQuestions:
  - questionId: a-debugging-narrowing-slow-api
    relation: "Both start from the symptom “it got slow.”"
    contrast: "This one explains cause through network and browser principles; the other is about the order of investigation against live evidence."
source:
  - attribution: derived
    label: "What screeners and interviewers are really looking for (fundamentals: from symptom back to principle)"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
