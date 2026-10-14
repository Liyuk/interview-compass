---
questionId: a-system-design-capacity-estimate-first
kind: question
status: published
locale: en
title: "Before drawing the architecture, which numbers come first?"
question: "Before drawing any architecture diagram, which few numbers would you use to decide whether a service should be split or cached? Use a service you know to explain."
intent: "Understand whether you let rough capacity estimates constrain the design instead of picking components first."
signals:
  - "Names the estimate inputs such as read/write ratio, peak load, and data volume, and states the assumptions"
  - "Uses the estimate to explain why a component is or is not needed"
  - "Admits the estimate is imprecise and says what evidence would correct it"
primaryCapability: professional.system-design
topics: [system-design, distributed-systems, databases]
roles: [engineering, backend, data]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, hiring]
formats: [system-design, knowledge]
source:
  - attribution: inspired
    label: "system-design-primer: clarify requirements and capacity before choosing components (the prompt is original)"
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
---
