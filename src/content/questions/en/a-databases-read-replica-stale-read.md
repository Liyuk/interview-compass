---
questionId: a-databases-read-replica-stale-read
kind: question
status: published
locale: en
title: >-
  After reads move to replicas, users sometimes cannot see a change immediately after a successful
  write. How would you define and handle stale reads?
question: >-
  After reads move to replicas, users sometimes cannot see a change immediately after a successful
  write. How would you define and handle stale reads?
intent: >-
  Assess whether you translate consistency needs into user operations, replication lag, routing, and
  fallback behavior.
signals:
  - Distinguishes read-your-writes, monotonic reads, and queries that tolerate delay.
  - >-
    Explains how replica lag is monitored and when to read from the primary or use temporary session
    stickiness.
  - Compares the cost of consistency guarantees in latency, capacity, and complexity.
primaryCapability: professional.system-design
topics:
  - databases
  - distributed-systems
  - reliability
roles:
  - backend
  - data
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - If replica lag spikes, which operations must stop being routed to replicas?
  - >-
    How would you verify user-perceived consistency goals instead of only database replication
    metrics?
---
