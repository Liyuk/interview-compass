---
questionId: g-structured-reflection-improvement-executed
kind: question
status: published
locale: en
title: Were the improvements proposed in a retrospective actually carried out afterwards?
question: Were the improvements proposed in a retrospective actually carried out afterwards? Did each one have an owner, a date, and a way to verify it? For those not carried out, why not?
intent: "Assess whether your retrospective turns improvement into owned work with deadlines and validation, while honestly tracking incomplete actions and why effects were absent."
signals: ["For each action state owner, due date, resources, and how results will be verified.", "Separate done, in progress, not done, and ineffective; writing an action down is not completion.", "Explain constraints or decisions behind non-execution and whether the item is replanned, risk-accepted, or closed.", "Compare measures or incidents before and after and check whether the change came from the action."]
anchors:
  notPassing: "Lists improvements but cannot say whether they were done or effective."
  passing: "Names owner/time and reports status."
  excellent: "Separates execution from effect, explains incomplete items, and validates results."
  exceptional: "Quantifies recurrence and side effects, closes/reassigns actions or accepts residual risk, and improves next-cycle action governance."
primaryCapability: learning-adaptation.structured-reflection
topics: [learning, execution]
roles:
  - engineering
  - product
  - operations
  - pmo
  - manager
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios: [interview, promotion, self-reflection, operations-review]
formats: [behavioral, artifact-review]
followUps: ["When an action is not completed, how do you prevent it from disappearing or being deferred forever?", "What evidence shows an action reduced recurrence rather than simply shipped on time?"]
weakAnswer: "Treating the number of actions or checked boxes as impact without owners, dates, or outcome validation."
source:
  - attribution: original
    label: "The author's interview sequence: whether retrospective improvements were carried out"
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
