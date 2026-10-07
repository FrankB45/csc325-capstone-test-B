# Test repo B — Fieldnote Studio

A portfolio with multiple pages, interactive filtering, a deliberate spacing regression, and a recovery commit.

**Expected compatibility result: Accept · select up to 10 of 25.**

- Default-branch commits: **25**.
- Commit numbers below are **oldest first**, starting at 1.
- This is a synthetic Git Gallery fixture, not an organic production history.
- Expected outcomes below describe the application requirements, not a claim that Git Gallery integration tests have passed.

## Pages at the latest commit

`index.html`, `work.html`, `about.html`

## Test cases and expected results

### Subset selection

**Target page:** `index.html`  
**Commit numbers:** 1, 4, 6, 9, 12, 15, 17, 20, 23, 25.

Compatibility passes. Setup preselects up to 10 distinct commits across the ordered history, including first and last. A user cannot select 11 or start with zero selected. All homepage captures succeed.

### Partially available portfolio page

**Target page:** `work.html`  
**Commit numbers:** 5, 6, 17, 18, 19, 25.

Commit 5 fails because work.html does not exist. The other five succeed. Overall status is Partially Complete; the failed version remains visible with its reason.

### Spacing regression

**Target page:** `work.html`  
**Commit numbers:** 17, 18.

Both pages render, but commit 18 has intentionally crowded project gutters. AI should describe the visible spacing change, not claim a capture failure.

### Regression recovered

**Target page:** `work.html`  
**Commit numbers:** 17, 19.

Both captures succeed and have the same appearance: commit 19 restores commit 17's spacing.

### Nonvisual maintenance

**Target page:** `index.html`  
**Commit numbers:** 22, 23.

The CSS documentation changes while the homepage appearance stays the same. Report no visible difference.

### About-page introduction

**Target page:** `about.html`  
**Commit numbers:** 9, 10.

Commit 9 fails for the absent selected page; commit 10 succeeds. The target page and both exact commit identities remain recorded.

## Important fixture rules

- work.html first appears at commit 6; about.html first appears at commit 10.
- The discipline filter and expandable notes can be used in the preview. Initial screenshots do not prove their behavior.
- AI groups must contain consecutive real commits with no duplicates or omissions; exact group titles are not prescribed.

## Local preview

Serve this directory with `python3 -m http.server 8000`, then open http://localhost:8000. The site uses only local HTML, CSS, JavaScript, and original SVG assets. No build step, API, external font, account, or secret is needed.

## Preserve the test

Do not append setup or documentation commits casually: the default-branch count is part of this test. Count with `git rev-list --count main`. List the history oldest first with `git log --reverse --format="%h %s" main`.

The README contains test guidance and expected answers. AI evaluation using this repo is therefore not a blind benchmark; judge visual claims against screenshots and website changes, not this document alone.
