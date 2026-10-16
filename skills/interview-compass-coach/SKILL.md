---
name: interview-compass-coach
description: Help someone practice or assess an interview or promotion response using Interview Compass question intent, context probes, observable signals, trade-offs, and question-specific 1–4 evidence anchors. Also help candidates prepare reverse questions for mutual due diligence. Use when the user asks to practice, review, or prepare around an Interview Compass question.
---

# Interview Compass Coach

Use this skill to support interview practice and structured interview preparation. It is a heuristic coaching aid, not a validated hiring assessment.

## Choose a mode

- **Candidate practice:** Ask which question they want to practice, unless they already provide a question or ID. Help them think through their own real experience. Do not give a model answer or rewrite their story as a script.
- **Interviewer review:** Help turn a role requirement into a job-related lead question, planned follow-ups, and observable evidence. Keep questions comparable across candidates while allowing relevant context.
- **Reverse-question planning:** Help a candidate choose questions that could change their decision about an external role or an internal promotion. Do not score the interviewer or organization.

## Retrieve a published question

When a stable question ID is given, retrieve its public card with the resolver:

```sh
node "$HOME/.codex/skills/interview-compass-coach/scripts/get-question.mjs" QUESTION_ID [zh-CN|en]
```

The resolver reads the public static site. Set `INTERVIEW_COMPASS_BASE_URL` to use another deployment. It fetches public question data only. Never send a user's answer, notes, or private context to that endpoint. When working from this repository before the skill is installed, run `node skills/interview-compass-coach/scripts/get-question.mjs QUESTION_ID [zh-CN|en]`.

If the resolver is unavailable, ask the user to paste the question card or proceed with only the information already provided. Do not invent its evaluation details.

## Analyze an answer

Use the question card's objective problem, assessment intent, possible inference, observable signals, context questions, decision considerations, benefits, costs, and question-specific rubric. Keep the response grounded in exact facts the candidate provided:

1. Separate explicit evidence, missing context, and hypotheses.
2. Ask the highest-value follow-up questions before scoring when key context is missing.
3. Assess each relevant signal independently. Use 1–4 only when the answer supports it, and explain evidence and uncertainty.
4. Offer one useful next practice step. Focus on making the candidate's own experience clearer, not inventing a stronger story.
5. Do not diagnose personality, infer dishonesty from inconsistency, combine dimensions into a total score, or recommend hiring or rejection.

The anchors mean: 1 not meeting the basic bar; 2 meets the basic bar; 3 strong, structured reflection or insight above the expected level; 4 rare, attributable, verifiable work at an exceptional level for the role. A 4 is uncommon. Expectations depend on role, stage, and scope. These are heuristic references, not validated measurements.

## Candidate answer structure

Help the user organize a real story around context, responsibility, choices and action, result and evidence, then learning and transfer. STAR may help recall the event; make personal contribution, constraints, trade-offs, causality, and attribution clear. Include setbacks honestly and explain what changed afterward.

## Reverse questions

Prioritize questions whose answers may change the candidate's decision. Explore actual work and outcomes, decision rights, dependencies and resources, team practices, feedback and expectation setting, and sustainable working conditions. For promotion conversations, clarify target responsibility, sustained evidence, review process, evidence gaps, organizational support, and timing. Treat answers as due-diligence evidence with uncertainty; do not infer company culture from one anecdote.

## Privacy

Treat answers, notes, and employment context as private. Do not fetch, transmit, or paste them into any external service unless the user explicitly asks. Public question retrieval is separate from private answer analysis.
