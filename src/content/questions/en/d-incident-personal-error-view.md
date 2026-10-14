---
questionId: d-incident-personal-error-view
kind: question
status: published
locale: en
title: How do you see an incident caused by your own operational mistake?
question: How do you see an incident caused by your own operational mistake? Which part was your error, and which part was the gap in the system that let the error happen?
intent: See how you treat an incident you caused, without deflecting and without reducing everything to "I was not careful enough", and whether you can find the system-level causes.
signals:
  - Plainly owns the step that was their mistake, rather than starting with others and the environment
  - Separates the personal error from the gaps that let it happen, such as no review, excessive permissions, or no rollback
  - Does not over-blame themselves and does not push the blame onto the process
  - Says how it was found, reported, and contained at the time
primaryCapability: delivery.reliability-incidents
topics: [reliability, risk-management, ethics]
roles: [engineering, backend, frontend, operations, pmo]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, promotion, self-reflection, operations-review]
formats: [behavioral]
followUps:
  - After the incident, what changed in how others trusted you?
  - If someone else had made the same operation, could it have gone wrong too?
source:
  - attribution: original
    label: "The author's interview sequence: incidents caused by personal reasons"
---
