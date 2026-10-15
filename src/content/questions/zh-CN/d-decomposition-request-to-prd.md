---
questionId: d-decomposition-request-to-prd
kind: question
status: published
locale: zh-CN
title: 你怎样把一个模糊的业务诉求，一步步拆成没有逻辑漏洞的需求文档？
question: 说一个你负责过的最复杂的功能。你怎样把一个模糊的业务诉求，一步步拆成没有逻辑漏洞的需求文档？遇到断网、账户异常这类边缘情况，你怎样设计容错和交互？
intent: 了解你拆解模糊诉求的方法，以及你是否系统地考虑异常路径，而不只设计顺利的主流程。
signals:
  - 先澄清诉求背后的目标和使用场景，再确定范围
  - 用状态、流程和规则把主流程写完整，并列出边缘情况
  - 对异常给出具体的处理和提示，而不是笼统写"提示错误"
  - 说明怎样与研发和测试一起检查需求是否有遗漏
primaryCapability: delivery.decomposition
topics: [product-thinking, execution]
roles: [product, engineering]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, campus, promotion]
formats: [behavioral, case]
followUps:
  - 需求评审时，研发指出了一个你没想到的逻辑漏洞，你怎么处理？
  - 上线后出现了一个文档里没有覆盖的情形，你怎么复盘？
source:
  - attribution: original
    label: "作者的分级面试框架，产品方向"
---
