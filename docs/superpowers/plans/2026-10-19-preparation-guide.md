# Preparation guide implementation

Spec: docs/superpowers/specs/2026-10-19-preparation-guide-information-architecture.md.
Execution: Native, continuing the user's instruction to execute the approved direction to completion in the existing isolated worktree. Preserve published routes and anchors.

1. Test and unify board ownership; add localized guide landing, capability overview and direction articles. One ownership function drives navigation and presentation. Keep content ancestry separate.
2. Assemble the real guide tree and editorial sequence; route categories, methods and role/stage references into it. Keep question sets and local collections reachable. Add safe guide return routes.
3. Implement non-blocking target onboarding, homepage entry, explicit model-to-target actions and global search scope. Preserve existing target and URL contracts.
4. Update navigation/output checks and behavioral tests to the approved three-board experience. Verify production output, bilingual navigation, guide-to-reading return, mobile/no-JS and failure recovery. Inspect representative desktop/mobile output in one batch, repair concrete defects, confirm once.
5. Review complete changes against spec, fix confirmed issues, run required checks, commit, push and update PR #12. Verify remote HEAD and CI. No automatic merge.

Public seams remain route/board contracts, Registry/outline relations, query state, reading sessions and real rendered interactions. Tests cover user behavior rather than private implementation calls. Existing six-link and automatic-first-prompt expectations must be migrated to the approved experience.
