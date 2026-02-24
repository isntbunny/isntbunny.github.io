0成本搭建个人博客网站入门

## STEP 0：自检一下需要准备的东西！

泥的电脑上只要有这三样，就够了：

### 1.Node.js 
https://nodejs.org
选LTS（长期支持版）
Next → Install → Finish
装完打开 命令行（Win + R → 输入 cmd）
node -v
npm -v

如果能看到版本号，比如：
v20.x.x
10.x.x

就表示安装完成辣：P

### Git

### 一个 GitHub 个人/团队账号 + 一个仓库


不想从零写页面的话，可以直接用一个现成的 Astro 主题

Astro 的主题本质是已经写好的 Astro 项目。如果你已经有一个项目，又想换成某个主题，正确做法是新建一个想换的那个主题的项目，再把内容搬过去；而不是像hexo一样，在现有项目里换主题包来切主题

## 一、找一个Astro 主题

官方主题库： [https://astro.build/themes](https://astro.build/themes)

---

## 二、导入


```
https://github.com/xxx/astro-theme-yyy
```

记住这个 **GitHub 地址**，用 Astro 命令创建（关键）

在你想放项目的地方运行：

```bash
npm create astro@latest
```

当它问你：

```
How would you like to start your new project?
```

选：

> **Use a theme**

然后它会让你粘贴主题地址，你就把刚才的 GitHub 地址贴进去就可以的

---

### ③ 等它装完

完成后：

```bash
npm run dev
```

浏览器打开上面提示你的localhost:4321，就能看到网站雏形了捏。
