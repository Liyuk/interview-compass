---
questionId: bulk-a-client-process-death-lifecycle
kind: question
status: published
locale: zh-CN
title: 客户端进程被系统回收
question: 移动端用户切到后台几分钟后返回，页面进程可能已被系统回收。你会划分哪些状态需要恢复、哪些状态应重新读取？
intent: 考察客户端生命周期、状态持久化和数据新鲜度边界。
signals:
  - 区分短暂 UI 状态与持久业务状态
  - 考虑系统回收时保存机会有限
  - 明确恢复后如何校验服务端数据与过期状态
primaryCapability: professional.computer-science
topics:
  - mobile
  - operating-systems
roles:
  - mobile
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
  - case
source:
  - attribution: inspired
    label: Android Interview Questions — Android, Kotlin, lifecycle, and architecture topics
    url: https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md
---
