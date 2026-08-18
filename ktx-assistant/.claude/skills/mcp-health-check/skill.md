# Skill: MCP Health Check

Probes all configured MCP servers with a lightweight call and reports connectivity status. Used before any code review or sprint planning operations begin.

---

## Instructions

### Step 1: Probe each server

Run a lightweight call against each MCP server:

**Atlassian (Jira + Confluence):**
Using Atlassian MCP, fetch the current user's profile or any trivial endpoint that confirms the connection is alive.

**GitKraken CLI (Git):**
Using GitKraken CLI MCP, check git status or any trivial git operation.

For each server, record the result as either `connected` or `unavailable`.

---

### Step 2: Report status

Present the result to the developer:

```
🔌 MCP Connectivity Check

  Atlassian (Jira + Confluence) : ✅ connected  |  ❌ unavailable
  GitKraken CLI (Git)           : ✅ connected  |  ❌ unavailable
```

---

### Step 3: Handle failures

**All servers connected** → tell the developer "All MCP servers connected." and return control to the caller.

**One or more servers unavailable**:

Present to the developer:

```
⚠️ One or more MCP servers are unavailable.

Unavailable: [list each]

Options:
  continue   → proceed with available servers (some features may be limited)
  abort      → stop here
```

Wait for response:
- `continue` → return control to the caller with the connectivity status noted
- `abort` → stop execution

---

## Fallback Behavior

**For Code Review:**
- Git MCP unavailable → Static code review only, no PR integration
- Atlassian MCP unavailable → No Jira ticket integration

**For Sprint Planning:**
- Atlassian MCP unavailable → Cannot proceed (required for Jira access)
- Git MCP unavailable → Can proceed without commit analysis
