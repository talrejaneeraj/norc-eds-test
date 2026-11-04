# NORC EDS Session 3: exercise walkthroughs

A worked example of every Session 3 exercise, done on the imported NORC homepage (`norc/index.plain.html`) by refactoring the **Cards** block. The code change itself is in PR #5 (`cards-refactor`).

## Download

On each file's GitHub page, use the **Download raw file** button.

| # | Document | Word | Source |
|---|---|---|---|
| Lab 1 | Baseline and candidate selection | [01_Lab1_Baseline_and_Candidate.docx](01_Lab1_Baseline_and_Candidate.docx) | [md](source/Lab1_Baseline_and_Candidate.md) |
| Exercise 1 (Labs 2–3) | Understand the block and write the content contract | [02_Exercise1_Content_Contract.docx](02_Exercise1_Content_Contract.docx) | [md](source/Exercise1_Content_Contract.md) |
| Exercise 2 (Lab 4) | Implement with the agent + Adobe skills | [03_Exercise2_Implement.docx](03_Exercise2_Implement.docx) | [md](source/Exercise2_Implement.md) |
| Exercise 3 (Lab 5) | Validate content scenarios | [04_Exercise3_Test.docx](04_Exercise3_Test.docx) | [md](source/Exercise3_Test.md) |
| Exercise 4 (Lab 6) | Review, commit and pull request | [05_Exercise4_Review_Commit_PR.docx](05_Exercise4_Review_Commit_PR.docx) | [md](source/Exercise4_Review_Commit_PR.md) |
| All | Combined walkthrough and demo script | [NORC_Session3_Exercises_Walkthrough.docx](NORC_Session3_Exercises_Walkthrough.docx) | [md](NORC_Session3_Exercises_Walkthrough.md) |

## Adobe certification course references

Every concept is referenced to the official Adobe course **Adobe Experience Manager Edge Delivery Services – Developer Professional** (catalog ID **EDS-D200**): https://certification.adobe.com/courses/1308

Each 📘 note in the documents gives the module and lesson name, a direct link to that lesson, and the course's screenshot.

| Module | Module link (Adobe ID sign-in) |
|---|---|
| Module 2: From Document to Page | https://certification.adobe.com/courses/playScorm/1343/1308 |
| Module 3: Setting Up Edge Delivery Services | https://certification.adobe.com/courses/playScorm/1395/1308 |
| Module 4: Optimizing Content Delivery | https://certification.adobe.com/courses/playScorm/1345/1308 |
| Module 5: Launching Your Website | https://certification.adobe.com/courses/playScorm/1346/1308 |

Course screenshots (`img/adobe-*`) are © Adobe and are included for training reference only.

## Rebuilding the Word files

From `docs/session3/source/`:

```bash
pandoc Exercise1_Content_Contract.md -o ../02_Exercise1_Content_Contract.docx --resource-path=.
```
