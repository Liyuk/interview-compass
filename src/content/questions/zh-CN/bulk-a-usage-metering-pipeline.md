---
questionId: bulk-a-usage-metering-pipeline
kind: question
status: published
locale: zh-CN
title: 产品用量计量
question: 一个按用量计费的 API 产品需要把分散区域的请求事件汇总成客户账单，并允许事后纠错。你会如何设计计量数据链路？
intent: 观察事件完整性、计量口径、迟到修正和账单可解释性如何贯通。
signals:
  - 定义计量事件的唯一标识、单位和生效规则
  - 处理重复、迟到、乱序事件和修订记录
  - 解释从原始事件到客户账单的可追溯关系
primaryCapability: professional.system-design
topics:
  - system-design
  - data-modeling
  - commercialization
roles:
  - backend
  - data
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：事件处理与数据建模
    url: https://github.com/donnemartin/system-design-primer
---
