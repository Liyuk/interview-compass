---
questionId: d-incident-campaign-outage-business-fallback
kind: question
status: published
locale: en
title: A big promotion goes live at midnight, the system is overwhelmed, and users complain they cannot claim coupons. As operations, what do you do during the half hour engineering is stopping the damage?
question: A big promotion goes live at midnight, the system stalls under heavy concurrency, and many users complain they cannot claim coupons. As front-line operations, what specific business fallback measures do you take during the half hour you are helping engineering stop the damage?
intent: See how you protect users and trust with business measures during an incident and divide the work with the technical team rather than only waiting for a fix.
signals:
  - First confirms the scope of impact and the affected users and aligns with engineering on current status and expected recovery time
  - Gives concrete user reassurance, such as an announcement, customer-service wording, and reissuing to affected users
  - Considers business-level controls such as pausing, postponing, or throttling the campaign
  - Records facts and impact to support the later review and compensation
primaryCapability: delivery.reliability-incidents
topics: [operations, reliability, communication]
roles: [operations, marketing, product]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, campus, operations-review]
formats: [case, behavioral]
followUps:
  - The reissued coupons far exceed the budget. What do you do?
  - Media or users spread the complaints on social platforms. How do you handle it?
source:
  - attribution: original
    label: "The author's leveled interview framework, operations track"
---
