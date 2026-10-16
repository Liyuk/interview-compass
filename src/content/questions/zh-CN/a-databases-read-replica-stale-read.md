---
questionId: a-databases-read-replica-stale-read
kind: question
status: published
locale: zh-CN
title: 服务把读请求切到副本后，写入成功的用户偶尔读不到刚才的修改。你会怎样界定并处理这种陈旧读取？
question: 服务把读请求切到副本后，写入成功的用户偶尔读不到刚才的修改。你会怎样界定并处理这种陈旧读取？
intent: 考察你能否把一致性需求落实到用户操作、复制延迟、读写路由和降级（关闭非核心功能以保住核心服务）策略。
signals:
  - 区分读己之写、单调读取和允许延迟的查询场景。
  - 描述复制延迟如何被监控，并决定何时回源或短暂粘滞主库。
  - 比较一致性保障对延迟、容量和复杂度的成本。
primaryCapability: professional.system-design
topics:
  - databases
  - distributed-systems
  - reliability
roles:
  - backend
  - data
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果副本延迟突增，哪些操作必须暂停分流？
  - 怎样验证用户可感知的一致性目标，而不仅是数据库复制指标？
---
