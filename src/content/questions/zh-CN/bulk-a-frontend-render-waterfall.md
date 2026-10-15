---
questionId: bulk-a-frontend-render-waterfall
kind: question
status: published
locale: zh-CN
title: 首屏渲染瀑布定位
question: 页面的 HTML 很快返回，但用户仍长时间看不到主要内容。你会怎样沿着资源发现、下载、解析、执行和绘制过程定位阻塞点？
intent: 考察浏览器渲染流水线及性能诊断的系统性。
signals:
  - 能按关键渲染阶段拆解
  - 能区分网络阻塞与主线程阻塞
  - 选择瀑布图、Performance trace 或 Web Vitals 证据
primaryCapability: professional.system-design
topics:
  - frontend
  - computer-networks
roles:
  - frontend
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
  - debugging
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
---
