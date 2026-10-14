---
questionId: a-system-design-admin-permissions
kind: question
status: published
locale: en
title: How should the permission system of a large operations back office be designed?
question: How should the permission system of a large operations back office be designed? How do you organize roles, data scope, approvals, and audit, and how do you keep it from getting out of control as permissions multiply?
intent: See whether you can give permissions a clear model and trade off security, usability, and maintainability.
signals:
  - Separates feature permissions from data permissions and models roles, resources, and scope
  - Explains approval, second confirmation, and audit for high-risk operations
  - Explains how permissions are requested, revoked, and periodically reviewed so they do not only grow
  - Considers the performance and consistency of permission checks and how over-reach is investigated
primaryCapability: professional.system-design
topics: [system-design, security, backend]
roles: [engineering, backend, frontend, product]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - After someone changes roles, how do you make sure old permissions are withdrawn?
  - There are thousands of overlapping roles. How do you govern them?
source:
  - attribution: original
    label: "The author's system design question, the permission system of an operations back office"
---
