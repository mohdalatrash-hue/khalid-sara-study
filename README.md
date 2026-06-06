# Khalid & Sara — Study & Exam apps · مذاكرة واختبار

Interactive, mobile-friendly study/exam web apps built from the children's own
school textbooks (Saudi curriculum, Term 2). Each app: book-accurate questions in
the book's unit order, several question types (choose / fill / rearrange / match /
true–false / spelling), instant explanations for right *and* wrong answers, a
no-skip rule, and a progress report saved in the browser for parents.

## Open it
Open **`index.html`** — it links to every child's subjects. Works on phone, tablet,
and computer. No installation, no internet needed after loading.

## What's here
```
index.html                     ← the hub (start here)
sara/english.html              ← Sara · English (Grade 4) · Units 5–8
sara/english.questions.js      ← ✏️ Sara English QUESTIONS (edit this to add/change)
sara/science.html              ← Sara · العلوم (Grade 4) · الوحدات ٤–٧
sara/science.questions.js      ← ✏️ Sara Science QUESTIONS (edit this to add/change)
khalid/ …                      ← (added as each app is built)
```

## ✏️ Adding or enriching questions (the easy part)
Every app keeps its questions in a **separate `*.questions.js` file** next to it.
That is the **only** file you (or Claude) edit to add, remove, or improve questions
— the app itself never needs to change.

* Each file opens with a commented **template for every question type** and simple
  bilingual instructions.
* To add a question: copy a template block, fill it in, paste it inside the `[ … ]`,
  keep the comma between blocks. Save. Refresh the page — done.
* Questions are grouped into unit sections automatically by their `u:` label.
* Every question carries its own `right:` (praise/why) and `wrong:` (the
  parent/teacher explanation), so feedback travels with the question.

Because it's plain text, you can just tell Claude *"add 10 questions to Sara Science
Unit 5"* or *"make the wrong-answer explanations richer"* and Claude edits that one
file — then you publish (below).

## Publish & update — GitHub Desktop (recommended for non-developers)
One-time setup:
1. Install **GitHub Desktop** (desktop.github.com) and sign in to your GitHub account.
2. **File → Add local repository →** choose this `github-site` folder.
   (If it says it isn't a repo, click **create a repository** in the prompt — same folder.)
3. Give it a name (e.g. `khalid-sara-study`), then **Publish repository**.
   Untick *"Keep this code private"* if you want the link to work on free GitHub Pages.
4. On github.com open the repo → **Settings → Pages → Deploy from a branch →
   `main` / root → Save**. After ~1 minute your link is
   `https://<your-username>.github.io/khalid-sara-study/`. Share that with the kids.

Every future update (after Claude edits a `*.questions.js` file):
* Open GitHub Desktop → it shows the changed files → type a short summary →
  **Commit to main** → **Push origin**. The live site refreshes within a minute.

That's the whole loop: **Claude edits the questions file → you click Commit, then Push.**

## Notes
- Progress reports are saved per-device in the browser (localStorage). A different
  device or browser starts a fresh report. "Clear report" resets it.
- Open in a normal browser tab (not private/incognito) so the report is saved.
- **This `github-site` folder is the master copy** — edit and publish from here.
- All content is taken from the actual textbooks; only exam-sheet questions that
  match the current book were reused. No invented facts.
