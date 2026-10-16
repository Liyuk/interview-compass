---
questionId: a-security-download-url-authorization-lifetime
kind: question
status: published
locale: en
title: The system uses pre-signed URLs for private downloads, but links can be forwarded or retained for a long time. How would you design authorization and expiry boundaries?
question: The system uses pre-signed URLs for private downloads, but links can be forwarded or retained for a long time. How would you design authorization and expiry boundaries?
intent: Assess whether you turn user authorization into a narrow, short-lived capability while handling resource scope, revocation, and audit.
signals:
  - Limits the resource, operation, lifetime, and, where useful, source network of a link.
  - Explains how existing links expire or are mitigated after permission changes or file revocation.
  - Audits and monitors creation, use, and abnormal access without leaking secrets into logs.
primaryCapability: professional.system-design
topics:
  - security
  - computer-networks
  - risk-management
  - reliability
  - distributed-systems
roles:
  - backend
  - engineering
  - operations
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - debugging
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
followUps:
  - If mobile offline downloads need a longer window, how would you balance availability and exposure risk?
  - How would you prevent links from being retained accidentally in proxy caches, browser history, or analytics systems?
  - 【How do you bound access after permissions are revoked from an issued download link?】A service shares sensitive reports with signed URLs valid for 24 hours. A removed user can still access an old link; shorter expiry adds load. How would you design revocation and access checks?
  - How can revocation be immediate when a CDN caches content?
  - Who owns audit responsibility when a link is forwarded across organizations?
---
