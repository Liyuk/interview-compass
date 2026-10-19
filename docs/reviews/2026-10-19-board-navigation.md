# Consistent board navigation
> **Historical record:** This document records a plan or review from its date; its framework and implementation statements are not current. See the [current architecture](../architecture/current-state.md).


The user approved the in-chat direction: global navigation switches boards; the left sidebar lists the active board; the right outline lists article chapters. The homepage is the entry surface. Content lists and articles share the same sidebar presence and mobile disclosure label.

## Changes

- Registry navigation accepts an optional board root while preserving permanent ancestry and editorial siblings. Existing callers without a root retain their behavior.
- All content routes with a board, including question/search/collection indexes, render the shared sidebar. Reading tools remain attached to their existing page kinds.
- The sidebar is labelled “板块目录” / “Section navigation” on desktop and mobile. It contains one board root, with its active document hierarchy, rather than duplicating six global boards.
- Questions stay in the Questions board and expose their permanent capability category through a separate “知识归属” link and existing breadcrumbs.
- Shared grid alignment and native mobile disclosure/Escape behavior apply to both Astro and Starlight.

## Evidence

- New Registry regression observed RED with multiple global roots, then GREEN with scoped roots and unchanged question ancestry.
- New bilingual browser regression observed RED with a missing list sidebar, then GREEN: list/article board links and sidebar position agree; capability links and six global destinations remain available.
- Existing navigation tests now verify changing boards through global navigation and one matching local root across all bilingual route families. They cover 320/390/768/1024/1440px layouts, no-JS navigation, keyboard/Escape and layout stability.
- Desktop/mobile question-list and handbook screenshots inspected in one batch; runtime images remain under `output/board-navigation/`.
- Final `PLAYWRIGHT_PORT=18565 npm run ci`: exit 0; 0 type errors / 0 warnings; 173 unit passes; 229 browser passes / 1 existing device-conditional skip / 0 failures; production build and real search index passed.
- Both full-site output gates checked 3,464 pages with zero failures, preserving baseline URLs/anchors. Output size: 217,340,169 bytes, below 220 MiB.
