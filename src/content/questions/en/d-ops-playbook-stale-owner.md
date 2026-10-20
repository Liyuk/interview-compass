---
questionId: d-ops-playbook-stale-owner
kind: question
status: published
locale: en
title: Who validates an operations playbook after its owner leaves?
question: A critical operations playbook is still used by multiple regions, but its author has left and recent system and policy changes were never incorporated. How would you identify which steps remain safe, establish temporary controls and ownership, and verify that frontline teams can use the new version correctly?
intent: Assess whether you can turn stale-document risk into controlled operational recovery, clear ownership, and verification in actual use.
signals:
  - Identifies high-risk actions, outdated sections, and dependent regions
  - Limits risky steps or provides a temporary verification path until checked, then names an owner
  - Uses frontline drills, error rates, or escalation records to verify the new version
primaryCapability: delivery.operational-execution
topics:
  - operations
  - execution
  - risk-management
  - reliability
  - management
roles:
  - operations
  - engineering
  - pmo
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
  - senior-manager
scenarios:
  - interview
  - hiring
  - operations-review
formats:
  - case
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
followUps:
  - If local practices have diverged, how would you separate shared controls from legitimate regional differences?
  - If no one reads the updated playbook, how would you change publication or training?
  - 【How do you restore runbook reliability when owners and commands are obsolete?】During an incident, an operator follows a runbook whose command depends on a retired service, and the named owner has left. How would you repair the runbook and keep it valid?
  - Which runbooks should trigger review automatically after each release?
  - How do you preserve accuracy without creating an approval bottleneck?
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
