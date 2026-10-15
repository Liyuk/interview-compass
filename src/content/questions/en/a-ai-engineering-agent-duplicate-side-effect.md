---
questionId: "a-ai-engineering-agent-duplicate-side-effect"
kind: "question"
status: "published"
locale: "en"
title: "An agent can create tickets, issue refunds, or change accounts. After a timeout, the system cannot tell whether an action succeeded and the agent retries. How would you prevent duplicate or unauthorized side effects?"
question: "An agent can create tickets, issue refunds, or change accounts. After a timeout, the system cannot tell whether an action succeeded and the agent retries. How would you prevent duplicate or unauthorized side effects?"
intent: "Assess whether you can separate model decisions from real-world writes and design safe failure semantics."
signals: ["Separates read-only tools from side-effecting actions", "Uses idempotency, status checks, or human confirmation for uncertain outcomes", "Sets confirmation gates by permission, value, or risk", "Handles state recovery across retries, timeouts, and partial success"]
primaryCapability: "professional.ai-engineering"
topics: ["ai-engineering", "reliability", "security"]
roles: ["ai-engineer", "backend"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["system-design", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "atryx AI 工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/atryx/ai-engineer-interview-questions"}]
---
