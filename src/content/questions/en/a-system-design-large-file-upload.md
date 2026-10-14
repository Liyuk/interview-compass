---
questionId: a-system-design-large-file-upload
kind: question
status: published
locale: en
title: "Design a product capability for uploading large files"
question: "Design a product capability that supports uploading large files. Which constraints would you clarify first, and how would you then expand layer by layer?"
intent: "Understand whether you design from the problem and its constraints, and can say what each choice solves and what it costs."
signals:
  - "Asks about file size, network conditions, access control, and abuse prevention first"
  - "Separates client-side chunked retry, server-side validation and merge, and state tracking"
  - "Explains how failures recover and what is used to observe success rate and duration"
primaryCapability: professional.system-design
topics: [system-design, backend, frontend]
roles: [engineering, frontend, backend, mobile]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview]
formats: [system-design]
followUps:
  - "If a user switches networks halfway through an upload, which layer is responsible for recovery?"
source:
  - attribution: derived
    label: "What screeners and interviewers are really looking for (practicing system design with scenarios)"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
---
