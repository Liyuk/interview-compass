---
questionId: a-engineering-systems-ci-untrusted-change
kind: question
status: published
locale: en
title: CI trust boundaries and release isolation for untrusted code
question: >-
  A repository accepts external contributions, and CI runs build scripts, reuses caches, reads test
  credentials, and produces release artifacts. How would you separate untrusted execution, credential
  permissions, and cache boundaries so code cannot read secrets or poison trusted artifacts?
intent: >-
  Assesses whether you can separate untrusted code, protected credentials, caches, and release environments,
  then verify that the isolation works.
signals:
  - Identifies execution risks from forks, dependency scripts, and build steps
  - Scopes credentials to the minimum task and keeps release secrets from untrusted workflows
  - Isolates or validates caches and artifacts reused across trust boundaries
  - Describes audit, release gates, and adversarial tests that verify the controls
primaryCapability: professional.engineering-systems
topics:
  - devops
  - security
  - engineering-systems
roles:
  - engineering
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
followUps:
  - >-
    If a cache must be shared, how would you prevent an external contributor from poisoning data consumed by a
    trusted release?
  - Which steps can run in an untrusted environment, and which must be repeated in a protected environment?
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
---
