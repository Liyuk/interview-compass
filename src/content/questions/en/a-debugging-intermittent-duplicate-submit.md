---
questionId: a-debugging-intermittent-duplicate-submit
kind: question
status: published
locale: en
title: "An intermittent duplicate submission will not reproduce locally. What now?"
question: "In production the same order is occasionally submitted twice, and you cannot reproduce it locally. How would you narrow it down, and would you stop the bleeding first or add observability first?"
intent: "Understand how you form and test hypotheses for an intermittent problem, and how you separate a stopgap from a root-cause fix."
signals:
  - "Defines what counts as a duplicate and the time window in which it appears"
  - "Lists several falsifiable hypotheses and the evidence each would need"
  - "Separates the stopgap from the root-cause fix and gives a reason for the order"
primaryCapability: professional.debugging
topics: [debugging, reliability, backend]
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion]
formats: [debugging, case]
followUps:
  - "Before adding observability, which existing production data would you ask for first?"
source:
  - attribution: inspired
    label: "What screeners and interviewers are really looking for (project follow-ups: the autosave example)"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
---
