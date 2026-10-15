# AI-era capability model: information architecture and content design

Date: 2026-10-15

Status: Proposed design for user review; revised to separate the capability map from stage expectations and informed by the public-source review in [the China/US framework research](../../research/2026-10-15-cn-us-internet-company-capability-models.md).

## Problem and outcome

Interview Compass already has a bilingual MECE capability map for interview and promotion reflection. It does not yet explain how expectations change across career stages, how product and engineering work converge in an AI-enabled environment, or how readers can compare Chinese career-stage language with common US ladders without implying an exact conversion.

Add a standalone bilingual capability-model module. It should help an individual understand expectations at each stage, compare adjacent stages, and identify evidence for growth. It should also give managers and interviewers a shared, observable language for discussing scope and results. It is a reference framework, not ByteDance's internal leveling rubric or an automatic assessment tool.

The six displayed stage names are exactly: 初级工程师, 中级工程师, 高级工程师, 资深工程师, 工程管理者, 管理管理者. Do not display ByteDance level codes or numbers. Product and engineering are represented in one cross-functional model; examples can describe differences in application without creating separate ladders.

## User-approved model

The model has four dimensions. Each stage profile contains three to five observable standards per dimension, selected from and mapped back to the capability map:

1. **业务结果 / Business results** — defining valuable outcomes, connecting work to user and business results, making trade-offs, and validating impact. Business understanding is relevant insofar as it enables results.
2. **专业领域知识 / Domain expertise** — combining product judgment, domain knowledge, and technical craft to shape and deliver sound solutions. AI assistance changes the implementation workflow, but does not remove the need to understand, verify, and own the result.
3. **团队影响力 / Team influence** — the ability to align collaborators, improve team outcomes, and expand influence across teams or organizational boundaries.
4. **人的竞争力 / Human competitive advantage** — durable capabilities that help a person remain valuable as AI changes work: learning and adaptation, relationship building, critical thinking, and judgment under uncertainty. Potential is described through observable evidence such as learning transfer and response to feedback, not assigned as a subjective trait score.

AI capability is a cross-cutting foundation, not a fifth dimension or a list of tools. Across all four dimensions, standards should show how a person frames work for AI, supplies context, chooses appropriate methods, evaluates outputs, integrates AI into workflows, considers risk, and remains accountable for outcomes. The expected reach grows from personal productivity to team practice and organizational capability.

## Career-stage progression

The capability map and stage profiles are separate layers. The map is an inventory of reusable capabilities; a stage profile selects the capabilities relevant to that role and scope. A–H is not a checklist that every person must satisfy at every stage. A leaf can be foundational in one stage, differentiating in another, relevant only to a role or context, or not expected for a given profile. There is no numeric weight or universal score implied by this emphasis.

Each stage profile contains three to five standards in each of the four dimensions. A standard may reference more than one capability leaf, and a capability leaf may support standards in multiple dimensions or stages. Standards must describe the expected action, scope, decision responsibility, and outcome; they should not mechanically increase every leaf by one proficiency level.

Stage names are user-facing labels, not claims of equivalence to a specific company's title. Progression is described through increasing:

- complexity and ambiguity of the problems handled;
- autonomy and quality of decisions;
- ownership of measurable outcomes;
- breadth of domain and system context;
- influence across people, teams, and organizational boundaries.

The first four stage profiles describe an individual-contributor path. Engineering management is a distinct people-leadership path, not a required promotion after senior IC work. Management-of-managers describes leading through managers and shaping organizational outcomes. The overview must show this as a branch from senior contribution, not a single mandatory six-step ladder. Standards should make the change of work explicit rather than implying that management is simply a higher technical level.

The emphasis changes by stage and path. Early profiles tend to emphasize professional practice, learning, and reliable delivery within a clear scope. Senior IC profiles emphasize ambiguous problems, sound trade-offs, domain influence, and measurable business outcomes. Engineering managers emphasize team results, people development, and sustainable team mechanisms; managers of managers emphasize organizational outcomes, manager quality, resource allocation, and organizational design. These are model-design hypotheses to validate against sources and examples, not universal rules for every company.

For every stage and dimension, provide three to five concise standards. Each standard should name an observable action or decision, scope, and expected outcome. Avoid years of experience, personality adjectives, tool familiarity alone, and vague claims such as “has more impact.” Include practical evidence/examples where they make a standard easier to apply. Adjacent-stage comparisons should make the change in scope or quality legible.

## Information architecture considered

1. **Stage-first:** make the six stages the primary navigation, with four dimensions within each. This is easy for self-assessment but makes cross-stage change harder to compare.
2. **Dimension-first:** show each dimension as a progression across all stages. This makes growth patterns obvious but makes a complete stage profile harder to scan.
3. **Overview with both views (selected):** start with an overview of how responsibility and AI-enabled work change, then offer “by stage” and “by dimension” views, plus a separate China–US mapping view. This supports both self-assessment and comparison while keeping the mapping caveats visible.

The overview should explain that outcomes and scope grow together, and that AI is integrated into each dimension. A reader can open a stage profile with all four dimensions, compare a dimension across all six stages, or review the independent mapping view.

## Routes and navigation

Add localized route pairs under the existing Pages base:

| Route | Purpose |
| --- | --- |
| `/capability-model/` and `/en/capability-model/` | Model overview and entry points |
| `/capability-model/stages/<stage>/` and English counterpart | Complete stage profile with four dimensions |
| `/capability-model/dimensions/<dimension>/` and English counterpart | Stage-by-stage progression within one dimension |
| `/capability-model/mapping/` and English counterpart | China/US comparison and mapping method |

Use a stable route model so page titles, locale switching, breadcrumbs, and active navigation remain consistent. Add one primary navigation entry for the module in both locales. Use the existing bilingual static site conventions and preserve the configured base path.

## China and US mapping

Treat the Chinese stage framework and US company ladders as separate systems. The mapping page should:

- explain that titles and level definitions vary by company, function, and organization size;
- use responsibility evidence (scope, autonomy, outcomes, technical/domain reach, and people leadership) as the comparison basis;
- use ranges or many-to-many correspondences where evidence supports them, and explicitly leave unmatched stages where it does not;
- distinguish individual-contributor and people-management tracks;
- label examples as illustrative and cite public primary sources for any company-specific framework;
- avoid presenting titles as equivalent, salary bands as level definitions, or a single universal US ladder.

The Chinese labels remain the six user-specified terms. English labels should be natural role/stage descriptions rather than literal translations when that improves clarity. Research exact US examples and attribution during implementation planning; do not invent a universal conversion table in the design.

## Existing MECE capability inventory

The existing canonical capability taxonomy is the starting inventory, not a claim of exhaustive coverage. The model maps relevant leaf capabilities into the four dimensions; a capability may inform multiple standards, and a standard may draw on multiple leaves. Keep the taxonomy intact until a coverage audit demonstrates a specific gap. Add or refine leaves where needed; expand a top-level domain only when the gap cannot be placed clearly within the existing boundaries.

| Domain | Existing scope | Model use |
| --- | --- | --- |
| A · Professional problem solving and implementation | Computer-science foundations, coding and abstraction, debugging, system design, engineering systems, AI engineering | Domain expertise; AI workflow and verification evidence |
| B · Business understanding and domain modeling | Business context, product/project model, commercial rules, data model, feature model, model evolution | Business results and domain expertise |
| C · Value judgment and direction setting | Product judgment, prioritization, planning, metrics and causality, investment choices | Business results and human competitive advantage |
| D · Delivery and ongoing operations | Decomposition, capacity and dependencies, project/PMO practice, operational execution, reliability and incidents | Business results, domain expertise, team influence |
| E · Collaboration, communication, and influence | Communication, conflict navigation, negotiation, stakeholder influence, feedback | Team influence and human competitive advantage |
| F · People and organization building | Frontline management, manager-of-managers, team design, hiring, growth, delegation and succession | Team influence and management-stage standards |
| G · Learning, adaptation, and sustained growth | Learning transfer, structured reflection, resilience and recovery, self-direction | Human competitive advantage and AI adaptation |
| H · Professional responsibility and work style | Ownership, integrity, attribution, boundaries, expectations and fit | Human competitive advantage; accountable AI use |

The model's “professional/domain expertise” includes both technical and product practice so the framework reflects product-engineering convergence. It does not collapse business results into technical delivery: value and outcome ownership remain explicit in the business dimension.

The initial coverage audit should check whether the map gives clear homes to user research and experience/design practice; product, market, and commercial judgment; quality, safety, and security; AI use, evaluation, and governance; and outcome measurement/experimentation. Some subjects already appear in topic facets or question content without a corresponding capability leaf. Treat them as candidate additions, not automatic new domains. Preserve the map's use as a content taxonomy while allowing the four-dimensional stage model to select different subsets at different stages.

## Bilingual content and editorial rules

Chinese and English are separately authored expressions of the same conceptual framework. Do not force a literal translation when career language or mapping differs by locale. Each stage and dimension has stable IDs for linking and comparisons. Both locales must cover the same stages and dimensions, but wording and examples may differ.

Standards are developmental guidance, not a scorecard. Use evidence-focused language and clarify that context, company size, business maturity, and role specialization affect expectations. Do not infer potential from personality, communication style, or cultural conformity. Do not claim AI automatically equalizes technical ability; describe the changed work and the continuing need for expertise, verification, and accountability.

## Implementation boundaries

- Keep the existing Astro, static bilingual Pages, and design-system conventions.
- Add this as a distinct module adjacent to, and cross-linked with, the current capability map; do not replace existing question navigation.
- Reuse current MECE taxonomy IDs and link to relevant domains/leaves where useful.
- Keep stage/dimension content in a structured, bilingual source that can be validated for missing rows, duplicate IDs, and the three-to-five-standard rule.
- No authentication, server-side scoring, numeric rating, or generated personal assessment is in scope.
- Research public US level examples from primary sources before making company-specific comparisons.

## Acceptance criteria

1. The site has Chinese and English overview, stage, dimension, and mapping pages with working locale links, breadcrumbs, and base-aware routes.
2. All six user-specified stage names appear in Chinese, and ByteDance's internal level codes/numbers do not appear.
3. Every stage contains the four approved dimensions, each with three to five observable standards.
4. Standards show progression in complexity, autonomy, outcome ownership, breadth, and influence, including the change from IC to people management.
5. AI capability is described as a cross-cutting work foundation and appears in examples/standards at appropriate scopes; the model does not become a tool checklist.
6. Business is explicitly measured through outcomes and validated impact, not only contextual understanding or activity completion.
7. Product and engineering practices are unified in the main model while retaining relevant domain examples; neither is treated as a separate career ladder.
8. The China/US mapping explains non-equivalence, uses evidence-based ranges or many-to-many relationships, and attributes any company-specific examples to public primary sources.
9. A–H remains the starting capability inventory; every stage standard maps to one or more leaves, and no rule requires all leaves at all stages. Coverage gaps are documented; leaf additions are preferred over new top-level domains unless existing boundaries cannot contain the capability.
10. Editorial language treats standards as guidance, avoids subjective potential scoring, and has equivalent conceptual coverage in both locales.
11. Senior individual-contributor and management expectations are shown as distinct paths, with no implication that management is the default next step.
