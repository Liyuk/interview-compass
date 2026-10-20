---
questionId: a-ai-engineering-eval-set-design
kind: question
status: published
locale: zh-CN
title: "怎样用评估样本决定问答原型的使用边界？"
question: "你做了一个客服问答原型。怎样设计一组评估样本，来决定它只能作为辅助检索，还是可以直接对外回复？"
intent: "了解你能否把一个不确定的能力放进可检验的评估里，并让评估结果直接影响使用范围。"
signals:
  - "样本覆盖过期规则与没有依据的提问"
  - "先定义什么算错误回答，再统计"
  - "把任务结果、质量与审查负担分开看"
primaryCapability: professional.ai-engineering
topics: [ai-engineering, metrics]
roles:
  - ai-engineer
  - data
  - engineering
  - product
  - operations
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion]
formats: [case, planning]
relatedQuestions:
  - questionId: a-ai-engineering-ship-ai-output-gate
    relation: "都关心怎样判断 AI 能力是否可靠。"
    contrast: "本题关注评估样本如何设计；另一题关注上线前的风险分级与门禁。"
source:
  - attribution: derived
    label: "筛选人和面试官到底在看什么（AI 时代补充：客服知识库原型）"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
  - attribution: inspired
    label: "ai-engineering-interview-questions：评估工程师题单（仅作主题启发，题面为原创）"
    url: https://github.com/ayushbishtdev/ai-engineering-interview-questions/blob/main/questions/03-ai-evaluation-engineer.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
