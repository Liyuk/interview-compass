---
questionId: "a-compiler-diagnostic-source-map-macro-expansion"
kind: "question"
status: "published"
locale: "en"
title: "After multiple macro and code-generation expansions, compiler errors point only to generated files, leaving users unable to find the original code. How would you design diagnostics?"
question: "After multiple macro and code-generation expansions, compiler errors point only to generated files, leaving users unable to find the original code. How would you design diagnostics?"
intent: "Assesses whether you can preserve accurate source mapping through macros and generation so errors point to editable source."
signals: ["Distinguish original, generated, and macro-expansion locations","Preserve source-map accuracy through transformations","Point to editable source with context","Provide fallback when mappings are missing or ambiguous"]
primaryCapability: "professional.computer-science"
topics: ["compiler-design","programming-languages","debugging"]
roles: ["engineering","backend"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["How would you avoid exposing sensitive generated-code paths in diagnostics?","How would you verify source maps remain accurate after optimization?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
