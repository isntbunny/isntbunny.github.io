import type { SiteConfig } from "@/types/config";
import { fontConfig } from "./fontConfig";

// 定义站点语言s
// 语言代码，例如：'zh_CN', 'zh_TW', 'en', 'ja', 'ru'。
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	// 站点标题
	title: "幸福（？）倒計時",

	// 站点副标题
	subtitle: "",

	// 站点 URL
	site_url: "https://isntbunny.github.io",

	// 站点描述
	description:
		"歡迎來到Eucaly的部落格！分享學習筆記、生活點滴（也許還會有一些技術文章之類的）",

	// 站点关键词
	keywords: [
		"Eucaly",
		"落桉",
		"博客",
		"个人博客",
		"学习笔记",
	],

	// 主题色
	themeColor: {
		// 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		hue: 270,
		// 是否对访问者隐藏主题色选择器
		fixed: true,
		// 默认模式："light" 亮色，"dark" 暗色，"system" 跟随系统
		defaultMode: "dark",
	},

	// Favicon 配置
	favicon: [
		{
			// 图标文件路径
			src: "https://i.postimg.cc/HxG7bTwc/250806.png",
			// 可选，指定主题 'light' | 'dark'
			// theme: "light",
			// 可选，图标大小
			// sizes: "32x32",
		},
	],

	// 导航栏配置
	navbar: {
		// 导航栏Logo
		// 支持三种类型：Astro图标库，本地图片，网络图片
		// { type: "icon", value: "material-symbols:home-pin-outline" }
		// { type: "image", value: "/assets/images/logo.webp", alt: "Firefly Logo" }
		// { type: "image", value: "https://example.com/logo.png", alt: "Firefly Logo" }
		logo: {
			type: "image",
			value: "https://i.postimg.cc/HxG7bTwc/250806.png",
			alt: "logo",
		},
		// 导航栏标题
		title: "幸福（？）倒計時",
		// 全宽导航栏，导航栏是否占满屏幕宽度，true：占满，false：不占满
		widthFull: true,
		// 导航栏图标和标题是否跟随主题色
		followTheme: true,
	},

	// 站点开始日期，用于统计运行天数
	siteStartDate: "2025-07-16",

	// 文章页底部的"上次编辑时间"卡片开关
	showLastModified: true,

	// 文章过期阈值（天数），超过此天数才显示"上次编辑"卡片
	outdatedThreshold: 30,

	// 是否开启分享海报生成功能
	sharePoster: false,

	// OpenGraph图片功能,注意开启后要渲染很长时间，不建议本地调试的时候开启
	generateOgImages: false,

	// bangumi配置
	bangumi: {
		// Bangumi用户ID
		userId: "1163581",
	},

	// 页面开关配置 - 控制特定页面的访问权限，设为false会返回404
	// bangumi的数据为编译时获取的，所以不是实时数据，请配置bangumi.userId
	pages: {
		// 赞助页面开关
		sponsor: true,
		// 留言板页面开关，需要配置评论系统
		guestbook: true,
		// 番组计划页面开关，含追番、游戏、书籍和音乐，dev调试时只获取一页数据，build才会获取全部数据
		bangumi: true,
	},

	// 文章列表布局配置
	postListLayout: {
		// 默认布局模式："list" 列表模式（单列布局），"grid" 网格模式（多列布局）
		defaultMode: "grid",
		// 是否允许用户切换布局
		allowSwitch: false,
		// 网格布局配置，仅在 defaultMode 为 "grid" 或允许切换布局时生效
		grid: {
			// 是否开启瀑布流布局，同时有封面图和无封面图的混合文章推荐开启
			masonry: true,
			// 网格模式列数：2 或 3
			// 2列是默认模式，在任何侧边栏配置下均可生效
			// 3列模式仅在单侧边栏（或无侧边栏）时生效，
			columns: 3,
		},
	},

	// 分页配置
	pagination: {
		// 每页显示的文章数量
		postsPerPage: 10,
	},

	// 统计分析
	analytics: {
		// Google Analytics ID
		googleAnalyticsId: "",
		// Microsoft Clarity ID
		microsoftClarityId: "",
	},

	// 字体配置
	// 在src/config/fontConfig.ts中配置具体字体
	font: fontConfig,

	// 站点语言，在本配置文件顶部SITE_LANG定义
	lang: SITE_LANG,
};
