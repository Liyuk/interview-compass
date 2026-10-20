---
questionId: a-ai-engineering-eval-disagreement
kind: question
status: published
locale: en
title: Two reviewers often disagree about the same set of AI outputs. How would you tell whether the issue is annotator disagreement, an unclear evaluation standard, or model instability?
question: Two reviewers often disagree about the same set of AI outputs. How would you tell whether the issue is annotator disagreement, an unclear evaluation standard, or model instability?
intent: See whether you can turn subjective quality judgments into reviewable criteria and locate the source of disagreement.
signals:
  - Defines task goals and acceptable errors before voting
  - Checks slices, annotation guidance, and reviewer agreement
  - Separates model variability from evaluation differences
  - Proposes adjudication, relabeling, or sampling to test the cause
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
roles:
  - ai-engineer
  - data
  - engineering
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
followUps:
  - What would you do if disagreement clustered in a few high-risk cases?
  - If reviewers still disagree, what evidence would tell you to refine the criteria or add samples?
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
perspective: candidate
perspectiveReview: reviewed
qualityTier: core
weakAnswer: Uses majority vote to judge model outputs without a shared task standard or investigating why reviewers disagree.
anchors:
  notPassing: Resolves disagreement by majority vote without a shared task standard.
  passing: Defines the goal, error types, and acceptable quality.
  excellent: Checks sample slices, reviewer agreement, and model variance on fixed inputs to separate causes.
  exceptional: Sets relabeling or adjudication rules for high-risk disagreements and tests whether conclusions remain stable.
---
