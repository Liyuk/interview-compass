---
questionId: a-computer-networks-http-cache-validator
kind: question
status: published
locale: en
title: >-
  Static assets still show old content after ETags are added, while clearing caches causes a traffic
  spike. How would you design HTTP cache validation and invalidation?
question: >-
  Static assets still show old content after ETags are added, while clearing caches causes a traffic
  spike. How would you design HTTP cache validation and invalidation?
intent: >-
  Assess whether you distinguish cache freshness, conditional requests, resource versions, and
  deployment transitions.
signals:
  - Explains the separate roles of Cache-Control, ETag or Last-Modified, and conditional requests.
  - Handles content changes, application-shell updates, and browser/CDN cache layers.
  - Defines invalidation scope, origin-load protection, and rollback behavior.
primaryCapability: professional.computer-science
topics:
  - computer-networks
  - frontend
  - reliability
roles:
  - frontend
  - backend
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - knowledge
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - >-
    If HTML must update immediately while hashed assets can be cached long-term, how should
    deployment coordinate them?
  - >-
    How would you diagnose inconsistent behavior across browser cache, service worker, and CDN
    layers?
---
