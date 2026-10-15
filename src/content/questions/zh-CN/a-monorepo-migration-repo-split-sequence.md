---
questionId: "a-monorepo-migration-repo-split-sequence"
kind: "question"
status: "published"
locale: "zh-CN"
title: "团队决定把一个大型仓库拆成多个仓库，但历史、CI、包发布和代码所有权都有关联。你会怎样安排迁移顺序？"
question: "团队决定把一个大型仓库拆成多个仓库，但历史、CI、包发布和代码所有权都有关联。你会怎样安排迁移顺序？"
intent: "考察能否先解除迁移依赖、保障可追溯与回退，再逐步切换团队工作流。"
signals: ["梳理仓库边界与跨仓库依赖图","决定历史保留、镜像或归档策略及其依据","设计双写或冻结窗口、CI 切换和包来源更新","为每一步设定验收、回退和责任人"]
primaryCapability: "professional.engineering-systems"
topics: ["monorepo","engineering-systems","devops"]
roles: ["engineering","frontend","backend"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","planning"]
followUps: ["什么信号说明拆仓库的成本高于保持 monorepo？","如何保持安全修复和版本发布不中断？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：Monorepo"}]
---
