# Current visual direction

Interview Compass is a bilingual interview question library with a connected reading experience. Use [the current architecture map](../docs/architecture/current-state.md) for the source of truth on routes, shared shell, and module ownership.

## Current interface contract

- Keep the shared Astro shell consistent across all routes: three global navigation links, target status/selector, language switch, and search entry.
- Inside a board, use the shared left navigation tree for section context and the right outline for article headings. The homepage keeps its task-oriented entry frame while retaining the same shell.
- Questions remain the primary content unit. Show the question, its purpose, evidence context, and related material with clear hierarchy; do not imply model answers or automatic evaluation.
- Keep bilingual labels and routes paired. Use real links for navigation and stable URL state for filters.
- Continue the existing visual language: warm light surfaces, dark readable text, restrained blue links, red current-location markers, thin dividers, and the established serif display treatment for article titles.
- Prefer flat, readable layouts over promotional hero patterns, repeated rounded-card grids, gradients, or ornamental metaphor. Keep focus states visible and preserve native keyboard behavior.
- On small screens, keep the same global shell and expose board navigation through its labelled disclosure; the article outline remains a separate reading aid.

## Historical design explorations

The accession-register, field-guide, and reroll concepts below were exploratory directions, not implementation requirements. Their prompts and generated mockups are archived in [`mocks/`](./mocks/README.md). The user-supplied reference image remains in that folder as reference material.
