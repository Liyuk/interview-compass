# AI-era Capability Model Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Build a bilingual capability-model module that combines a reviewed A–H capability map with six role-stage profiles, four dimensions, AI-era expectations, and a careful China/US comparison.

**Architecture:** Keep the current question taxonomy as a reusable inventory, adding only capability leaves that the coverage audit cannot place in existing leaves. Store stage profiles and mapping evidence in structured bilingual content, then expose overview, stage, dimension, and mapping routes through the existing route/layout conventions. Treat the IC and management profiles as branches, not a required single promotion ladder.

**Tech Stack:** Astro 7, TypeScript, existing bilingual route helpers, Astro components, JSON/TypeScript content, current global CSS.

**Spec:** `docs/superpowers/specs/2026-10-15-ai-era-capability-model-design.md`

## Global Constraints

- “The six displayed stage names are exactly: 初级工程师, 中级工程师, 高级工程师, 资深工程师, 工程管理者, 管理管理者. Do not display ByteDance level codes or numbers.”
- “AI capability is a cross-cutting foundation, not a fifth dimension or a list of tools.”
- “Each stage profile contains three to five standards in each of the four dimensions.”
- “The first four stage profiles describe an individual-contributor path. Engineering management is a distinct people-leadership path, not a required promotion after senior IC work.”
- “Treat the Chinese stage framework and US company ladders as separate systems.”
- “Standards are developmental guidance, not a scorecard.”
- “Keep the existing Astro, static bilingual Pages, and design-system conventions.”
- “No authentication, server-side scoring, numeric rating, or generated personal assessment is in scope.”

## Review Focus

- A stage profile must not imply that every A–H leaf is required at every level; only referenced capabilities appear in its standards.
- The IC profile and management branch must be navigable without suggesting that management is the default next step.
- Business standards must describe measurable or validated user/business outcomes, not activity volume alone.
- “Human competitive advantage” must describe observable learning, relationship, critical-thinking, and judgment evidence, not subjective potential ratings.
- China/US examples must be attributable to public primary sources and presented as responsibility-pattern comparisons, not level equivalencies.

---

## File Map

| File | Responsibility |
| --- | --- |
| `src/lib/taxonomy.ts` | Existing A–H domains and bilingual leaves; add only approved gap leaves. |
| `src/content/capability-model/zh-CN.json` | Chinese stage names, dimensions, standards, evidence examples, and capability references. |
| `src/content/capability-model/en.json` | English-authored counterpart with equivalent concepts and locale-appropriate wording. |
| `src/content/capability-model/mapping.json` | Bilingual mapping explanations, sourced company examples, observed scope patterns, and caveats. |
| `src/lib/capability-model.ts` | Shared types, data loading, localized lookup, and content-shape validation. |
| `src/lib/routes.ts` | Route types, localized paths/titles, breadcrumbs, and active navigation for module pages. |
| `src/layouts/SiteLayout.astro` | Add the module to primary navigation in both locales. |
| `src/pages/capability-model/**` and `src/pages/en/capability-model/**` | Static route entry points for overview, stage, dimension, and mapping pages. |
| `src/views/CapabilityModel*.astro` | Reusable overview, stage profile, dimension comparison, and mapping views. |
| `src/styles/global.css` | Responsive stage matrix, branch/track presentation, standards cards, and mapping layout. |
| `docs/research/2026-10-15-cn-us-internet-company-capability-models.md` | Primary-source research and source attribution used by mapping content. |

## Data Interfaces

`src/lib/capability-model.ts` exports:

```ts
export type CapabilityDimensionId =
  | 'business-results'
  | 'domain-expertise'
  | 'team-influence'
  | 'human-competitive-advantage';

export type StageId =
  | 'junior-engineer'
  | 'mid-level-engineer'
  | 'senior-engineer'
  | 'staff-engineer'
  | 'engineering-manager'
  | 'manager-of-managers';

export type CapabilityEmphasis = 'foundational' | 'differentiating' | 'contextual';

export interface CapabilityReference {
  id: string; // Existing taxonomy key, e.g. "professional.ai-engineering".
  emphasis: CapabilityEmphasis;
}

export interface CapabilityStandard {
  id: string;
  text: string; // Localized by the JSON file being loaded.
  evidence?: string;
  capabilities: CapabilityReference[];
}

export interface StageProfile {
  id: StageId;
  track: 'ic' | 'engineering-management' | 'manager-of-managers';
  nextStageIds: StageId[];
  name: string; // Localized by the JSON file being loaded.
  summary: string;
  dimensions: Record<CapabilityDimensionId, CapabilityStandard[]>;
}

export function getStageProfile(id: StageId, locale: Locale): StageProfile;
export function getDimensionProgression(id: CapabilityDimensionId, locale: Locale): DimensionProgression;
export function validateCapabilityModel(): string[];
```

`DimensionProgression` is `{ id: CapabilityDimensionId; name: string; stages: Array<{ stage: StageProfile; standards: CapabilityStandard[] }> }`. The two locale JSON files use the same IDs, tracks, edges, dimension IDs, standards IDs, and capability references, while `name`, `summary`, `text`, and `evidence` are locale-specific strings. The validator compares both locale structures and requires all user-facing strings in both.

Stable capability refs use `<domain-id>.<leaf-id>` from `taxonomy.ts`. `foundational`, `differentiating`, and `contextual` express qualitative emphasis; an unreferenced leaf is not required in that stage. The `nextStageIds` graph keeps the IC path `junior → mid → senior → staff` and shows `engineering-manager` as a separate branch from senior contribution, followed by `manager-of-managers`.

## Tasks

### Task 1: Audit and finalize capability inventory and bilingual model data

**Files:**
- Modify: `src/lib/taxonomy.ts`
- Create: `src/content/capability-model/zh-CN.json`
- Create: `src/content/capability-model/en.json`
- Create: `src/lib/capability-model.ts`

**Interfaces:**
- Consumes: `Locale`, `Bilingual`, `domains`, `capabilityIds`, and `pick` from `src/lib/taxonomy.ts`.
- Produces: `StageId`, `CapabilityDimensionId`, `CapabilityStandard`, `StageProfile`, `getStageProfile`, `getDimensionProgression`, and `validateCapabilityModel` as defined above.

- [x] Review every existing A–H leaf against the report's candidate gaps: user research/experience design, market and commercial judgment, quality/safety/security, AI evaluation/governance, and outcome measurement/experimentation. Add leaves under an existing domain when a distinct observable skill is missing; do not create a new top-level domain unless an existing boundary cannot contain it. Keep `business-results` expectations anchored in outcomes and validated impact.
- [x] Define bilingual stage/dimension data with all six stable IDs and exact Chinese labels. Write three to five standards for each of 24 stage-dimension combinations; each standard must include one or more valid A–H capability references and observable action/scope/outcome language.
- [x] Mark emphasis only for referenced capabilities using `foundational`, `differentiating`, or `contextual`. Author AI practice as evidence across relevant standards, scaling from individual framing and verification to team workflows, evaluation, governance, and accountability.
- [x] Encode the IC sequence and optional management branch with `track` and `nextStageIds`; ensure manager profiles do not require IC technical execution standards that are irrelevant to their role.
- [x] Implement `validateCapabilityModel()` to report invalid capability references, missing locale strings, duplicate IDs, invalid stage edges, and any stage dimension with fewer than three or more than five standards. Keep source content in JSON and validation logic in the library module.
- [x] Review the Chinese and English content side by side for conceptual parity, natural career language, and absence of internal ByteDance level codes.

### Task 2: Add localized module routes and primary navigation

**Files:**
- Modify: `src/lib/routes.ts`
- Modify: `src/layouts/SiteLayout.astro`
- Create: `src/pages/capability-model/index.astro`
- Create: `src/pages/en/capability-model/index.astro`
- Create: `src/pages/capability-model/stages/[stage].astro`
- Create: `src/pages/en/capability-model/stages/[stage].astro`
- Create: `src/pages/capability-model/dimensions/[dimension].astro`
- Create: `src/pages/en/capability-model/dimensions/[dimension].astro`
- Create: `src/pages/capability-model/mapping.astro`
- Create: `src/pages/en/capability-model/mapping.astro`

**Interfaces:**
- Consumes: `StageId`, `CapabilityDimensionId`, and model lookups from Task 1.
- Produces: RouteRefs for `capabilityModel`, `capabilityModelStage`, `capabilityModelDimension`, and `capabilityModelMapping`; localized titles, paths, breadcrumbs, active nav key, and static path generation for stage/dimension pages.

- [x] Extend `RouteRef`, `NavKey`, `pathFor`, `titleFor`, `parentOf`, and `activeNavFor` for overview, stage, dimension, and mapping routes. Preserve `BASE_URL` handling and locale prefixes.
- [x] Add a single bilingual primary-nav entry labeled “能力模型” / “Capability model”; model pages share its active state.
- [x] Create static route files that enumerate the four dimensions and six stage profiles using the data exported by Task 1; use stable IDs and do not hard-code a second list of stage names in page templates.
- [x] Ensure locale switching keeps the same stable stage/dimension/mapping route in the other locale.

### Task 3: Build overview, stage profile, and dimension comparison views

**Files:**
- Create: `src/views/CapabilityModelOverviewView.astro`
- Create: `src/views/CapabilityModelStageView.astro`
- Create: `src/views/CapabilityModelDimensionView.astro`
- Modify: localized route entry points from Task 2
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: Localized model data and `pathFor()` from Tasks 1–2.
- Produces: Overview entry points, one complete four-dimension stage profile, and one stage-by-stage dimension progression; all pages cross-link among stages, dimensions, the map, and mapping guide.

- [x] Build the overview around the premise that AI expands execution capacity while judgment and result ownership remain explicit. Show the IC path and management branch visually and textually.
- [x] Render each stage profile with four dimension sections and three to five standards each; show concise evidence examples and clickable A–H references without turning emphasis into a score.
- [x] Render each dimension progression across all applicable profiles. Make changing scope, autonomy, outcome ownership, time horizon, and influence visible; label management profiles as a different path where comparisons are not linear.
- [x] Add reciprocal links between stage and dimension pages plus the mapping page. Use existing breadcrumbs and page layout conventions.
- [x] Style responsive cards/tables so the six-stage progression remains readable at narrow widths, keyboard-accessible, and visually consistent with the existing site.

### Task 4: Publish the sourced China/US comparison

**Files:**
- Create: `src/content/capability-model/mapping.json`
- Create: `src/views/CapabilityModelMappingView.astro`
- Modify: `src/lib/capability-model.ts`
- Modify: mapping route entry points from Task 2
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: Bilingual mapping data and public-source report from `docs/research/2026-10-15-cn-us-internet-company-capability-models.md`.
- Produces: A localized comparison view that distinguishes company-specific observations, public examples, and the site's own analytical mapping.

- [x] Add sourced examples from the historical Alibaba frontend model and public company frameworks (Dropbox and GitLab; use Monzo only as a clearly labeled non-US English-language reference if retained). For every source, state company, function, source date/version where available, URL, and the comparison dimension it supports.
- [x] Compare responsibility patterns—scope, autonomy, business outcomes, influence, expertise, and IC/management track—rather than claim equivalent title or level numbers. Use ranges or explicitly “not directly comparable” where a one-to-one mapping would be misleading.
- [x] Label the Alibaba image as user-provided historical material, show only its stated P5–P9 labels if the page needs to discuss the artifact, and do not use those labels as the site's stages.
- [x] Keep the China/US conclusion bounded to the published sample; state that observed disclosure differences do not prove national differences in capability philosophy.

### Task 5: Integrate the existing capability map and content navigation

**Files:**
- Modify: `src/views/CapabilitiesView.astro`
- Modify: `src/views/DomainView.astro`
- Modify: `src/views/LeafView.astro`
- Modify: `src/lib/routes.ts`

**Interfaces:**
- Consumes: Final A–H taxonomy leaf labels and capability references from Task 1.
- Produces: Reciprocal navigation from capability map/domain/leaf pages into the capability-model overview and relevant stage/dimension profiles without replacing existing question-library routes.

- [x] Add a clear “如何随阶段发展” / “How expectations change by stage” entry point from the capability map.
- [x] On relevant domain/leaf pages, link to associated model dimensions or standards using the capability-reference crosswalk; avoid duplicating stage content on question pages.
- [x] Keep existing capability IDs stable unless a leaf addition is required; if renamed, preserve a route-compatible mapping and update all content references in the same task.

### Task 6: Editorial and release review

**Files:**
- Review: `docs/superpowers/specs/2026-10-15-ai-era-capability-model-design.md`
- Review: all model content, mapping sources, routes, and views created above

- [x] Confirm all six Chinese stage labels, four dimensions, and 3–5 standards per stage-dimension are present in both locales.
- [x] Confirm business requirements discuss outcomes, measurement, and attribution limits rather than output volume alone.
- [x] Confirm AI appears as applied work, verification, evaluation, governance, and accountability at appropriate scopes rather than only as tool familiarity.
- [x] Confirm no stage is expected to demonstrate every A–H capability; all references resolve to valid leaves and every new leaf has an observable definition.
- [x] Confirm IC/management branching, mapping caveats, public-source citations, locale links, breadcrumbs, and configured Pages base are consistent with the spec.

## Suggested Commit Boundaries

1. `feat: define bilingual capability model data`
2. `feat: add capability model routes and overview`
3. `feat: add stage and dimension capability views`
4. `feat: publish sourced china-us level comparison`
5. `feat: link capability map to stage expectations`

