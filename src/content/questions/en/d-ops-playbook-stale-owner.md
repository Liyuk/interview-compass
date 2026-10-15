---
questionId: d-ops-playbook-stale-owner
kind: question
status: published
locale: en
title: Who validates an operations playbook after its owner leaves?
question: >-
  A critical operations playbook is still used by multiple regions, but its author has left and recent system
  and policy changes were never incorporated. How would you identify which steps remain safe, establish
  temporary controls and ownership, and verify that frontline teams can use the new version correctly?
intent: >-
  Assess whether you can turn stale-document risk into controlled operational recovery, clear ownership, and
  verification in actual use.
signals:
  - Identifies high-risk actions, outdated sections, and dependent regions
  - Limits risky steps or provides a temporary verification path until checked, then names an owner
  - Uses frontline drills, error rates, or escalation records to verify the new version
primaryCapability: delivery.operational-execution
topics:
  - operations
  - execution
  - risk-management
roles:
  - operations
  - engineering
  - pmo
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
followUps:
  - >-
    If local practices have diverged, how would you separate shared controls from legitimate regional
    differences?
  - If no one reads the updated playbook, how would you change publication or training?
---
