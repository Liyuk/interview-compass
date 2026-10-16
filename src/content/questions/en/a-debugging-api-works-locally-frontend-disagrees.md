---
questionId: a-debugging-api-works-locally-frontend-disagrees
kind: question
status: published
locale: en
title: Your endpoint works in local tests, but during integration the frontend says it errors or returns nothing. How do you locate the problem and show where it is?
question: Your endpoint works in local tests, but during integration a frontend colleague insists it errors or returns nothing. What means do you use to locate the problem, and how do you produce evidence the other person will accept?
intent: See whether you locate a cross-team problem with tools and facts rather than argument, and can explain your process.
signals:
  - First reproduces what the other person sees and confirms the request, environment, and parameters really match
  - Uses packet capture, logs, and hand-built requests to narrow the range step by step and says what each proves
  - Separates the usual causes, namely environment differences, data differences, and differences in how it is called
  - Communicates with evidence the other side can also check, not "it works on my side"
primaryCapability: professional.debugging
topics: [debugging, backend, frontend]
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [individual]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus]
formats: [debugging, case]
followUps:
  - The problem turns out to be on your side. How do you handle it?
  - The production logs show no trace of that request at all. What do you do?
source:
  - attribution: original
    label: "The author's leveled interview framework, junior engineer"
---
