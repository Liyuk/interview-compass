---
questionId: a-mobile-cold-start-budget-low-end-device
kind: question
status: published
locale: zh-CN
title: 新功能增加了启动依赖，低端设备的冷启动明显变慢，但高端设备指标正常。你会怎样确定优化顺序？
question: 新功能增加了启动依赖，低端设备的冷启动明显变慢，但高端设备指标正常。你会怎样确定优化顺序？
intent: 考察能否分设备层级分析冷启动瓶颈，并在低端设备体验与功能初始化成本间排优先级。
signals:
  - 定义冷启动阶段与用户感知就绪时间
  - 按设备、网络和版本切片定位增量成本
  - 区分关键依赖、延迟加载和非必要初始化
  - 提出预算、回归门禁与低端设备降级（关闭非核心功能以保住核心服务）策略
primaryCapability: professional.system-design
topics:
  - mobile
  - engineering-systems
  - reliability
roles:
  - mobile
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - system-design
followUps:
  - 延迟加载引发首次交互卡顿时如何平衡？
  - 如何避免只优化平均设备而漏掉长尾？
source:
  - attribution: original
    label: Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划
---
