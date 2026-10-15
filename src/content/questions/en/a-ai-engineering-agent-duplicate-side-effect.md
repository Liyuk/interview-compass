---
questionId: a-ai-engineering-agent-duplicate-side-effect
kind: question
status: published
locale: en
title: >-
  An agent can create tickets, issue refunds, or change accounts. After a timeout, the system cannot tell
  whether an action succeeded and the agent retries. How would you prevent duplicate or unauthorized side
  effects?
question: >-
  An agent can create tickets, issue refunds, or change accounts. After a timeout, the system cannot tell
  whether an action succeeded and the agent retries. How would you prevent duplicate or unauthorized side
  effects?
intent: Assess whether you can separate model decisions from real-world writes and design safe failure semantics.
signals:
  - Separates read-only tools from side-effecting actions
  - Distinguishes a new model decision from a network retry of the same tool request
  - Uses idempotency keys, status checks, or human confirmation for uncertain outcomes
  - Sets confirmation thresholds by permission, amount, or risk
  - Explains recovery across retries, timeouts, and partial success
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - security
roles:
  - ai-engineer
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - case
followUps:
  - How do you distinguish a new model decision from a network retry of the same tool request?
  - >-
    When a timeout leaves the action outcome unknown, when do you check status, retry, pause, or hand off to a
    person?
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: inspired
    label: Landed AI Engineer Interview：Agent 工具调用可靠性
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
relatedQuestions: []
---
