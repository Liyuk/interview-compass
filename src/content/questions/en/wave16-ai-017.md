---
questionId: wave16-ai-017
kind: question
status: published
locale: en
title: How do you detect behavior drift after a provider changes model versions?
question: A hosted model upgrades without notice. Standard health checks pass, but classification boundaries and output length shift. How would you build safeguards?
intent: Assesses external-model dependency governance, behavioral baselines, and emergency controls.
signals:
  - Maintain representative probes and behavior baselines.
  - Record provider version, request parameters, and output characteristics.
  - Define degradation, version pinning, or human handoff on anomalies.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
roles:
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
  - promotion
formats:
  - case
followUps:
  - What if the provider exposes no version identifier?
  - How do you distinguish provider drift from natural input shifts?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
