---
questionId: bulk-a-delayed-task-scheduler
kind: question
status: published
locale: en
title: Delayed task scheduler
question: >-
  Design a service that lets several product teams submit tasks to run after a specified time; tasks
  may be canceled, rescheduled, or submitted more than once. How would you divide the data model and
  execution components?
intent: >-
  Examine how task state, scheduling precision, horizontal scaling, and concurrent updates shape the
  system boundaries.
signals:
  - Separates task definitions, due-time indexing, and execution-attempt state
  - Discusses time precision, partitioning, and recovery after scheduler failure
  - Explains races between cancellation or rescheduling and work that has already started
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - concurrency
roles:
  - backend
  - engineering
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
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：队列与分布式任务处理
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
