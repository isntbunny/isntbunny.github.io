# 删除除了 master 和 pages 外的所有远程分支
git branch -r | grep -v "master" | grep -v "pages" | sed 's/origin\///' | xargs -I {} git push origin --delete {}