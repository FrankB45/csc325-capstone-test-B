# Test repo B — Fieldnote Studio

A passive three-page design portfolio with bold editorial redesigns, a crowded-card regression, and a recovery commit.

**Expected result: Accept · select up to 10 of 25.**

Exactly **25 commits** on main. Commit numbers are oldest first.
Synthetic history for Git Gallery testing; all content is fictional.

## Scenarios

### Subset selection

Page: `index.html`. Versions: 1, 4, 6, 9, 12, 15, 17, 20, 23, 25.

Compatibility passes. Setup preselects up to 10 distinct commits across the ordered history, including first and last. A user cannot select 11 or start with zero selected. All homepage captures succeed.

### Partially available portfolio page

Page: `work.html`. Versions: 5, 6, 17, 18, 19, 25.

Commit 5 fails because work.html does not exist. The other five succeed. Overall status is Partially Complete; the failed version remains visible with its reason.

### Spacing regression

Page: `work.html`. Versions: 17, 18.

Both pages render, but commit 18 has intentionally crowded project gutters. AI should describe the visible spacing change, not claim a capture failure.

### Regression recovered

Page: `work.html`. Versions: 17, 19.

Both captures succeed and have the same appearance: commit 19 restores commit 17's spacing.

### Nonvisual maintenance

Page: `index.html`. Versions: 22, 23.

The CSS documentation changes while the homepage appearance stays the same. Report no visible difference.

### About-page introduction

Page: `about.html`. Versions: 9, 10.

Commit 9 fails for the absent selected page; commit 10 succeeds. The target page and both exact commit identities remain recorded.

## Fixture rules

- work.html first appears at commit 6; about.html first appears at commit 10.
- Project notes are visible static content. Work and studio navigation uses ordinary links; there is no JavaScript filter.
- AI groups must contain consecutive real commits with no duplicates or omissions; exact group titles are not prescribed.
- Every historical page fits the current passive HTML/CSS/PNG profile. Large visual redesigns are intentional synthetic test data; only the documented identical pairs should stay unchanged.

## Preview

Run `python3 -m http.server 8000` and open http://127.0.0.1:8000/index.html.
Only native HTML, flat CSS, system fonts, and local PNG artwork are used. No install, build step, script, external service, or backend is required.

Do not append commits: counts are part of the fixtures. The 2026-11-10 refresh intentionally replaced historical SHAs; refresh previously cached Git Gallery selections.
Queue completion, partial completion, and timeline behavior are acceptance expectations; local fixture verification alone is not a live database/worker test.
README text supplies expected answers; use screenshots and source diffs when judging AI claims.
