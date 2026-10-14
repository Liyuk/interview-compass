---
questionId: a-system-design-search-system
kind: question
status: published
locale: en
title: How would you design a search system, including how Chinese is segmented and how features are built?
question: How would you design a search system? How do indexing, retrieval, and ranking divide the work, how are Chinese segmentation and features built, and how do you judge how good the search is?
intent: See whether you can split search into indexing, retrieval, and ranking, and understand the difficulties of Chinese text handling and effect evaluation.
signals:
  - Explains the roles of the inverted index, retrieval, and ranking and the trade-offs between them
  - Explains the difficulties of Chinese segmentation, such as ambiguity and new words, and the effect on recall
  - Explains query understanding and ranking features, such as text relevance, quality, and personalization
  - Evaluates with offline and online metrics and knows the limits of each
primaryCapability: professional.system-design
topics: [system-design, ai-engineering, feature-modeling, databases]
roles: [engineering, backend, data, ai-engineer]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - A user searches a newly coined word and gets nothing. How do you notice and handle it?
  - Index updates must take effect within seconds. How do you design for that?
source:
  - attribution: original
    label: "The author's system design question, a search system"
---
