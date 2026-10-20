# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- The published bilingual bank grew from 992 questions to 1,067 (#7) and then to 1,334 unique pairs (#8). The current README states that all 1,334 questions are retained.
- Curated question sets and a questioning framework for interviewers and candidates (#8, #9).
- The Interview Compass Coach skill at `skills/interview-compass-coach/`, which looks up published questions and follows the site's evidence and privacy limits (#8).
- Engineering role–stage personalization: six engineering directions and 36 public role–stage combinations. First-time visitors choose a specialization and responsibility stage; the library, counts, previews, and search then filter to that reviewed combination. A shared link can temporarily override the saved choice without replacing it. One question may apply to several stages; the stage changes expected responsibility and evidence, not difficulty or an automatic score (#10).
- A preparation guide with new Chinese and English pages, and three primary destinations: Home, Preparation guide, and Question bank. Header search covers guides, methods, and questions. Published URLs, anchors, question identities, and the public feed stay in place (#12).
- Question pages can generate a structured analysis prompt for an external AI tool. The site does not collect answers or send them. An in-site practice flow added in #8 was removed in #9.

### Changed

- Public preparation is focused on engineers and engineering managers. Product sense, operating workflows, design collaboration, and commercial reasoning remain engineering context rather than separate target careers (#10).
- Copyright attribution is Liyuk in the footer, the MIT and content-license notices, the README, and package metadata (#6).
- Catalog pages no longer embed every matching question, and the target chooser is a native dialog that loads role data on demand. A size budget runs in CI (#11).
- The handbook previously rendered with Starlight is now a native guide article (#12).

### Removed

- Redirect pages for 166 merged legacy question IDs. Those old URLs return 404 (#8).
- React, `@astrojs/react`, `@radix-ui/react-dialog`, and `@radix-ui/themes` (#11).
- `@astrojs/starlight` (#12).

### Fixed

- English navigation no longer overflows at 320px (#4).
- Handbook content no longer jumps at the tablet breakpoint, and English footer links wrap at tablet widths (#12).

## [1.0.0] - 2026-10-15

First public release of the bilingual, question-first interview library.

### Added

- 992 bilingual interview and promotion questions, organized by capabilities, roles, topics, scenarios, and formats. Each question focuses on intent, evidence, context, and trade-offs rather than prescribing a model answer.
- An editorial capability heuristic, including stage expectations, and a separate partial cross-company level-mapping reference (#1, #3).
- Clearer navigation for external job interviews, interviewer design, and internal promotion, plus promotion-question paths for individual contributors, first-line managers, and managers of managers, with a four-part evidence checklist (#2).
- Publication with GitHub Pages at <https://liyuk.github.io/interview-compass/>.
- An MIT license for the software and a separate CC BY-NC-SA 4.0 license for original content (#2).

[Unreleased]: https://github.com/Liyuk/interview-compass/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Liyuk/interview-compass/releases/tag/v1.0.0
