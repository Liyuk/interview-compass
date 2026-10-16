---
questionId: "a-framework-server-state-cache-invalidation"
kind: "question"
status: "published"
locale: "en"
title: "Several pages share server data and framework caching reduces requests, but stale results appear after users switch accounts. How would you design cache keys and invalidation boundaries?"
question: "Several pages share server data and framework caching reduces requests, but stale results appear after users switch accounts. How would you design cache keys and invalidation boundaries?"
intent: "Assesses whether you can define correct data keys and invalidation semantics while balancing cache benefits with account, tenant, and permission isolation."
signals: ["Specify identity, permission, tenant, and query parameters in cache keys","Define freshness, invalidation, revalidation, and optimistic updates","Handle concurrent requests, cancellation, and account switching","Verify cache is never reused across permission contexts"]
primaryCapability: "professional.coding-abstraction"
topics: ["frameworks","frontend","security"]
roles:
  - frontend
  - engineering
  - mobile
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["Which data should not use framework-level caching?","How would you handle requests still in flight at sign-out?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
