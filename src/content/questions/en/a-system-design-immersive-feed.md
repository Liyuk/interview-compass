---
questionId: a-system-design-immersive-feed
kind: question
status: published
locale: en
title: How would you design an immersive audio and video feed so that swiping up and down has almost no waiting?
question: How would you design an immersive audio and video feed so that swiping up and down has almost no waiting? How do you balance preloading, player reuse, memory, and data?
intent: See whether you can design preloading and resource management for a scenario with very high smoothness demands and handle the cost it brings.
signals:
  - Explains how much is preloaded and how far, and how it adjusts to swiping behavior
  - Explains reuse and release of player instances and the memory ceiling
  - Balances time to first frame against data use, and considers weak networks and data-saving modes
  - Says how the experience is verified with metrics such as time to first frame and scroll stutter
primaryCapability: professional.system-design
topics: [system-design, mobile, frontend]
roles: [engineering, mobile, frontend, backend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - A user swipes past a dozen items quickly. How should preloading handle that?
  - A low-end device runs short of memory. How do you trade experience against cost?
source:
  - attribution: original
    label: "The author's system design question, an immersive feed"
---
