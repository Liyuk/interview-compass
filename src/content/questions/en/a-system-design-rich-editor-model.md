---
questionId: a-system-design-rich-editor-model
kind: question
status: published
locale: en
title: To build an online editor like Doc, PPT, or PS, how do you design the core data model and rendering?
question: To build an online editor like Doc, PPT, or PS, how do you design the core data model and rendering? How do you handle undo and redo, selection, and performance on large files?
intent: See whether you can extract a stable data model for a complex editor and bring rendering, operation history, and performance into one design.
signals:
  - First separates the document model, view state, and rendering, and states the boundaries between them
  - Expresses changes as operations or commands so undo, redo, and collaboration share a base
  - Explains chunking, virtualization, or incremental rendering for large files
  - Compares how the model differs between kinds of editor, such as text flow versus free canvas
primaryCapability: professional.system-design
topics: [system-design, frontend]
roles: [engineering, frontend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - How do you let a third party add a new kind of element without breaking the core model?
  - The file format must stay backward compatible for years. How do you design it?
source:
  - attribution: original
    label: "The author's system design question, the data model of an online editor"
---
