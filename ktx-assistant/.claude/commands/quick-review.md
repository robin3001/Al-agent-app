# Quick Review Command

**Identity**: Read `.claude/agents/fe-lead/frontend-lead.md` at startup.

A streamlined code review for single files or small changes. Faster than full `/code-review` but less comprehensive.

**Usage**: `/quick-review <file-path>`

**Target**: $ARGUMENTS (required - specific file path)

---

## Instructions

### Step 1: Validate target

1. Set `TARGET = "$ARGUMENTS"`. Strip whitespace.
2. If `TARGET` is empty, stop: "Please provide a file path — e.g. `/quick-review src/App.jsx`"
3. Verify the file exists. If not, stop: "File not found: {TARGET}"

---

### Step 2: Read and analyze

Read the target file completely. Analyze for:

**Critical Issues:**
- Security vulnerabilities
- Runtime errors
- Missing error handling

**Warnings:**
- Console statements
- Missing types
- Code length issues
- Unused code

**Quick Checks:**
- Import organization
- Naming conventions
- Component structure

---

### Step 3: Present findings

```
⚡ Quick Review — {filename}

Status: {✅ LGTM | ⚠️ Minor Issues | ❌ Needs Work}

{If issues found:}
Issues:
  {list each issue with line number}

{If clean:}
✨ No issues found!

{Always include one positive note}
👍 {something done well}
```

---

### Step 4: Approve or request changes

If no critical issues and ≤2 warnings:
```
✅ Approved for merge

{Any suggestions as nice-to-haves}
```

If critical issues or >2 warnings:
```
⚠️ Please address the following:
{numbered list of required changes}

Re-run /quick-review after fixes.
```
