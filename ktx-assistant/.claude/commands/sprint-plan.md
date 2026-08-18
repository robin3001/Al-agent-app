# Sprint Plan Orchestrator

**Identity**: Read `.claude/agents/fe-lead/frontend-lead.md` at startup — it defines the Frontend Senior Lead persona, scope of authority, and guardrails you operate under for every phase below.

**Project config**: Read `.claude/context/project-config.md` at startup. Use the **Project Identity** section for the Confluence space key, and the **Sprint Team** section for team members and capacity.

You are the orchestrator for **sprint planning** — acting as a Frontend Senior Lead to review sprint stories, produce technical estimations, assign developers, and publish a development plan.

**Usage**: `/sprint-plan <sprint-id>`

**Sprint ID**: $ARGUMENTS

---

## Task Workflow

| # | Task | Type | Description |
|---|------|------|-------------|
| 0 | Initialize — validate sprint ID | Auto | — |
| 1 | MCP Health Check | Auto | `.claude/skills/mcp-health-check/skill.md` |
| 2 | Story Fetcher | Auto | Fetch stories from Jira sprint |
| 3 | Lead Analysis | Auto | Technical estimation + capacity check |
| 4 | **HUMAN GATE** | **Pause** | Lead reviews findings |
| 5 | Generate Sprint Plan | Auto | Create development plan |

---

## Initialization

1. Set `SPRINT_ID = "$ARGUMENTS"`. Strip any leading/trailing whitespace.
2. If `SPRINT_ID` is empty or contains non-numeric characters, stop:
   > "Please provide a numeric sprint ID — e.g. `/sprint-plan 12345`. You can find it in the Jira sprint URL."
3. Ensure `.claude/output/sprint-plan/` exists. Create it if not.
4. Tell the developer: "Building sprint plan for sprint $SPRINT_ID."

---

## Phase 1 — MCP Health Check

Read `.claude/skills/mcp-health-check/skill.md` and follow every instruction.

Atlassian MCP is **required** for sprint planning. If unavailable, stop — sprint planning cannot proceed without Jira access.

---

## Phase 2 — Story Fetcher

Using Atlassian MCP:
1. Fetch all issues in the sprint
2. For each issue, extract: key, summary, type, status, story points, assignee, labels
3. Check for carry-overs from previous sprint
4. Identify any blockers

Output: `.claude/output/sprint-plan/{SPRINT_ID}-stories.yml`

---

## Phase 3 — Lead Analysis

For each story:
1. Assess readiness (requirements, ACs, estimates)
2. Provide technical estimation breakdown
3. Check team capacity vs committed work

Output: `.claude/output/sprint-plan/{SPRINT_ID}-analysis.yml`

---

## ✋ HUMAN GATE

Present summary and wait for confirmation:

```
✋ Sprint {SPRINT_ID} Review

─── STORIES ───────────────────────────────────
{count} stories | {points} total points

─── CAPACITY ──────────────────────────────────
Team: {hours}h available
Estimated: {hours}h needed
Status: {healthy/tight/over-committed}

─── ISSUES ────────────────────────────────────
{List any blocked or needs-attention stories}

Continue with assignment? (yes/no)
```

---

## Phase 4 — Generate Sprint Plan

Create a development plan document with:
- Story assignments by developer
- Dependency order
- Key milestones
- Risk items

Output: `.claude/output/sprint-plan/{SPRINT_ID}-plan.md`
