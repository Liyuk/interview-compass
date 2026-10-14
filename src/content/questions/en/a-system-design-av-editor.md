---
questionId: a-system-design-av-editor
kind: question
status: published
locale: en
title: How would you design an online audio or video editor?
question: How would you design an online audio or video editor? How should the timeline, assets, non-destructive editing, preview, and final export each be designed?
intent: See whether you can model a timeline editor and separate the two paths that have different requirements, real-time preview and offline export.
signals:
  - Expresses the timeline with tracks, clips, and time ranges, and keeps edits from altering the original assets
  - Separates preview, which needs low latency, from export, which needs high quality, with a path for each
  - Considers transcoding, proxy files, caching, and memory pressure for assets
  - Says how export jobs are queued, show progress, and recover from failure
primaryCapability: professional.system-design
topics: [system-design, frontend, backend]
roles: [engineering, frontend, backend, mobile]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - The user drags the timeline and must see a frame at once. How do you do it?
  - A very long project fails halfway through export. How does it recover?
source:
  - attribution: original
    label: "The author's system design question, an audio and video editor"
---
