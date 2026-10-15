---
questionId: "a-compiler-incremental-build-dependency-invalidation"
kind: "question"
status: "published"
locale: "zh-CN"
title: "增量编译很快，但改动共享头文件后偶尔没有重新编译所有依赖目标。你会怎样定位依赖追踪缺口？"
question: "增量编译很快，但改动共享头文件后偶尔没有重新编译所有依赖目标。你会怎样定位依赖追踪缺口？"
intent: "考察能否定位构建图遗漏的依赖，并验证增量产物与干净构建等价。"
signals: ["检查静态与动态依赖、生成文件和编译选项是否进入构建图","对比干净构建与增量构建产物","用最小复现定位漏失依赖","增加依赖声明检查与缓存失效测试"]
primaryCapability: "professional.computer-science"
topics: ["compiler-design","programming-languages","engineering-systems"]
roles: ["engineering","backend"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["如何证明修复没有让增量构建退化成全量重建？","远程构建缓存如何影响可复现性？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
