---
questionId: bulk-a-object-storage-uploads
kind: question
status: published
locale: en
title: Untrusted file-upload pipeline
question: >-
  A collaboration product accepts archives and media that must be scanned before other members can access them. How
  would you design the boundaries for upload, inspection, and publication?
intent: See whether transfer efficiency, untrusted input, security scanning, and visibility state are considered together.
signals:
  - Separates temporary uploads, scan results, and published objects
  - Explains resumable large uploads, integrity checks, and duplicate submissions
  - Considers malicious content, access control, scan delays, and cleanup
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - security
roles:
  - backend
  - engineering
  - frontend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：对象存储与内容分发
    url: https://github.com/donnemartin/system-design-primer
---
