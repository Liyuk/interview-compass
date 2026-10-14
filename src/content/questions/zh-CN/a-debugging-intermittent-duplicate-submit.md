---
questionId: a-debugging-intermittent-duplicate-submit
kind: question
status: published
locale: zh-CN
title: "偶发的重复提交，本地复现不了怎么办？"
question: "线上偶尔出现同一订单被提交两次，你在本地无法复现。你会怎样缩小范围，并决定先止血还是先补观测？"
intent: "了解你面对偶发问题时，如何形成并检验假设，并区分临时止血与根因修复。"
signals:
  - "先定义什么算重复，以及它出现的时间窗口"
  - "列出多个可以被证伪的假设，并说明各自需要什么证据"
  - "区分止血措施与根因修复，并说明先后理由"
primaryCapability: professional.debugging
topics: [debugging, reliability, backend]
roles: [engineering, backend, frontend, mobile]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, promotion]
formats: [debugging, case]
followUps:
  - "补观测之前，你会先问线上哪些已有数据？"
source:
  - attribution: inspired
    label: "筛选人和面试官到底在看什么（项目追问：自动保存的例子）"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
---
