---
questionId: d-incident-campaign-outage-business-fallback
kind: question
status: published
locale: en
title: "During a campaign outage, how should engineers coordinate with operations to protect customers?"
question: "A campaign goes live overnight, but heavy traffic stalls the system. Users cannot claim coupons and start complaining. As an engineer involved in the campaign, how would you coordinate with operations and support on temporary business measures while restoring the system?"
intent: "Examine whether an engineer understands user and business impact, supplies technical facts, and coordinates responsibilities, authority, and recovery conditions with operations."
signals: ["Confirm the failure scope, affected users, and expected recovery time, then share updated facts.","Offer a customer response such as a notice, consistent guidance for support staff, and compensation for affected users.","Compare pausing, delaying, or restricting new campaign traffic and their business effects.","Record response actions and user impact to support later review and compensation."]
primaryCapability: delivery.reliability-incidents
topics: [operations, reliability, communication]
roles:
  - operations
  - marketing
  - product
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
  - data
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus, operations-review]
formats: [case, behavioral]
followUps:
  - The reissued coupons far exceed the budget. What do you do?
  - Media or users spread the complaints on social platforms. How do you handle it?
source:
  - attribution: original
    label: "The author's leveled interview framework, operations track"
---
