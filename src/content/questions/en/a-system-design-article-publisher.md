---
questionId: a-system-design-article-publisher
kind: question
status: published
locale: en
title: How would you design an article editing and publishing system?
question: How would you design an article editing and publishing system? How should state and data be organized for drafts, review, scheduled publishing, multi-channel distribution, and edits after publication?
intent: See whether you can model a piece of content's lifecycle as clear states and flows and handle consistency and rollback when publishing.
signals:
  - Describes draft, review, publish, and takedown as explicit states and transitions, and who can trigger them
  - Separates content, versions, and published snapshots
  - Considers retries and idempotency for scheduled publishing and multi-channel distribution
  - Says how edits and withdrawals after publication affect content already distributed
primaryCapability: professional.system-design
topics: [system-design, backend, frontend]
roles: [engineering, backend, frontend, product]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - One channel fails to publish while others succeed. What does the user see?
  - Content must come down urgently. How does the whole chain finish within minutes?
source:
  - attribution: original
    label: "The author's system design question, an article editor and publisher"
---
