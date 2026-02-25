---
title: astro博客的搭建与编辑及手动提交脚本
description: This post showcases using the markdown admonition feature in Astro Cactus
publishDate: 2025-02-25
tags:
  - blog
---
>注：博主目前并非专业技术人员，~~写这篇文章其实是为了防止以后想再次创建时忘了步骤，提醒一下自己~~，所以以下仅供参考，如有大佬发现不严谨的地方也请在评论区指出——


默认你已经有了一个以 `你的用户名.github.io` 为名称的空白Github仓库（或Netlify、Cloudflare page等托管平台），还有IDE工具（比如vs code）

首先你需要安装git和nodejs

官方安装网址
https://nodejs.org
选LTS（长期支持版），Next → Install → Finish 点一通。
装完打开cmd
`node -v`查看nodejs版本
`npm -v`查看npm版本
如果能看到版本号，比如：`v20.x.x` `10.x.x`，就表明安装成功辣！


不想从零写页面的话，可以直接用一个现成的 Astro 主题。Astro 的主题本质是已经写好的 Astro 项目。如果你已经有一个项目，又想换成某个主题，正确做法是新建一个想换的那个主题的项目，再把内容搬过去；而不是像hexo一样，在现有项目里换主题包来切主题

从哪里找主题？
官方主题库： [https://astro.build/themes](https://astro.build/themes)

找好了主题`https://github.com/xxx/astro-theme-yyy`怎么安装？

首先，在你想放项目的地方运行：`npm create astro@latest`
当它问你：`How would you like to start your new project?`
选 `Use a theme`
然后它会让你粘贴主题地址，你就把刚才的 GitHub 地址贴进去就可以的
等待装完后：`npm run dev`，浏览器打开上面提示你的localhost:4321，就能看到网站雏形了捏。

一个astro文件的结构大概是这样的，各种模板大同小异

```

```

在content里面新建markdown文件来写文章。

写完之后提交到GitHub，page自动deploy。有几个方式：
- 整个文件夹拖到GitHub（说实话挺麻烦的）
- git push

如果你在中国境内，那么push那一步大概率会卡好久，虽然解决方案有每当提交的时候开一下全局代理，但那太麻烦了。这时候你可以设置一个ssh key来一劳永逸地解决这个问题。

每次git add . git commit太麻烦了怎么办？
打开vscode，在一个你喜欢的文件夹里新建一个bat文件（注意补药用记事本！大概率会乱码。以后记事本除了当桌面便签，其他操作尽量不要用它。）



```bash
@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
cls

set "TARGET_DIR=你的博客文件家路径"
title Git自动提交脚本

:: 切换目录
cd /d "%TARGET_DIR%"

echo ============================================
echo   当前路径: %cd%
echo ============================================

:: 1. 检查是否有文件变动
git.exe status

:: 2. 添加文件
echo 正在执行 git add .
git.exe add .

:: 3. 选择提交类型
echo.
echo 请选择提交类型:
echo   1) newpost   - 新增文章
echo   2) edit      - 编辑修改
echo   3) fix       - 修复问题
echo   4) other     - 其他类型
echo.

set /p type_choice="请选择 (1-4，直接回车使用默认): "

:: 设置提交类型前缀
if "%type_choice%"=="" (
    set "commit_prefix="
    goto :get_commit_msg
)

if "%type_choice%"=="1" (
    set "commit_prefix=newpost: "
) else if "%type_choice%"=="2" (
    set "commit_prefix=edit: "
) else if "%type_choice%"=="3" (
    set "commit_prefix=fix: "
) else if "%type_choice%"=="4" (
    set "commit_prefix="
) else (
    echo 无效选择，将使用默认格式
    set "commit_prefix="
)

:get_commit_msg
:: 4. 输入提交信息
echo.
set /p msg="请输入提交信息 (直接回车则使用默认信息): "
if "%msg%"=="" set msg="Update %date% %time%"

:: 5. 组合提交信息
if defined commit_prefix (
    set "commit_msg=!commit_prefix!!msg!"
) else (
    set "commit_msg=!msg!"
)

:: 6. 执行提交
echo 正在提交: !commit_msg!
git.exe commit -m "!commit_msg!"

:: 7. 推送确认
echo.
set /p choice="是否推送至远程仓库? (y/n): "
if /i "!choice!"=="y" (
    echo 正在推送至 master...
    git.exe push origin master
)

echo.
echo ============================================
echo   操作完成！
echo ============================================
pause
```
