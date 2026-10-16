---
questionId: bulk-a-debug-partial-dependency-outage
kind: question
status: published
locale: zh-CN
title: 依赖只在部分区域失败时，怎样隔离影响并保护核心功能？
question: 一个关键依赖只在某个区域间歇性超时，整体健康检查仍显示正常。你会如何判断影响面，并安全地隔离或临时关闭非核心功能？
intent: 观察能否定位区域性故障、区分控制面和用户路径信号，并选择有边界的缓解措施。
signals:
  - 按区域、请求类型和租户切分成功率及超时
  - 检查探针覆盖是否代表真实用户路径
  - 解释隔离或降级如何避免跨区扩散和数据不一致
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - distributed-systems
roles:
  - backend
  - engineering
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: System Design Primer：依赖故障与降级
    url: https://github.com/donnemartin/system-design-primer
---
