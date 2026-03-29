# Handoff

Last updated: 2026-03-29

## Project
- Repo name: `kitchen-reset-page`
- Local path: `/Users/johncosnett/PycharmProjects/kitchen-reset-page`
- GitHub: `https://github.com/ccosnett/kitchen-reset-page`
- Visibility: private
- Default branch: `main`

## Linear Context
- Workspace/team: `Sid Meier's Blockchain's`
- Project: `Reset Room`
- Issue: `SID-200`
- Issue title: `make kitchen reset page`
- Issue URL: `https://linear.app/sid-meiers-blockchains/issue/SID-200/make-kitchen-reset-page`

## Current Repo State
- Branch: `main`
- Working tree: clean
- Latest commits:
  - `9d73724` `Update README PDF [skip ci]`
  - `ed26fc4` `Commit generated README PDF`
  - `0d223e6` `Fix README PDF workflow Chromium launch`
  - `ed2f36b` `Add README PDF GitHub workflow`

## What The Project Currently Contains
- `README.md`
  - The main kitchen reset checklist.
  - Current sections: dishes, work surfaces, couch, floor, and intention.
  - The heater section was removed.
- `build/README.pdf`
  - A generated single-page A4 PDF version of the README.
- `docs/kitchen-reset-flowchart.md`
  - Mermaid flowchart for an earlier flow-oriented version of the task.
- `docs/kitchen-reset-intention.md`
  - Supporting project/intention notes.
- `.github/workflows/readme-pdf.yml`
  - GitHub Actions workflow that renders `README.md` to PDF.
  - Uploads the PDF as an artifact.
  - Commits `build/README.pdf` back to `main` when the rendered file changes.
- `.github/readme-pdf.config.cjs`
  - Print styling and PDF settings for the README-to-PDF conversion.
  - Includes Puppeteer launch args `--no-sandbox` and `--disable-setuid-sandbox` because GitHub's Ubuntu runner failed without them.

## What Was Done Recently
- Added a GitHub Actions workflow named `Build README PDF`.
- Configured the workflow to run on pushes to `main` when `README.md` or the workflow/config files change, and on `workflow_dispatch`.
- Verified the workflow renders `README.md` to a single A4 page.
- Investigated and fixed the initial GitHub Actions failure caused by Chromium sandbox restrictions on the runner.
- Updated the workflow so the generated PDF is committed back into the repo automatically.
- Confirmed the workflow now succeeds on GitHub and that the bot can push `build/README.pdf`.

## Important Workflow Behavior
- The workflow is intentionally stateful: it may create a follow-up bot commit on `main` with message `Update README PDF [skip ci]`.
- That bot commit is expected behavior, not a malfunction.
- The `[skip ci]` text is there to avoid an infinite commit loop.
- The workflow still uploads the generated PDF as an artifact even though the PDF is also committed to the repo.

## Known Constraints
- The PDF layout is tuned to the current README length and formatting.
- If the README grows materially, the single-page A4 constraint may break and the print CSS may need to be tightened again.
- GitHub Actions is warning that some `actions/*@v4` actions still run on the Node 20 runtime. This is not currently breaking the workflow, but those action versions should be updated later.

## Recommended Next Steps
1. If the README content changes, check whether the committed `build/README.pdf` still looks correct after the workflow runs.
2. If the checklist is becoming the real product, decide whether to keep it as README-first documentation or turn it into an actual page/app.
3. If continuing the automation work, update the workflow actions to versions that are aligned with GitHub's Node 24 migration.

## Suggested Prompt For The Next Codex Session
```text
Use /Users/johncosnett/PycharmProjects/kitchen-reset-page as the active repo.
Read HANDOFF.md first.
Assume the README-to-PDF GitHub workflow is part of the product now.
Check whether the current README and generated PDF still match the intended kitchen reset experience, then continue from there.
```
