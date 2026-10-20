---
questionId: bulk-a-atomic-memory-ordering
kind: question
status: published
locale: zh-CN
title: 原子操作与内存可见性
question: "假设使用 C++20：一个线程写入非原子 payload 后，以 `memory_order_relaxed` 将原子标志 `ready` 设为 true；另一个线程以 relaxed 读取到 true 后读取 payload。为什么仅有原子标志仍不够？怎样同步才能安全交接数据？"
intent: "判断回答者能否区分原子性与线程间顺序，并说明在题设语言规则下怎样保证 payload 写入对读取线程可见。"
signals:
  - "说明 relaxed 原子操作只保证标志访问的原子性，不会为 payload 自动建立 synchronizes-with 或 happens-before 关系。"
  - "指出题设中的非原子 payload 读写缺少同步，构成 C++ 数据竞争。"
  - "提出正确的 release-store/acquire-load 发布获取配对，或用同一互斥锁保护发布和读取。"
  - "说明并发测试或消毒器可帮助发现错误，同时指出测试通过本身不能证明程序正确。"
primaryCapability: professional.computer-science
topics:
  - concurrency
  - programming-languages
roles:
  - engineering
  - backend
  - mobile
  - ai-engineer
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
  - knowledge
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
