---
questionId: bulk-a-frontend-bundle-cache-invalidation
kind: question
status: published
locale: en
title: Frontend Asset Cache Invalidation
question: After an update, some users occasionally load new HTML with old JavaScript and the page fails. How would you design asset naming, cache policies, and release order to reduce inconsistency?
intent: Tests caching and version-transition mechanics for frontend build artifacts.
signals:
  - Separates caching policies for HTML and versioned assets
  - Accounts for a window in which old clients still reference old assets
  - Proposes release-order, rollback, and compatibility strategies
primaryCapability: professional.engineering-systems
topics:
  - frontend
  - engineering-systems
  - reliability
  - devops
  - computer-networks
roles:
  - frontend
  - engineering
  - backend
  - mobile
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - case
  - system-design
  - debugging
  - knowledge
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 【How do you order cache and deployment when users receive new HTML with old assets?】A CDN has cached new HTML while some edge nodes still hold old JavaScript. The page fails to start, and purging creates a traffic spike. How would you change asset naming, rollout order, and cleanup?
  - How do you handle old pages that request lazy assets much later?
  - When is it safe to delete assets from the previous release?
  - 【Static assets still show old content after ETags are added, while clearing caches causes a traffic spike. How would you design HTTP cache validation and invalidation?】Static assets still show old content after ETags are added, while clearing caches causes a traffic spike. How would you design HTTP cache validation and invalidation?
  - If HTML must update immediately while hashed assets can be cached long-term, how should deployment coordinate them?
  - How would you diagnose inconsistent behavior across browser cache, service worker, and CDN layers?
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
