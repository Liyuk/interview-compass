---
questionId: a-system-design-collaborative-document
kind: question
status: published
locale: en
title: How would you design a document system for real-time multi-user editing?
question: How would you design a document system for real-time multi-user editing? When several people edit the same passage at once, how do you guarantee eventual consistency, and how do you merge after offline edits?
intent: See whether you can clarify the constraints of collaboration and make reasoned trade-offs among conflict-merging approaches.
signals:
  - Clarifies concurrency, offline needs, and consistency requirements before choosing an approach
  - Compares merging ideas such as operational transformation and CRDTs and the cost of each
  - Considers version history, undo and redo, and permissions, not only the sync algorithm
  - Says how correctness under concurrency is verified, for example by replaying random operations
primaryCapability: professional.system-design
topics: [system-design, distributed-systems, frontend]
roles:
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - When the document grows very large, how are loading and syncing handled?
  - Two people edit the same sentence offline. What does the user finally see?
source:
  - attribution: original
    label: "The author's system design question, collaborative documents"
---
