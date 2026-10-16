---
questionId: bulk-a-framework-middleware-order
kind: question
status: published
locale: zh-CN
title: 中间件顺序改变请求语义
question: 加入鉴权、日志和异常处理中间件后，部分错误没有 trace id，且未授权请求仍触发昂贵的解析逻辑。你会如何分析执行顺序并重新安排边界？
intent: 考察框架请求管线顺序与横切关注点。
signals:
  - 能画出请求与响应的中间件顺序
  - 识别鉴权前执行的昂贵或敏感工作
  - 考虑异常路径与日志上下文的完整覆盖
primaryCapability: professional.system-design
topics:
  - backend
  - frameworks
roles:
  - backend
  - engineering
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
