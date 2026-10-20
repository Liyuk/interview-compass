---
questionId: a-debugging-split-bundle-slower
kind: question
status: published
locale: zh-CN
title: 把一个很大的前端包拆成多个小包以后，首屏反而更慢了。你会怀疑哪些原因，怎样验证？
question: 把一个很大的前端包拆成多个小包以后，首屏反而更慢了。你会怀疑哪些原因，怎样验证？
intent: 了解你能否把"拆包能提升性能"这个结论放回它的边界里，用可观察的现象定位真正的原因。
signals:
  - 先确认慢在哪一段，再谈手段
  - 想到请求数增加、缓存命中下降、关键资源加载顺序等可以检查的原因
  - 说明用什么观察来验证，例如网络瀑布图和不同网络环境
primaryCapability: professional.debugging
topics: [frontend, debugging, engineering-systems]
roles:
  - frontend
  - engineering
responsibilityScopes: [individual]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus]
formats: [debugging, case]
source:
  - attribution: derived
    label: 博客《筛选人和面试官到底在看什么》
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
