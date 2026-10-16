---
questionId: a-system-design-large-file-upload
kind: question
status: published
locale: en
title: Large-file upload, scanning, and safe publication
question: >-
  Design a collaboration product that supports large-file uploads with resumability, where files must be
  validated and scanned before other members can access them. What constraints would you clarify, and how
  would you design upload, temporary storage, scanning, publication, permissions, and cleanup boundaries?
intent: >-
  Assesses whether you can design an end-to-end flow that recovers from network failures and prevents
  untrusted content from becoming visible before checks pass.
signals:
  - Clarifies file size, network conditions, permissions, abuse controls, and availability goals
  - Separates temporary upload objects, scan state, validation results, and published objects
  - Designs chunked resume, integrity checks, retries, and duplicate upload handling
  - Accounts for malicious content, scan delays, access control, recovery, and cleanup of incomplete files
primaryCapability: professional.system-design
topics:
  - system-design
  - backend
  - frontend
roles:
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
formats:
  - system-design
followUps:
  - If a user changes networks mid-upload, which layer resumes progress and prevents duplicate objects?
  - If the scanner is unavailable or times out, should the file be visible and how does its state converge?
  - How would you prove that collaborators can access only files that passed checks and remain authorized?
source:
  - attribution: derived
    label: What screeners and interviewers are really looking for (practicing system design with scenarios)
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
  - attribution: inspired
    label: System Design Primer：对象存储与内容分发
    url: https://github.com/donnemartin/system-design-primer
---
