# Interview Compass question library: information architecture design

Date: 2026-10-14

Status: Proposed design for review; based on the user-approved eight-domain MECE model and the request to make the site easier to navigate and substantially expand its question library.

## Problem and outcome

The project already documents an eight-domain capability model, but the site does not expose it. Its current topic list mixes technical knowledge, work practices, business subjects, and people skills at the same level. The home route reads like a question index, question detail pages contain a one-off breadcrumb rule for resource-allocation questions, and the library has only four bilingual question pairs.

The site should help readers move from a broad preparation need to a useful question through a consistent path. Search remains the fastest entry. Readers who do not know what to search can explore by capability, role, or use case. Each question explains why it is asked and what capability or evidence it may surface; the library does not provide model answers or score people.

The work uses the existing MECE research as its taxonomy source of truth. The blog remains an attributed source for original ideas and references.

## Approach considered

1. **Keep a flat topic index and add more cards.** This is quick, but it preserves the current category confusion and does not provide a rule for breadcrumbs.
2. **Use a capability hierarchy as the canonical classification, then expose roles, subjects, and scenarios as independent views.** This matches the existing MECE model, supports question reuse, and lets navigation and breadcrumbs derive from one taxonomy. **Selected.**
3. **Give each role or subject its own question tree.** This makes focused entry pages easy to create, but duplicates questions and creates competing paths and breadcrumbs as the library grows.

## Information architecture

### Canonical capability hierarchy

Every question has exactly one primary leaf capability within one of the eight domains. The domain and leaf define the canonical classification and detail-page breadcrumb. Capability labels, descriptions, ordering, and route segments are stored together in a bilingual taxonomy definition.

| Domain | Name | Representative leaves |
| --- | --- | --- |
| A | Professional problem solving and implementation | Computer-science foundations, coding and abstraction, debugging, system design, engineering systems, AI engineering |
| B | Business understanding and domain modeling | Business context, product/project model, commercial rules, data model, feature model, model evolution |
| C | Value judgment and direction setting | Product judgment, prioritization, planning, metrics and causal reasoning, investment choices |
| D | Delivery and ongoing operations | Problem decomposition, capacity and dependencies, project/PMO practice, operational execution, reliability and incidents |
| E | Collaboration, communication, and influence | Communication, conflict navigation, negotiation, stakeholder influence, feedback |
| F | People and organization building | Frontline management, manager-of-managers, team design, hiring, growth, delegation and succession |
| G | Learning, adaptation, and sustained growth | Learning transfer, structured reflection, resilience and recovery, self-direction |
| H | Professional responsibility and work style | Ownership, integrity, attribution, boundaries, work expectations and mutual culture fit |

Product and end-to-end thinking remain a first-class curated path across B, C, and D. Interviewer preparation, candidate preparation, campus hiring, operations interviews, product interviews, promotion, self-reflection, frontline management, and manager-of-managers are curated views, not extra capability domains.

### Independent question facets

Question records may link to multiple values in these independent dimensions:

- **Knowledge or method topic:** data structures, operating systems, databases, frontend, AI engineering, product discovery, growth experiments, and similar subjects.
- **Role:** engineering specializations, data, product, operations, marketing/growth, design, management, and PMO.
- **Responsibility scope:** individual work, a project or team, multiple teams, and organization-level work.
- **Career track:** individual contributor, team manager, senior manager, or executive where relevant.
- **Use case:** candidate preparation, interviewer design, promotion, self-reflection, or operations review.
- **Question format:** knowledge explanation, coding, debugging, system design, behavioral evidence, case analysis, planning, or artifact review.

These values support filtering and curated collections. They never create another copy of a question. Empty or unsupported values are not displayed as navigation destinations.

## Routes and reader flow

The bilingual route structure is rooted at the current Pages base `/interview-compass/`:

| Route | Purpose |
| --- | --- |
| `/` and `/en/` | True home page: direct search, clear ways to explore, capability map, role and scenario entry points, and a small curated question selection |
| `/questions/` and `/en/questions/` | Searchable question library with shareable filters for capability, topic, role, scope, use case, and format |
| `/capabilities/<domain>/` | A capability-domain overview and its leaf capabilities |
| `/capabilities/<domain>/<leaf>/` | Questions whose primary capability is that leaf |
| `/roles/<role>/` | Role-specific preparation path assembled from the same question records |
| `/scenarios/<scenario>/` | Candidate, interviewer, promotion, self-reflection, and operations-review paths |
| `/topics/<topic>/` | Knowledge or method subject index, separate from capability classification |
| `/questions/<questionId>/` | Stable question detail route; the English counterpart is under `/en/` |

The primary navigation labels and order are: **问题库 / Questions**, **能力地图 / Capability map**, **岗位 / Roles**, and **面试与晋升 / Interview and promotion**. Search is available on every route. Guides remain secondary navigation.

The home page first serves readers who already know what they need with search. It then presents three plain-language entry choices: explore a capability, prepare for a role, or work through a scenario. It groups the eight domains into three explanatory bands—professional and business judgment (A–C), delivery and organization (D–F), and personal growth and work style (G–H)—while showing each domain as a distinct destination. Product/end-to-end thinking is visibly presented as a cross-domain path.

The question library and facet pages explain what each filter means. Counts reflect unique question IDs in the selected language, not duplicated cross-listed records. Applying multiple filters updates a shareable query string; clearing filters returns to the unfiltered library.

## Breadcrumbs and cross-navigation

Breadcrumbs come from a shared route model rather than page-specific conditionals. Each page declares its route type and stable identifiers; the route model resolves localized labels and base-aware links.

For a question detail page, the canonical trail is:

`Home → Question library → Capability domain → Leaf capability → Question`

Role, topic, scope, scenario, and format links appear in a separate metadata area. They are not inserted into the canonical breadcrumb because a question can have many valid facet paths and direct search has no reliable navigation history. A question reached from a role page still has the same canonical trail, while the role remains linked as context on the page.

Facet pages use their natural hierarchy, for example `Home → Roles → Product` or `Home → Capability map → Delivery → Capacity planning`. The same route definition supplies the page title, parent link, navigation active state, and breadcrumb, preventing these surfaces from drifting apart.

## Question record and editorial rules

The question record remains the single source for every view and language. The schema will require:

- stable `questionId`, locale, publication status, title, and question wording;
- exactly one `primaryCapability` leaf;
- `intent`, explaining what the prompt is meant to examine;
- `signals`, describing the relevant abilities or evidence a reader/interviewer should notice;
- controlled facet IDs for topics, roles, responsibility scopes, career tracks, use cases, and question formats;
- optional follow-up prompts, background links, question relationships, and source records.

Question records do not store answers, sample answers, numeric candidate scores, or hiring recommendations. Each detail page derives a four-level evidence guide from the question's intent and signals: 1 not passing, 2 passing, 3 excellent, and 4 exceptional. This guide is heuristic, calibrated to the role and level, and never auto-scores a person. Chinese and English records for a published ID must be paired. Question relationships must resolve in the same locale. The content checker rejects unknown taxonomy IDs, missing translations, duplicate locale records, broken references, and missing required intent/signals.

Question titles and prompts are editorially distinct from source article prose. Each derived question links to the blog article or research source that motivated it, with a provenance label such as `adapted`, `derived`, or `inspired`. Similar prompts are consolidated, while separate questions are retained when they test different primary evidence.

## Source scope and question production

The first content expansion uses the 35 locally available blog sources already inventoried in `docs/planning/2026-10-14-blog-source-catalog.md`, plus a focused review of additional blog material found in the broader local scan. The blog repository is read-only during this work. The resulting questions are authored as standalone question cards with links to their source articles.

Existing GitHub research and locally archived public projects inform coverage, structure, and question intent. External question wording or bulk question sets are reused only when the specific source license permits that use. Otherwise the project writes original prompts from the researched topic and cites the source as inspiration. The archived 108-question marketing playbook remains a reference archive and is not copied wholesale into the published site.

Question production is coverage-driven rather than tied to an arbitrary quota. The release checklist records, for each source, whether it was reviewed, which questions were derived, and why it produced none when applicable. It reports unique published questions by capability domain, role, use case, format, and locale. Every published question has a bilingual pair, a distinct intent and signal description, and at least one credible source or an explicit `original` provenance marker.

## Implementation boundaries

- Keep Astro, Starlight for editorial guide pages, Pagefind, and the current bilingual static deployment model.
- Use a single taxonomy module for bilingual labels, hierarchy, ordering, route segments, and descriptions; avoid separate handwritten route lists.
- Use reusable Astro components for the home, capability, role, scenario, topic, question-list, and question-detail views.
- Keep search and filter behavior as static/client-side enhancements under the existing Pages base; no server or account system is introduced.
- Preserve attribution for blog-derived ideas and link to the original public source where appropriate.
- The current default branch workflow remains the only automatic Pages deployment trigger; this work is reviewed and verified before any later release action.

## Acceptance criteria

1. The home page reads as an actual starting point and exposes search, capability, role, scenario, and the product/end-to-end path in the order described above.
2. Readers can navigate from the home page to all eight capability domains, their published leaf capabilities, roles, scenarios, and topics; every displayed count equals the number of unique matching question IDs.
3. Question records have one canonical primary capability and validated independent facets; bilingual pairing and all references pass build-time validation.
4. All breadcrumbs are generated by the route model, localized, base-aware, keyboard-accessible, and consistent with page hierarchy. No topic-specific breadcrumb branch remains.
5. Question detail pages explain intent and observable signals, link to their source or identify original provenance, and provide related facet paths without duplicating question content.
6. The reviewed blog-source set and research-derived coverage are represented in a source ledger, with transparent reviewed/used/not-used status and reasons.
7. The question library grows beyond the current four bilingual pairs with coverage across technical foundations and role skills, AI and engineering systems, domain and product thinking, operations, delivery and planning, collaboration, people management, growth, and professional responsibility.
8. English and Chinese provide equivalent routes and navigation labels for published records; Pagefind searches only the active locale.
9. Unit and content tests cover taxonomy validation, facet counts, canonical breadcrumbs, bilingual paths, filtering, and duplicate prevention. Browser tests cover the home flow, at least one path through each browse dimension, question detail, search, keyboard use, mobile layout, and `/interview-compass/` deep links.
10. The old project worktree and blog worktree remain unchanged; this project is not deployed to production as part of the implementation review.

## Decisions still governed by existing project policy

The eight MECE domains, no-answer editorial boundary, bilingual launch, and static GitHub Pages architecture come from the existing approved project decisions. This design makes those decisions visible in the experience and expands the content contract; it does not introduce a new primary audience or change repository identity.
