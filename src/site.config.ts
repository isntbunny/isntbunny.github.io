import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";
import { themeConfig } from "./config/theme";

export type MenuLink = {
	title: string;
	path?: string;
	external?: boolean;
	children?: MenuLink[];
};

export const siteConfig: SiteConfig & { backgroundImage: string; bangumiUsername: string } = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Eucaly",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "zh-CN",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description: "",
	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "zh-CN",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "zh_CN",
	/* 
		- Used to construct the meta title property found in src/components/BaseHead.astro L:11 
		- The webmanifest name found in astro.config.ts L:42
		- The link value found in src/components/layout/Header.astro L:35
		- In the footer found in src/components/layout/Footer.astro L:12
	*/
	title: "幸せのカウントダウン",
	// ! Please remember to replace the following site property with your own domain, used in astro.config.ts
	url: "https://isntbunny.github.io/",
	// 页面背景图
	backgroundImage: themeConfig.backgrounds.default,
	// Bangumi.tv 用户名（用于番组计划页面 API 拉取）
	bangumiUsername: "isntbunny",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: MenuLink[] = [
	{ path: "/posts/", title: "Blog" },
	{ path: "/memos/", title: "Memos" },
	{ path: "/gallery/", title: "Gallery" },
	{ path: "/guestbook/", title: "Guestbook" },
	{
		title: "About",
		children: [
			{ path: "/about/", title: "Readme.md" },
			{ path: "/bangumi/", title: "Bangumi" },
		],
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
