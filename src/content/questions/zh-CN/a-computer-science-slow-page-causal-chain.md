---
questionId: a-computer-science-slow-page-causal-chain
kind: question
status: published
locale: zh-CN
title: 图片很多的页面，首屏为什么会慢？
question: 一个图片很多的页面首屏打开很慢。你会怎样从现象一步步推回原因，并说明每种改进手段的代价？
intent: 了解你能否把“慢”拆成可观察的环节，沿因果链定位瓶颈，而不是罗列优化技巧。
signals:
  - 先追问慢在首屏、交互还是接口，再谈方案
  - 能说出怎样观察：网络瀑布、性能指标、弱网复现
  - 对预加载、压缩、缓存等手段，说明带宽、内存、解码或维护成本，以及不适用的条件
primaryCapability: professional.computer-science
topics:
  - computer-networks
  - frontend
roles:
  - engineering
  - frontend
  - mobile
responsibilityScopes:
  - individual
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
formats:
  - knowledge
  - case
followUps:
  - 如果瓶颈其实是接口太晚才返回图片地址，你的判断会怎样变化？
relatedQuestions:
  - questionId: a-debugging-narrowing-slow-api
    relation: 同样从“变慢”这一现象出发。
    contrast: 本题偏重用网络与浏览器原理解释因果；另一题偏重面对线上证据时的排查顺序。
source:
  - attribution: derived
    label: 筛选人和面试官到底在看什么（基础：从现象推回原理）
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
