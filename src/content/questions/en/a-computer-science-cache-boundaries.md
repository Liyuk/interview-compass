---
questionId: a-computer-science-cache-boundaries
kind: question
status: published
locale: en
title: "Caching speeds up reads. When does it cause problems instead?"
question: "A cache can make reads faster and can also show users stale content. How do you decide whether a piece of data suits caching, and how do you notice when it goes wrong?"
intent: "Understand whether you treat caching as a mechanism with limits: where it fits, how invalidation is handled, and where the cost lands."
signals:
  - "Separates how often data changes from how much staleness is tolerable"
  - "Explains an invalidation or versioning strategy and the debugging cost it brings"
  - "Mentions observing hit rate and stale reads instead of waiting for user feedback"
primaryCapability: professional.computer-science
topics: [databases, backend, distributed-systems]
roles: [engineering, backend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [knowledge]
followUps:
  - "When several services cache the same data, who owns invalidation?"
source:
  - attribution: derived
    label: "What screeners and interviewers are really looking for (fundamentals: knowing the limits of an answer)"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
---
