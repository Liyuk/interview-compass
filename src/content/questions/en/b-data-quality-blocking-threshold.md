---
questionId: "b-data-quality-blocking-threshold"
kind: "question"
status: "published"
locale: "en"
title: "A quality check occasionally produces false alarms and blocks downstream jobs; removing it once let bad data reach settlement. How would you design tiered handling?"
question: "A quality check occasionally produces false alarms and blocks downstream jobs; removing it once let bad data reach settlement. How would you design tiered handling?"
intent: "Assess whether you can set blocking, alerting, and review levels based on data use and error impact."
signals: ["Separates critical integrity constraints from soft anomalies", "Sets thresholds and response levels by downstream impact", "Defines authorization and audit trail for manual overrides", "Tunes rules using false positives, misses, and downstream loss"]
primaryCapability: "domain-modeling.data-model"
topics: ["data-modeling", "reliability", "operations"]
roles: ["data", "engineering", "operations"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["case"]
followUps: []
source: [{"attribution": "inspired", "label": "Dataskew 数据工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/dataskew-io/data-engineering-interview-questions"}]
---
