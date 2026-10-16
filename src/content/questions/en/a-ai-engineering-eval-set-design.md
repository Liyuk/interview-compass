---
questionId: a-ai-engineering-eval-set-design
kind: question
status: published
locale: en
title: "How would an evaluation set decide the limits of a Q&A prototype?"
question: "You built a customer-support Q&A prototype. How would you design an evaluation set to decide whether it may only assist retrieval, or can reply to customers directly?"
intent: "Understand whether you can put an uncertain capability under a checkable evaluation and let the result set the scope of use."
signals:
  - "The samples include outdated rules and questions with no supporting evidence"
  - "Defines what counts as a wrong answer before counting"
  - "Looks at task outcome, quality, and review burden separately"
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
    relation: "Both ask how to tell whether an AI capability is reliable."
    contrast: "This one is about how to design the evaluation samples; the other is about risk tiers and gates before release."
source:
  - attribution: derived
    label: "What screeners and interviewers are really looking for (AI-era addendum: customer-support knowledge base prototype)"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
  - attribution: inspired
    label: "ai-engineering-interview-questions: evaluation engineer question set (topic inspiration only; the prompt is original)"
    url: https://github.com/ayushbishtdev/ai-engineering-interview-questions/blob/main/questions/03-ai-evaluation-engineer.md
---
