---
questionId: a-debugging-narrowing-slow-api
kind: question
status: published
locale: zh-CN
title: "没有发布记录，接口却变慢了"
question: "一个接口从昨天开始变慢，但没有任何发布记录。给你日志、监控和数据库慢查询记录，你会按什么顺序排查？"
intent: "了解你如何用证据逐层排除可能原因，而不是凭经验直接猜测。"
signals:
  - "先确认变慢的范围与起点，再选择排查方向"
  - "对比发生变化与保持不变的因素"
  - "说明什么时候应该先回退或限流，而不是继续查"
primaryCapability: professional.debugging
topics: [debugging, databases, backend]
roles:
  - engineering
  - backend
  - data
  - ai-engineer
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, operations-review]
formats: [debugging]
relatedQuestions:
  - questionId: a-computer-science-slow-page-causal-chain
    relation: "同样从“变慢”这一现象出发。"
    contrast: "本题偏重面对线上证据时的排查顺序；另一题偏重用网络与浏览器原理解释因果。"
source:
  - attribution: original
    label: "原创题目"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
