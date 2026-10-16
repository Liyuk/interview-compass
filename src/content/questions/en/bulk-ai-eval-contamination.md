---
questionId: bulk-ai-eval-contamination
kind: question
status: published
locale: en
title: Evaluation-set contamination
question: >-
  A team discovers that a model may have seen some internal evaluation prompts in public corpora or
  fine-tuning data. How would you determine what offline scores still mean and rebuild a trustworthy
  evaluation?
intent: Explore data-contamination risk, evaluation isolation, and limits on conclusions.
signals:
  - Distinguishes memorization, template similarity, and genuine capability change
  - Traces evaluation data sources, access, and training pipelines
  - Proposes tiered confidentiality, rolling holdouts, or new-task validation
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - security
roles:
  - ai-engineer
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：评测集与数据质量
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
relatedQuestions: []
---
