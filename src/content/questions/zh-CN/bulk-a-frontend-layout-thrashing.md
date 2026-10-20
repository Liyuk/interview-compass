---
questionId: bulk-a-frontend-layout-thrashing
kind: question
status: published
locale: zh-CN
title: 布局抖动与强制同步布局
question: 滚动列表时帧率下降，Performance trace 中反复出现 layout。你会如何判断代码是否触发布局抖动，并说明读写 DOM 的顺序为何重要？
intent: 考察浏览器布局计算成本与读写交错的影响。
signals:
  - 能解释布局读取可能触发同步计算
  - 能识别读写交替造成重复布局的风险
  - 提出批量读取/写入或 trace 验证
primaryCapability: professional.computer-science
topics:
  - frontend
roles:
  - frontend
  - engineering
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
