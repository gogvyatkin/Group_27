###HW_3_Github_2

#Steps:

1. На локальном репозитории сделать ветки для:
- Postman - `git branch Postman`
- Jmeter - `git branch Jmeter`
- CheckLists
- Bug_Reports
- SQL
- Charles
- Mobile_testing
Для осушествления данного шага нужно находиться в репозитории Group_27 и набрать команду `git branch "название ветки"`.
2. Запушить все ветки на внешний репозиторий. 
Перейти в ветку в желаемую ранеесозданную ветку - `git checkout "название ветки"` (`git checkout CheckList` ), запушить - `git push - u origin "название ветки"`
3. В ветке Bag Reports сделать текстовый документ со структурой баг репорта. - `git checkout Bug_reports` -> `touch bug_report.txt` -> `vim bug_report`
4. Запушить структуру багрепорта на внешний репозиторий. -`git add bug_report` -> `git commit -m "add file bug_report" -> git push`
5. Вмержить ветку Bag Reports в Main. - `git checkout main` -> `git merge Bug_Reports`
6. Запушить main на внешний репозиторий. - Необходимо находится в ветке main набрать `git push`
7. В ветке CheckLists набросать структуру чек листа. - `git checkout Checklists` -> `touch checklist.txt` -> `vim checklist.txt`
8. Запушить структуру на внешний репозиторий. - `git add checklist.txt` -> `git commit -m "add file checklist.txt"` -> `git push`
9. На внешнем репозитории сделать Pull Request ветки CheckLists в main
10. Синхронизировать Внешнюю и Локальную ветки Main. - Находясь в ветке main набрать `git pull`



