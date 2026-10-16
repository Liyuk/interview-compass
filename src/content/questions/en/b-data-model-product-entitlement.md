---
questionId: b-data-model-product-entitlement
kind: question
status: published
locale: en
title: How do you model access and billing when contracts, accounts, and users differ?
question: >-
  A company buys 100 seats used across subsidiaries. Headquarters signs the contract, but some subsidiaries
  want separate invoices and permission administrators. How would you distinguish customer, contract,
  organization, account, member, and seat so access and billing stay consistent?
intent: >-
  Assess whether you define entities and relations from business responsibilities and rules rather than
  conflating an org chart, login account, and billing party.
signals:
  - >-
    Defines separate meanings for customer, contracting entity, organization node, membership, and seat
    assignment
  - States access and billing rules for mergers, cross-org members, and seat transfers
  - >-
    Validates the relationship model with representative contracts and org structures and provides audit and
    correction paths
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - commercialization
  - security
roles:
  - product
  - engineering
  - data
  - operations
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
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
followUps:
  - >-
    If a member belongs to two subsidiaries but occupies only one seat, how would you represent assignment and
    usage?
  - If a seat moves between subsidiaries mid-contract, what changes in billing and audit history?
relatedQuestions: []
---
