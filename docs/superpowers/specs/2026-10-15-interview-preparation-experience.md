# Interview Compass preparation and training experience

Date: 2026-10-15

Status: Approved for implementation by the user's instruction to complete the previously discussed work and open a pull request.

## Problem and outcome

The question library has grown to 1,500 bilingual questions. Readers need an intentional path through the full collection, a clear explanation of why questions are asked and how answers can be organized, and a practical way to practice without turning the site into an answer key or automated hiring system.

The release adds three connected capabilities: editorial question collections, a bilingual questioning framework, and browser-based practice that hands a structured analysis request to an external AI. A companion Codex skill can read the published question-data feed and apply the same evidence rules to a user's answer.

## Audience and use cases

- A candidate prepares for an external interview, campus interview, or internal promotion conversation.
- A candidate asks an interviewer, manager, or promotion panel questions to decide whether the role, organization, or promotion path is workable for them.
- An interviewer chooses a focused set, asks consistent job-related questions, and records evidence rather than impressions.
- A user practices one question in the site and requests evidence-based feedback from an AI tool they choose.

## Research and evidence boundary

The U.S. Office of Personnel Management describes structured interviews as questions tied to job-related competencies, with planned lead/probe questions and consistent proficiency benchmarks. Its guidance says higher structure is associated with stronger rating reliability and agreement, and that applicants should have an opportunity to ask about the job and selection process. Its assessment guidance also notes that applicant reactions are part of the process and that a single assessment should not be treated as error-free. The University of Pennsylvania career service describes the candidate's questions as a way to assess the employer and role, and recommends asking for specific information relevant to the candidate's priorities.

These sources support structure, job relevance, consistent opportunity, and two-way information gathering. They do not validate Interview Compass's exact four-point anchors, prove that interview dialogue detects dishonesty, or establish the predictive validity of any question in this site. All score anchors remain heuristic references. Contradictions and missing details prompt verification; they are not proof of dishonesty or low ability.

Sources:

- U.S. OPM, [Structured Interviews](https://www.opm.gov/policy-data-oversight/assessment-and-selection/other-assessment-methods/structured-interviews/)
- U.S. OPM, [Designing an Assessment Strategy](https://www.opm.gov/policy-data-oversight/assessment-and-selection/assessment-strategy/)
- University of Pennsylvania Career Services, [Interviewing: Answers for “Do You Have Any Questions for Us?”](https://careerservices.upenn.edu/blog/2020/05/26/interviewing-answers-for-do-you-have-any-questions-for-us-during-covid-19/)
- University of Pennsylvania Career Services, [Interviewing Tips: General Tips](https://careerservices.upenn.edu/blog/2022/10/05/interviewing-tips-general-tips/)

## Information architecture

### Questioning framework

Add a bilingual top-level page titled **提问框架 / Questioning framework** at `/framework/` and `/en/framework/`. It has three clearly separated paths:

1. **面试官取证 / Interviewer evidence gathering** — start from job-related capability and objective problem; ask about a concrete situation, responsibility, decisions, alternatives, outcomes, and causal contribution. Explore both effective work and setbacks. Use similar, bounded probes so candidates have comparable opportunities to provide evidence.
2. **候选人组织回答 / Candidate answer structure** — use Situation, Task, Action, Result as a narrative scaffold, then make constraints, personal decisions, evidence, attribution, counterevidence, and learning explicit. STAR is not a score formula or a script to memorize.
3. **候选人反向提问 / Candidate due diligence** — external-interview questions help the candidate learn expected outcomes, actual work, decision rights, team and manager practices, business assumptions, and working constraints. Promotion questions help clarify target scope, evidence window, criteria and calibration, decision timing, gaps, support, and role transition. These questions are for the candidate's decision, not a hidden test of the interviewer.

The page should explain how these paths connect to a question card: objective problem → intent → inference hypotheses → context and observable signals → decision/trade-offs → four heuristic evidence levels. It must state that no single answer or signal establishes a stable personal trait, and the site does not provide model answers or automated hiring recommendations.

### Curated collections and full library

The question library exposes **精选题单 / Curated sets** and **全量题库 / Full library** as two modes. The home page links to both. Curated sets are editorial pathways, not duplicates or rankings: each set refers to stable question IDs and includes its audience, purpose, suggested order, and a short reason each question was selected. Full-library filters and search continue to expose every published question.

Initial collections:

- **通用面试** — a short cross-domain preparation path.
- **技术精选** — technical foundations, coding/abstraction, system design, and engineering decisions.
- **面试官取证** — selecting job-related questions, probing evidence, and using consistent evidence anchors.
- **岗位尽调** — questions candidates can ask to understand role outcomes, real work, authority, collaboration, support, and business conditions.
- **晋升对话** — preparing evidence and asking about target scope, evaluation criteria, calibration, timing, development gaps, and support.

Candidate-to-organization prompts in the due-diligence collections are labeled as questions for the candidate to ask. They do not use candidate-score fields or the question-card 1–4 rubric. The four evaluation-oriented collections may reuse existing interview questions by ID without duplicating their records.

### In-site practice and external AI handoff

Add a bilingual static practice route. A user can open it from a question card or choose a question by search. The user may supply role, target stage, and practice goal, then write an answer. The browser stores drafts and optional pasted AI feedback in local storage only; the site makes no network request containing the answer. The page clearly says that copying the analysis request shares its contents only when the user pastes them into an external AI service.

The generated analysis request includes the selected question, its objective/intent/signals/follow-ups and four evidence anchors, the optional role/stage/goal, and the user's answer. It asks the AI to:

- separate explicit evidence, missing context, and hypotheses;
- identify useful follow-up questions before judging where evidence is insufficient;
- assess the answer against the question's intent and each applicable 1–4 anchor, with quoted or specifically referenced evidence;
- name strengths, trade-offs, unsupported claims, and a concrete next-practice step;
- avoid inventing facts, model answers, personality diagnosis, overall candidate scores, or hire/no-hire recommendations.

### Published question data and companion skill

Publish a compact static locale-specific question index for the practice picker, plus a per-question public JSON endpoint containing the question-card fields and the same heuristic evaluation framework. The practice page loads the compact index once and fetches the selected question's full record only when needed. Stable question IDs allow the site, browser practice, and skill to share one source without making every practice session download the full library.

Package `interview-compass-coach` as a discoverable Codex skill with two supported modes: analyze a user-provided answer against a site question, or help a candidate prepare a small set of reverse questions from their stated decision criteria. It should resolve a question from a supplied site URL/ID using the public JSON feed, and ask for the text when it cannot retrieve the record. It should follow the same evidence limits as the site and never claim its assessment is validated or an employment decision.

## Design and technical constraints

- Keep the site static and deployable on GitHub Pages under `/interview-compass/`; do not add a backend, account system, or AI provider API.
- Retain bilingual parity for all new routes and UI labels.
- Keep the existing six navigation destinations and add only the requested framework destination. Curated collections are a mode within the question-library journey rather than another global navigation item.
- Use the existing Radix theme, typography, colors, spacing, and icon conventions.
- Keep question records canonical; collections store references, not copies.
- Store practice drafts and optional feedback in browser local storage with visible clear controls and a data-sensitivity reminder.
- Preserve all existing question content and source-ledger entries.

## Acceptance criteria

1. Chinese and English framework routes load under the GitHub Pages base path, have localized title/breadcrumb/navigation, and explain all three perspectives.
2. The framework distinguishes evidence collection from candidate due diligence and explicitly prevents unsupported truthfulness/personality inference.
3. The question library and home page link clearly to curated sets and the full collection; both remain searchable/navigation paths and do not create duplicate question records.
4. Each initial curated set has a useful, ordered set of valid bilingual question IDs, a clear audience/purpose, and an explanation for inclusion; candidate reverse questions use a separate non-scored schema/presentation.
5. Practice can be launched from a question detail page and through a picker, accepts answer/context, restores local drafts, clears local data, and produces a locale-correct prompt using that question's evaluation fields.
6. The generated prompt distinguishes evidence from inference, asks for context before scoring, uses 1–4 anchors per question, and prohibits model answers, personality judgments, and hiring recommendations.
7. The site does not transmit practice answers; browser tests verify draft persistence/clear behavior and prompt generation/copy feedback.
8. The JSON index contains one compact public entry per question in each locale; per-question endpoints return exactly one localized public record and evaluation framework; neither contains private/local practice content; both are accessible under the Pages base path and consumed by the site practice and companion skill.
9. The skill is self-contained, discoverable, bilingual-aware, tested against the live question-data shape, and includes an explicit fallback when a question cannot be fetched.
10. `npm run ci` passes, all static routes and JSON feeds are present in `dist`, and the final branch is committed and opened as a PR against `main`.
