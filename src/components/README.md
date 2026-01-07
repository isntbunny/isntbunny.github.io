# Components 组件目录

本目录包含项目中所有的可复用组件，按功能分类组织。

## 📁 目录结构
 
### 🏗️ layout/ - 布局组件
页面布局和结构相关的组件，负责整体页面框架。

- `Footer.astro` - 页脚组件
- `Navbar.astro` - 导航栏组件
- `PostPage.astro` - 文章页面布局组件
- `ConfigCarrier.astro` - 配置载体组件
- `GlobalStyles.astro` - 全局样式组件
- `SideBar.astro` - 侧边栏组件（响应式布局）
- `LeftSideBar.astro` - 左侧边栏组件
- `RightSideBar.astro` - 右侧边栏组件
- `DropdownMenu.astro` - 下拉菜单组件
- `NavMenuPanel.astro` - 导航菜单面板

### 🎮 interactive/ - 交互组件
具有用户交互功能的组件，如切换、搜索、面板等。

- `LightDarkSwitch.svelte` - 主题切换组件
- `LayoutSwitchButton.svelte` - 布局切换按钮
- `Search.svelte` - 搜索功能组件
- `ArchivePanel.svelte` - 归档面板组件
- `FontManager.astro` - 字体管理组件
- `DisplaySettings.svelte` - 显示设置组件
- `OverlayWallpaper.astro` - 覆盖层壁纸组件
- `WallpaperSwitch.svelte` - 壁纸模式切换组件

### 📄 content/ - 内容组件
用于展示内容的组件，如文章卡片、元数据等。

- `PostCard.astro` - 文章卡片组件
- `PostMeta.astro` - 文章元数据组件
- `TypewriterText.astro` - 打字机效果文本组件
- `StatCard.astro` - 统计卡片组件
- `Profile.astro` - 个人资料组件

### 🔧 common/ - 公共组件
通用的、可复用的 UI 组件，分为三个子文件夹：

#### base/ - 基础 UI 组件
- `DropdownPanel` (Astro & Svelte) - 下拉面板容器
- `DropdownItem` (Astro & Svelte) - 下拉选项

#### controls/ - 控制交互组件
- `BackToTop.astro` - 返回顶部按钮
- `ButtonLink.astro` - 链接按钮组件
- `ButtonTag.astro` - 标签按钮组件
- `Pagination.astro` - 静态路由分页组件（Astro 原生分页）
- `ClientPagination.astro` - 客户端 JavaScript 分页组件（DOM 显示/隐藏控制）
- `FloatingTOC.astro` - 浮动目录组件

#### styles/ - 样式组件
- `TOCStyles.astro` - 目录样式组件

### 🧩 widget/ - 小部件组件
各种功能小部件，如音乐播放器、Live2D等。

- `Advertisement.astro` - 广告组件
- `Announcement.astro` - 公告组件
- `Calendar.astro` - 日历组件
- `Categories.astro` - 分类组件
- `Live2DWidget.astro` - Live2D 小部件
- `MusicPlayer.astro` - 音乐播放器组件
- `PioMessageBox.astro` - Pio 消息框组件
- `SidebarTOC.astro` - 侧边栏目录组件
- `SiteStats.astro` - 站点统计组件
- `SpineModel.astro` - Spine 模型组件
- `Tags.astro` - 标签组件
- `WidgetLayout.astro` - 小部件布局组件

### 🔧 misc/ - 杂项组件
各种辅助和工具组件。

- `Icon.astro` - 图标组件
- `IconifyLoader.astro` - Iconify 加载器组件
- `ImageWrapper.astro` - 图片包装器组件
- `License.astro` - 许可证组件
- `Markdown.astro` - Markdown 渲染组件
- `RandomCoverImage.astro` - 随机封面图组件
- `SharePoster.svelte` - 分享海报组件

### 💬 comment/ - 评论组件
评论系统相关组件。

- `index.astro` - 评论主组件
- `Artalk.astro` - Artalk 评论组件
- `Disqus.astro` - Disqus 评论组件
- `Giscus.astro` - Giscus 评论组件
- `Twikoo.astro` - Twikoo 评论组件
- `Waline.astro` - Waline 评论组件

### 📃 pages/ - 页面组件 
页面的相关组件

#### 🎬 pages/bangumi/ - 番组计划组件
Bangumi 番组追踪页面的相关组件，用于展示和管理用户的动漫追番记录。
- `BangumiSection.astro` - 番组分类展示组件，用于展示单个分类的项目列表和筛选控制
- `Card.astro` - 番组卡片组件，展示单个动漫/游戏/书籍作品的基本信息和状态标签
- `FilterControls.astro` - 筛选控制组件，提供按状态筛选的按钮组
- `TabNav.astro` - 标签导航组件，用于在不同分类（书籍、动画、音乐、游戏等）之间切换


### ✨ effects/ - 特效组件
页面特效和动画相关的组件。

- `FancyboxManager.astro` - Fancybox 图片查看器管理组件
- `KatexManager.astro` - Katex 数学公式渲染管理组件
- `SakuraEffect.astro` - 樱花飘落特效组件



## 📚 详细文档

详细的组件使用说明，请查看各目录下的 `README.md` 文件：
- [common/ 公共组件详细文档](./common/README.md)

## 🗂️ 组件分类原则

1. **layout/** - 页面布局和结构
2. **interactive/** - 用户交互功能
3. **content/** - 内容展示
4. **common/** - 公共可复用组件
5. **widget/** - 功能小部件
6. **misc/** - 辅助工具
7. **comment/** - 评论系统
8. **pages/** - 页面特定组件
9. **effects/** - 页面特效和动画
---

