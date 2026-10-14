---
questionId: a-system-design-async-coupon-issuing-review
kind: question
status: published
locale: en
title: "Moving coupon issuing from synchronous to async with retries: what worries you most?"
question: "Issuing a coupon after payment used to run synchronously, and it is being changed to an async queue with retries. Review this change: which failure sequences worry you most, and what would you rehearse before release?"
intent: "Understand whether you can review a design by following concrete failure sequences instead of checking a document for missing sections."
signals:
  - "Probes the uncertain state where a timeout may already have issued the coupon"
  - "Looks at what happens to in-flight messages and requests during a rollback"
  - "Gives pre-release scenarios that can be replayed instead of a vague “test more”"
primaryCapability: professional.system-design
topics: [system-design, reliability, backend, distributed-systems]
roles: [engineering, backend]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, hiring, promotion]
formats: [artifact-review, case]
relatedQuestions:
  - questionId: a-engineering-systems-release-rollback
    relation: "Both ask whether “we wrote a rollback” really means it can be undone."
    contrast: "This one is about the failure sequences of one specific design; the other is about release and rollback practice overall."
source:
  - attribution: derived
    label: "Engineering Decision Skills: the tech-review pre-release review example"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/projects/2026/09/engineering-decision-skills/zh.md
---
