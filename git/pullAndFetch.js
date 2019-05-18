// 参考连接：https://www.cnblogs.com/qiu-Ann/p/7902855.html    https://blog.csdn.net/weixin_41975655/article/details/82887273

// git fetch 与 git pull的区别
// git fetch 相当于从远程获取最新到本地，不会自动merge

git fetch origin master  // 将远程仓库的master分支下载到本地当前branch中

git log - p master..origin / master  // 比较本地master分支和origin/master分支的差别

git merge origin / master  // 进行合并

或

git fetch origin master: tmp  // 从远程仓库master分支获取最新，在本地建立tmp分支

git diff tmp   // 将当前分支和tmp进行对比

git merge tmp  // 合并tmp分支到当前分支


// git pull: 相当于从远程获取最新版本并merge到本地

git pull origin master

// 在实际开发中，git fetch更安全一些



/**
 * 虽然git pull = git fetch + git merge, 但是他们的实现原理是不一样的。
 * 基础知识：git分为本地仓库和远程仓库，一般情况下，我们完成代码后commit到本地仓库生成本地仓库的commit ID，代表当前提交代码的版本号，然后push到远程仓库记录这个版本号。
 * 首先假设本地仓库的master分支上commit ID = 1，origin/master中commit ID = 1，这时远程master分支发生改变，commitId = 2
 * git fetch: 本地库中master的commit ID = 1，远程master为2，这时相当于本地存储了两个代码的版本号，通过merge去合并两个不同的代码版本，如果两个版本都修改了同一处代码，这时merge就会冲突，解决冲突之后会生成一个新的代码版本commit Id = 3.相当于fetch的时候本地master没有变化，但是与远程关联的版本号被更新了，之后在本地合并这两个版本号的代码。
 */