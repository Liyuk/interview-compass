---
questionId: b-commercial-rules-cancellation-fee
kind: question
status: published
locale: en
title: How should a system explain refunds when cancellation policies conflict?
question: >-
  A customer cancels before service begins, but the contract, product page, and support system
  describe the cancellation fee differently. How would you determine the refund and make future
  orders follow a consistent rule?
intent: "Assess whether you can make a defensible refund decision when rules conflict: establish transaction facts and policy authority, then make comparable orders consistent and explainable."
signals: ["Reconstruct the timeline of order, cancellation, service start, and delivered work; distinguish the roles of contract, product copy, and support promises.", "Verify applicable terms, region or customer scope, effective version, and approval source; do not infer contractual rights from current system configuration.", "Separate refund entitlement, cancellation fees, incurred costs, and cases requiring human adjudication; explain calculation and audit trail.", "Close the loop on escalation, affected orders, and fixes to product copy, support scripts, and settlement rules."]
weakAnswer: "Treating system configuration or a support statement as authoritative without checking contract version, delivery facts, decision authority, or consistent auditable handling."
anchors:
  notPassing: "Notices the inconsistency but defers to support intuition or current system settings."
  passing: "Checks the critical timeline and policy version, makes a supported refund decision, and identifies escalation cases."
  excellent: "Connects term applicability, calculation, customer communication, accounting evidence, and consistency across similar orders."
  exceptional: "Also contains existing exposure, assigns legal and business decision ownership, sequences remediation, and adds sampling or monitoring for future drift."
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - risk-management
roles:
  - product
  - operations
  - engineering
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
scenarios:
  - interview
  - hiring
formats:
  - case
followUps: ["If the policy changes after an order, how do you select the applicable version and explain the basis to the customer?", "If you cannot tell whether a contract clause covers an order, what would you do first to protect both the customer and the company?"]
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
