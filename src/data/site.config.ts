import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export type MenuLink = {
	title: string;
	path?: string;
	external?: boolean;
	children?: MenuLink[];
};

export const siteConfig: SiteConfig & { backgroundImage: string; bangumiUsername: string } = {
  author: 'Eucaly',
  date: {
    locale: 'zh-CN',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
  description: '',
  lang: 'zh-CN',
  ogLocale: 'zh_CN',
  title: '変数エラー',
  url: 'https://isntbunny.github.io/',
}

// Used to generate links in both the Header & Footer.
export const menuLinks: MenuLink[] = [
  { path: '/posts/', title: 'Posts' },
  { path: '/uta/', title: 'LyricBook' },
  { path: '/gallery/', title: 'Gallery' },
  { path: '/nav/', title: 'MyNav' },
  { path: '/about/', title: 'About' },
]

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
