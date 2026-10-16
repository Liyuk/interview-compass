---
questionId: bulk-a-btree-vs-lsm-write-profile
kind: question
status: published
locale: en
title: B-Trees and LSM Trees Under Different Workloads
question: >-
  A storage service shifts from read-heavy to sustained writes, and the team is comparing B-tree and
  LSM approaches. Which workload characteristics would guide the choice, and what read/write
  amplification costs would you examine?
intent: Tests how storage-index structures fit workload characteristics.
signals:
  - Explains broad differences in their write paths
  - Uses read/write ratio, range queries, or update patterns in the comparison
  - Identifies costs such as write amplification, read amplification, or compaction
primaryCapability: professional.computer-science
topics:
  - databases
roles:
  - backend
  - data
  - engineering
  - ai-engineer
responsibilityScopes:
  - individual
  - team
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
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
