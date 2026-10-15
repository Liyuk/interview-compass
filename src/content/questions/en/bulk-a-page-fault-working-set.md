---
questionId: bulk-a-page-fault-working-set
kind: question
status: published
locale: en
title: Diagnosing page faults, working-set changes, and tail latency
question: >-
  A service’s resident memory is stable, but major page faults, disk I/O, and tail latency rise together. How
  would you distinguish changes in the working set, mapping behavior, memory pressure, and application access
  patterns?
intent: >-
  Tests virtual-memory and page-fault fundamentals, along with your ability to identify working-set churn from
  system measures and application behavior.
signals:
  - Distinguishes major from minor faults and explains their performance implications
  - Connects working set, available memory, mappings, paging activity, and tail latency
  - Proposes comparative observations that distinguish application-access hypotheses
  - Verifies the source of pressure before choosing an application- or system-level mitigation
primaryCapability: professional.computer-science
topics:
  - operating-systems
roles:
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
  - case
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - With stable resident memory, what mapping or working-set changes could still increase major faults?
  - How would you design an experiment to separate application-access changes from host memory pressure?
---
