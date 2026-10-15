# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Starlight, with bilingual Chinese-default/English routes, Pagefind search, Radix Themes as the site-wide visual system, Radix Primitives for accessible interactions, and GitHub Actions deployment to GitHub Pages.

## Users

People preparing for interviews, interviewers exploring questions, and people reflecting on promotion or growth. The site should support free exploration across roles without choosing one primary audience.

## Product Purpose

Interview Compass is a question-first, heuristic library. Visitors search for questions or browse by topic and role. Each question explains what it is intended to explore and which capabilities or evidence it may surface. Success means making a large body of useful questions easy to find and understand without requiring answer guides.

## Positioning

The core unit is a question with its purpose, organized through both shared capability frameworks and role-specific frameworks. A question can be reached through multiple independent views such as capability, role, topic, responsibility scope, and interview context.

## Operating Context

The main entry paths are direct question search and topic browsing. Role exploration is open-ended; the home page must not privilege a single role. The library includes technical, product, operations, engineering, and management contexts, including promotion and growth reflection.

## Capabilities and Constraints

- Questions are the primary content. Explain the purpose, capability, or evidence the question is meant to surface.
- Do not require answers, answer examples, scoring rubrics, or hiring recommendations.
- General frameworks and role-specific frameworks coexist; cross-link questions rather than duplicating them for each entry path.
- Include technical foundations, role skills, engineering practice, domain modeling, product and end-to-end thinking, delivery and management, operations, and professional growth.
- Use Radix Themes as the site-wide visual and component baseline, and Radix Primitives for interactions that need accessible behavior. Map Starlight surfaces into the same color, type, spacing, and control system; do not mix unrelated component styles or add decorative patterns without a product reason.
- Deployment target is GitHub Pages; the design should work as a static site unless a demonstrated requirement changes that constraint.
- External reference material is research input. Preserve attribution and license boundaries; do not publish archived source snapshots as site content.

## Brand Commitments

Use the name “Interview Compass.” The site is a practical, question-led reference rather than an answer book.

## Evidence on Hand

- Blog-source inventory in `docs/planning/2026-10-14-blog-source-catalog.md`.
- Research and MECE content architecture in `docs/planning/`.
- Public reference-project snapshots are kept outside this repository and are not part of the site build.

## Product Principles

- Make questions easy to search and explore.
- Ship Chinese and English from the first release, with a visible language switch that stays on the corresponding page when a translation exists.
- Explain what a question is meant to surface, without prescribing an answer.
- Separate shared capability frameworks from role-specific knowledge while allowing useful cross-links.
- Keep classification dimensions independent so one question can appear in several relevant views.
- Make sources and content provenance traceable.
