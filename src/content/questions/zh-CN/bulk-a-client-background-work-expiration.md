---
questionId: bulk-a-client-background-work-expiration
kind: question
status: published
locale: zh-CN
title: 后台任务被系统限时
question: 客户端需要上传大文件，但系统可能随时暂停或终止后台任务。你会如何拆分任务、保存进度并保证重复调度不会破坏结果？
intent: 考察移动系统后台执行约束与可恢复任务设计。
signals:
  - 把任务切成可检查点的小单元
  - 持久化上传会话和已确认进度
  - 定义重复执行、取消和过期凭证的行为
primaryCapability: professional.engineering-systems
topics:
  - mobile
  - reliability
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
