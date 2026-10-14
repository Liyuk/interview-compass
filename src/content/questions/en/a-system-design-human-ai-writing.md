---
questionId: a-system-design-human-ai-writing
kind: question
status: published
locale: en
title: How would you design a product where a person and an AI write together?
question: How would you design a product where a person and an AI write together? How are the AI's edits shown, accepted, or rejected, and how are conflicts handled when both edit at once?
intent: See how you set the boundary of collaboration between a person and an AI so the user stays in control and every change can be traced.
signals:
  - Makes AI edits suggestions that can be reviewed, accepted, rejected, and undone one by one, not direct overwrites
  - Explains how conflicts are handled when the person and the AI change the same place
  - Records where each piece of content came from so it can be traced and reverted
  - Considers the scope of context, privacy, and how the quality of suggestions is assessed
primaryCapability: professional.system-design
topics: [system-design, ai-engineering, frontend]
roles: [engineering, ai-engineer, frontend, product]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - The user wants to know which content the AI wrote. How does the system answer?
  - Many AI suggestions are rejected. How do you judge where the problem is?
source:
  - attribution: original
    label: "The author's system design question, human and AI co-writing"
---
