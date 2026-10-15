---
questionId: bulk-a-tcp-retransmission-evidence
kind: question
status: published
locale: en
title: TCP Retransmissions and Application Timeouts
question: >-
  Clients report occasional request timeouts while server processing time looks normal. How would
  you use TCP retransmissions, RTT, and connection state to locate where the delay occurs?
intent: Tests transport-layer reasoning and end-to-end diagnosis.
signals:
  - Explains how retransmissions relate to loss or delayed acknowledgments
  - Separates network time from server processing time
  - Chooses packet captures or metrics that can verify the path
primaryCapability: professional.computer-science
topics:
  - computer-networks
roles:
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
---
