---
questionId: bulk-a-debug-tail-latency
kind: question
status: published
locale: zh-CN
title: 少数请求变慢时，怎样定位原因？
question: 服务平均耗时基本不变，但最慢 1% 的请求连续一周变慢，投诉集中在少数大客户。你会如何定位问题并决定先验证什么？
intent: 了解如何从分布、用户分组和调用路径中识别少数慢请求的来源。
signals:
  - 先核对延迟指标定义和受影响的时间段、租户
  - 比较端到端与各依赖的尾部延迟而非只看均值
  - 提出可证伪假设并关联变更、负载或数据倾斜
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - distributed-systems
roles:
  - backend
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: System Design Primer：性能与延迟分析
    url: https://github.com/donnemartin/system-design-primer
---
