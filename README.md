# Khalid & Sara — Study & Exam apps · مذاكرة واختبار

Interactive, mobile-friendly study/exam web apps built from the children's own
school textbooks (Saudi curriculum, **Term 2**). Each app: book-accurate questions
in the book's unit order, several question types (choose / fill / rearrange / match /
true–false / spelling), instant explanations for right *and* wrong answers, a
no-skip rule, an attempt counter, and a progress report saved in the browser for parents.

## Open it
Open **`index.html`** — the hub links to every child's subjects. Works on phone,
tablet, and computer. No installation, no internet needed after loading.

## What's here (all files sit at the root — flat layout)
```
index.html               ← the hub (start here)

— Sara · Grade 4 —
english.html  + english.questions.js     ← English · Units 5–8
science.html  + science.questions.js     ← العلوم · الوحدات ٤–٧
lughati.html  + lughati.questions.js     ← لغتي · الوحدة الثانية
math.html     + math.questions.js        ← الرياضيات · الفصول ٧–١٠

— Khalid · Grade 6 —
khalid-lughati.html  + khalid-lughati.questions.js   ← لغتي · الوحدة الثانية
khalid-english.html  + khalid-english.questions.js   ← English · Units 5–8
khalid-math.html     + khalid-math.questions.js      ← الرياضيات · الفصل الثاني
khalid-science.html  + khalid-science.questions.js   ← العلوم · الوحدات ٤–٦
```

## ✏️ Adding or enriching questions (the easy part)
Each app keeps its questions in its own **`*.questions.js`** file — the *only* file
you (or Claude) edit. Every file opens with a commented template for each question
type and simple bilingual instructions. Copy a block, fill it in, paste it inside the
`[ … ]`, keep the commas, save, refresh. Just tell Claude e.g. *"add 10 questions to
Khalid Science, الوحدة ٦"* and Claude edits that one file.

## Publish / update — GitHub Desktop
One-time: install GitHub Desktop → **Add local repository** → choose this folder →
**Publish**. Then **Settings → Pages → Deploy from a branch → main / root**.
Every later update: Claude edits a `*.questions.js` → you click **Commit** then **Push**.
Drag-and-drop upload on github.com works too (upload all files at the root level).

## Notes
- Progress reports are saved per-device in the browser (localStorage). "Clear report" resets it.
- All content is taken from the actual textbooks; only exam items matching the current
  book were reused; off-syllabus content was excluded. No invented facts.
- **Khalid · الرياضيات:** the math student-book file supplied was a mislabeled duplicate
  of the Arabic book, so that app was built from the official **exercises workbook**
  (الفصل ٦) + the **Term-2 exam**, with all arithmetic verified. Drop in the correct
  math book and the bank can be expanded easily.
