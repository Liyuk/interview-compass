---
questionId: a-system-design-cost-model
kind: question
status: published
locale: zh-CN
title: 从工程角度，你怎样估算一个系统的整体成本？
question: 从工程角度，你怎样估算一个系统的整体成本？存储、计算资源这些成本分别怎么算，哪些会随规模线性增长，哪些不会？
intent: 了解你能否把系统设计和成本联系起来，并识别成本的主要驱动因素。
signals:
  - 把成本拆成存储、计算、网络和运维等部分，并说明各自的驱动因素
  - 区分随数据量、请求量增长的成本和固定成本
  - 说明估算所依据的规模假设，并给出最敏感的变量
  - 指出降低成本时可能付出的代价，例如延迟、可靠性
primaryCapability: professional.system-design
topics: [system-design, resource-allocation, engineering-systems]
roles:
  - engineering
  - backend
  - data
  - manager
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion]
formats: [case, system-design]
followUps:
  - 数据量增长十倍，哪一项成本最先出问题？
  - 你怎样让业务方理解这些成本？
source:
  - attribution: original
    label: 作者的面试提问套路：工程视角的成本估算
---
