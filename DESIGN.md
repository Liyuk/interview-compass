# Design direction

The user selected a practical, information-first question detail page, using the supplied screenshot as the visual reference. The chosen visual direction is **The Question Field Guide**, with the reference's numbered reading path as its main compositional device.

## Product identity

Interview Compass is a bilingual question library. A question page helps readers understand what a prompt examines, which related topics it touches, and where they can continue learning. The interface presents questions and their intent; it does not provide sample answers or score people.

## Visual rules

- Keep a quiet documentation surface: warm white background, near-black text, thin neutral dividers, and generous readable spacing.
- Use muted red for the current location and the numbered question-reading path; use blue for navigational links and topic links. Pair color with labels and shape so state never depends on color alone.
- Give the question title the strongest typographic emphasis. Use a restrained Chinese serif display face for the question and a highly legible sans-serif for navigation, labels, and supporting text.
- Make search prominent and bilingual. Keep the language switch visible in the global header.
- Keep navigation and controls consistent with Starlight and Radix Themes. Prefer flat, low-radius surfaces and clear focus states over decorative cards.
- Explain the question through three linked parts: **考察意图** (why ask it), **相关主题** (what concepts it touches), and **来源与延伸** (what context or reading helps interpret it). The numbered line is a quick overview; the sections below are the detailed explanation, not repeated content.
- Use topic counts only when computed from published content. Do not invent sample counts, source attributions, or other library facts in comps or implementation.
- Chinese is the default locale at the root route; English is available under `/en/`. Keep the current-page language switch visible and pair translated pages by stable IDs.

## Avoid

- Answers, answer examples, hiring scores, or implied pass/fail judgments.
- Decorative diagrams that suggest a required sequence between independent topics and roles.
- Fake metrics, unverifiable sources, promotional slogans, or generic product dashboard styling.
- Small, low-contrast annotations that make the page dense without making relationships clearer.
