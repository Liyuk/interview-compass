---
questionId: a-system-design-five-x-growth-bottlenecks
kind: question
status: published
locale: zh-CN
title: 明年业务预期增长五倍，你怎样从现有架构出发，做一次全面的瓶颈体检并分阶段提前布局？
question: 明年大促或业务出海，预期增长五倍。从你现在的系统架构出发，你怎样从网关、核心链路、存储到机器资源做一次全面的瓶颈体检？你打算分几个阶段、投入多少人力提前布局，又怎样确认判断是对的？
intent: 了解你能否把增长预期转成具体的容量风险清单，并分阶段投入，用验证而不是直觉来确认。
signals:
  - 逐层识别瓶颈和它们对增长的敏感度，并区分线性扩容能解决的和需要改架构的
  - 说明用压测、历史数据和推算来验证容量，而不是只凭经验估计
  - 分阶段安排投入，并说明每阶段的目标、人力和检查点
  - 说明增长不及预期或超出预期时怎样调整
primaryCapability: professional.system-design
topics: [system-design, reliability, planning, distributed-systems, technical-planning]
roles: [engineering, backend, manager]
responsibilityScopes: [team, multiple-teams]
careerTracks: [team-manager, senior-manager]
scenarios: [interview, promotion, hiring]
formats: [case, planning, system-design]
followUps:
  - 资源只够解决其中一半的瓶颈，你先解决哪些，依据是什么？
  - 增长来自一个全新的用户群，历史数据没有参考价值，你怎么估？
source:
  - attribution: original
    label: "作者的分级面试框架，一线技术经理"
---
