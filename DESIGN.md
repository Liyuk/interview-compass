# Design direction

The user selected a practical, information-first question detail page, using the supplied screenshot as the visual reference. The chosen visual direction is **The Question Field Guide**, with the reference's numbered reading path as its main compositional device.

## Product identity

Interview Compass is a bilingual, question-first heuristic library. A question page helps readers understand the problem, intent, context, comparison dimensions, evidence, and where to continue. The interface presents shared evidence references and labels individually reviewed analyses explicitly; it does not provide sample answers, automatically score people, or make hiring decisions.

## Visual rules

- Keep a quiet documentation surface: warm white background, near-black text, thin neutral dividers, and generous readable spacing.
- Use muted red for the current location and the numbered question-reading path; use blue for navigational links and topic links. Pair color with labels and shape so state never depends on color alone.
- Give the question title the strongest typographic emphasis. Use a restrained Chinese serif display face for the question and a highly legible sans-serif for navigation, labels, and supporting text.
- Make search prominent and bilingual. Keep the language switch visible in the global header.
- Use one functional icon system: Lucide via @lucide/astro, wrapped by Icon.astro, on a 24 × 24 source grid with 1.75px rounded strokes and currentColor. Use 16/18/20/24px display sizes. Keep the authored compass brand separate: logo.svg for lockups and a simplified favicon.svg for tiny tabs. Use shared icons for search, navigation chevrons, select indicators, and directional actions; text arrows may describe actual progression. Native select controls are 40px high with 12px text inset, 16px chevrons inset 12px from the right, and 40px reserved text padding. Preserve native keyboard interaction and forced-color rendering.
- Keep navigation and controls consistent with Starlight and Radix Themes. Prefer flat, low-radius surfaces and clear focus states over decorative cards.
- Prioritize question relevance and task continuation: role and responsibility context first, then objective problem and intent, observations, context probes, comparisons and trade-offs, evidence anchors, and related routes.
- Distinguish “逐题分析 · 已复核” from “共用阅读框架 · 逐题分析待校准”. Never style shared prompts to look like expert findings about a particular question.
- Keep the main user journey task-first while preserving direct search, topic, role, capability, and stage entry points. A question detail should make it easy to return to the previous filtered set, practice optionally, or continue through a relevant view.
- Use topic counts only when computed from published content. Do not invent sample counts, source attributions, or other library facts in comps or implementation.
- Chinese is the default locale at the root route; English is available under `/en/`. Keep the current-page language switch visible and pair translated pages by stable IDs.

## Avoid

- Answers, answer examples, automated scores, aggregate candidate scores, or hiring recommendations. Four evidence levels may be shown as references, not verdicts.
- Decorative diagrams that suggest a required sequence between independent topics and roles.
- Fake metrics, unverifiable sources, promotional slogans, or generic product dashboard styling.
- Small, low-contrast annotations that make the page dense without making relationships clearer.
