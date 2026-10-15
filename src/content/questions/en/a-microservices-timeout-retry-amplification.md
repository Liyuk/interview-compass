---
questionId: "a-microservices-timeout-retry-amplification"
kind: "question"
status: "published"
locale: "en"
title: "A slow dependency triggers retries across several services and amplifies total traffic. How would you design timeout, retry, and circuit-breaker boundaries?"
question: "A slow dependency triggers retries across several services and amplifies total traffic. How would you design timeout, retry, and circuit-breaker boundaries?"
intent: "Assesses whether you can control retry amplification from end-to-end deadlines and failure propagation rather than tuning services independently."
signals: ["Allocate call deadlines from the user request budget","Separate safely retryable operations from non-idempotent ones","Set backoff, jitter, retry budgets, and concurrency limits","Define degraded behavior, recovery probes, and alerts after opening a circuit"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles: ["backend","engineering","ai-engineer"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["How would you verify retries do not create self-amplifying traffic during failure?","Should background work continue after the user request has timed out?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
---
