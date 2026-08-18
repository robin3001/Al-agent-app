# Code Review Command

**Identity**: Read `.claude/agents/fe-lead/frontend-lead.md` at startup — it defines the Frontend Senior Lead persona, scope of authority, and code review standards you operate under.

**Project config**: Read `.claude/context/project-config.md` at startup. Use the **Tech Stack** section for framework-specific review criteria.

You are the orchestrator for **frontend code review** — acting as a Frontend Senior Lead to review code changes, identify issues, and provide approval or request changes.

**Usage**: `/code-review [file-path|all]`

**Target**: $ARGUMENTS (optional - specific file path, or "all" for full project review)

---

## Task Workflow

| # | Task | Type | Description |
|---|------|------|-------------|
| 0 | Initialize — validate target | Auto | — |
| 1 | MCP Health Check | Auto | `.claude/skills/mcp-health-check/skill.md` |
| 2 | Code Analysis | Auto | `.claude/agents/fe-lead/phase-code-analysis.md` |
| 3 | Quality Assessment | Auto | `.claude/agents/fe-lead/phase-quality-assessment.md` |
| 4 | **HUMAN GATE** — lead reviews findings | **Pause** | — |
| 5 | Generate Review Report | Auto | `.claude/agents/fe-lead/phase-review-report.md` |

---

## Initialization

1. Set `TARGET = "$ARGUMENTS"`. Strip any leading/trailing whitespace.
2. If `TARGET` is empty, set `TARGET = "all"` (review entire `src/` folder).
3. Ensure `.claude/output/code-review/` exists. Create it if not.
4. Tell the developer: "Starting code review for: $TARGET"

---

## Running Each Phase

For every Auto task:
1. Tell the developer: "Starting Phase X — <phase name>."
2. Read the agent file listed in the table.
3. Follow every instruction exactly.
4. When complete, move to the next task.

---

## Phase 1 — MCP Health Check

Read `.claude/skills/mcp-health-check/skill.md` and follow every instruction.

Git MCP is required for code review. If Git is unavailable, you can still perform a static code review but note that diff analysis won't be available.

---

## Phase 2 — Code Analysis

Read `.claude/agents/fe-lead/phase-code-analysis.md` and follow every instruction.

Output: `.claude/output/code-review/analysis-output.yml`

---

## Phase 3 — Quality Assessment

Read `.claude/agents/fe-lead/phase-quality-assessment.md` and follow every instruction.

Output: `.claude/output/code-review/quality-output.yml`

---

## ✋ HUMAN GATE — Lead Review

After Quality Assessment completes, present the following to the developer and wait for a response:

```
✋ Code Review Summary — {TARGET}

─── OVERALL STATUS ───────────────────────────
{reviewStatus: APPROVED | NEEDS_CHANGES | BLOCKED}

─── CRITICAL ISSUES ({count}) ─────────────────
{List each critical issue with file:line and description}

─── RECOMMENDATIONS ({count}) ─────────────────
{List each recommendation}

─── SUGGESTIONS ({count}) ─────────────────────
{List each suggestion}

─── POSITIVE HIGHLIGHTS ───────────────────────
{List what was done well}

─── FILES REVIEWED ({count}) ──────────────────
{List each file}

─── OPTIONS ───────────────────────────────────
  approve    → Mark as approved (only if no critical issues)
  request    → Request changes from developer
  comment    → Add comments without approval decision
  abort      → Cancel review
```

Wait for response before proceeding.

---

## Phase 4 — Generate Review Report

Read `.claude/agents/fe-lead/phase-review-report.md` and follow every instruction.

Output: `.claude/output/code-review/review-report.md`

If connected to Git, optionally create a PR comment with the review summary.
