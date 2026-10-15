---
questionId: bulk-a-virtual-memory-isolation
kind: question
status: published
locale: zh-CN
title: 进程隔离与虚拟内存
question: 两个进程都访问地址 0x1000，为什么通常不会读写到同一块物理内存？请从地址转换和操作系统职责解释。
intent: 考察能否把虚拟地址、页表和进程隔离连成一条机制链。
signals:
  - 能区分虚拟地址与物理地址
  - 能说明页表或地址转换参与映射
  - 能指出隔离边界由硬件与操作系统共同维护
primaryCapability: professional.computer-science
topics:
  - operating-systems
roles:
  - engineering
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
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
---
