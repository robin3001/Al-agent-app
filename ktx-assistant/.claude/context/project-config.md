# Project Configuration — Frontend Senior Lead Agent

This file is the **single source of truth for all project-specific values**. Update the **Project Identity** and **Sprint Team** sections when deploying this agent on a new project.

---

## Project Identity

| Key | Value |
|-----|-------|
| **Project Name** | Knowledge Transfer & Employee Exit Assistant |
| **Jira ticket prefix** | `KTX` |
| **Jira base URL** | `https://experionglobal-team-pnlsyn7h.atlassian.net/` |
| **Confluence space key** | `Hackathon` |
| **GitHub organization** | `robin3001` |
| **GitHub repo** | `Al-agent-app` |

---

## Tech Stack

Used by the Lead Analysis agent to determine which implementation components apply per story type.

| Concern | Value |
|---------|-------|
| **Framework** | React 18 + JavaScript + Vite |
| **Routing** | React Router DOM v6 |
| **State Management** | React Context API |
| **Styling** | CSS Modules / Plain CSS |
| **Build Tool** | Vite |
| **Linting** | Oxlint |
| **Test Framework** | Vitest (to be added) |
| **Coverage threshold** | 80% branch coverage on new files |

---

## File Paths

| Artifact | Path |
|----------|------|
| **Source root** | `src/` |
| **Components** | `src/components/` |
| **Pages** | `src/pages/` |
| **Context** | `src/context/` |
| **Data/Mocks** | `src/data/` |
| **Code review output** | `.claude/output/code-review/` |
| **Sprint plan output** | `.claude/output/sprint-plan/` |

---

## Code Quality Standards

### Critical (Blocking)
- No hardcoded secrets or API keys
- No security vulnerabilities (XSS, injection)
- Proper error handling for async operations
- Accessibility compliance (WCAG 2.1 AA)

### Required
- PropTypes or TypeScript for component props
- Error boundaries for critical sections
- Loading states for data fetching
- Meaningful variable and function names

### Recommended
- Components under 300 lines
- Functions under 50 lines
- Unit tests for utilities
- Integration tests for critical flows

---

## Sprint Team

All team members are treated as senior React developers. Update this table each sprint if headcount changes.

| Developer | Role | Sprint Capacity (hours) |
|-----------|------|------------------------|
| Robin Cherian Mathew | Frontend Lead | 60 |
| Developer 2 | Frontend Developer | 60 |
| Developer 3 | Frontend Developer | 60 |

> **Per-sprint capacity**: 60 hours assumes a 2-week sprint with ~6 productive hours/day after meetings, reviews, and overhead.

---

## Estimation Baseline

Senior React developer velocity on this stack. Used by the Lead Analysis agent.

**Velocity reference**: 1 story point ≈ 2 hours for a senior developer on this stack.

### Hours per implementation component (by complexity tier)

| Component | Low (1–3 SP) | Medium (4–8 SP) | High (>8 SP) |
|-----------|-------------|----------------|-------------|
| Component Structure | 1 | 2 | 4 |
| Styling (CSS) | 0.5 | 1.5 | 3 |
| State Management | 0.5 | 1 | 2 |
| API Integration | 0.5 | 1.5 | 3 |
| Error Handling | 0.5 | 1 | 1.5 |
| Unit Tests | 1 | 2 | 4 |
| PR Review Cycle | 0.5 | 1 | 1.5 |

---

## Review Approval Criteria

The Frontend Lead agent will approve code if:
1. **Zero critical issues** (security, runtime errors, accessibility violations)
2. **Maximum 2 warnings** (code quality, missing tests)
3. **Accessibility audit passes**
4. **Error handling present** for all async operations
5. **Loading states implemented** for data fetching

If any criteria fail, the agent will request changes with specific action items.
