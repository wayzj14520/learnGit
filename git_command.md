# first

git clone 从远程仓库获取到本地

# second

git add \<file> 添加修改的文件

git add . // 添加所有修改的文件

# third

git status 查看当前状态

# fourth

git commit 提交到本地仓库

```
   此时会出现一个vim编辑器，需要输入commit的message，
   按下小写字母"i"来切换到插入模式，然后就可以输入提交信息，
   输入完之后按下esc返回到命令模式，然后连续输入两个大写字母ZZ，就保存并退出了
```

# fifth

git log 查看提交记录

# sixth

git push 推送到git仓库

# create new branch

git branch \<branchName> // 创建一个分支

git checkout \<branchName> // 切换到该分支

一行命令

git checkout -b \<branchName> // 创建后直接切换过去

# delete branch

git branch -d \<branchName> // 删除本地分支

git push origin -d \<branchName> // 删除远程分支

git branch -D \<branchName> // 强制删除本地分支

git push origin -D \<branchName> // 强制删除远程分支

# 分支开发完成后需要merge到main分支

push 的时候，如果当前分支是一个本地创建的分支，需要指定远程仓库名和分支名

git push origin dev

# 解决冲突

手动解决，然后commit
