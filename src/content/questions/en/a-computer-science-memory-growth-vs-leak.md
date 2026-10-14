---
questionId: a-computer-science-memory-growth-vs-leak
kind: question
status: published
locale: en
title: A long-running process keeps growing in memory and nobody can point to an obvious leak. How do you tell a real leak from normal cache growth or fragmentation?
question: A long-running process keeps growing in memory and nobody can point to an obvious leak. How do you tell a real leak from normal cache growth or fragmentation?
intent: See how well you understand memory management and whether you can separate competing explanations by observation rather than guesswork.
signals:
  - Proposes observations that separate the explanations, such as whether growth has an upper bound or falls back after release
  - Knows which kinds of memory metrics to compare instead of staring at a single total
  - Narrows the problem down before touching any code
primaryCapability: professional.computer-science
topics: [operating-systems, debugging]
roles: [backend, mobile, engineering]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview]
formats: [debugging, knowledge]
source:
  - attribution: original
    label: Original to this site
---
